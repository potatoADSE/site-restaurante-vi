import { cache } from 'react'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

function parseEditorial(markdown) {
  const pages = {}
  let currentPage = null
  let currentSection = null

  for (const line of markdown.split(/\r?\n/)) {
    const pageMatch = line.match(/^## \d+\.\s.+?\s+\(`([^`]+)`\)$/)
    if (pageMatch) {
      const pageKey = pageMatch[1] === '/' ? 'home' : pageMatch[1].slice(1)
      currentPage = pages[pageKey] = { sections: {} }
      currentSection = null
      continue
    }

    const sectionMatch = line.match(/^### (.+)$/)
    if (sectionMatch && currentPage) {
      currentSection = currentPage.sections[sectionMatch[1]] = {
        fields: {},
        lines: [],
      }
      continue
    }

    if (!currentSection) continue

    currentSection.lines.push(line)
    const fieldMatch = line.match(/^\s*- \*\*(.+?)\*\*:\s*(.*)$/)
    if (!fieldMatch) continue

    const [, label, value] = fieldMatch
    currentSection.fields[label] ??= []
    currentSection.fields[label].push(value)
  }

  return pages
}

function getField(pages, page, section, label) {
  return pages[page]?.sections[section]?.fields[label]?.[0] ?? ''
}

function parseMenuCategories(lines) {
  const categories = []
  let currentCategory = null

  for (const line of lines ?? []) {
    const categoryMatch = line.match(/^- \*\*(.+?)\*\*$/)
    if (categoryMatch) {
      currentCategory = {
        name: categoryMatch[1],
        description: '',
        examples: [],
        needsConfirmation: false,
      }
      categories.push(currentCategory)
      continue
    }

    if (!currentCategory) continue

    const fieldMatch = line.match(/^\s+- \*\*(.+?)\*\*:\s*(.*)$/)
    if (!fieldMatch) continue

    const [, label, value] = fieldMatch
    if (label.startsWith('Texto publicável')) {
      currentCategory.description = value
      currentCategory.needsConfirmation = label.includes('condicionado à confirmação')
    }
    if (label.startsWith('Nomes ilustrativos')) {
      currentCategory.examples = value
        .split(';')
        .map((example) => example.replace(/\s*[—-]\s*sugestão ilustrativa.*$/i, '').trim())
        .filter(Boolean)
    }
  }

  return categories
}

function normalizeCategory(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/drinks?/g, 'drinque')
    .replace(/drinques?/g, 'drinque')
    .replace(/[^a-z0-9]/g, '')
}

export const getSiteContent = cache(async () => {
  const root = process.cwd()
  const [clientSource, markdown] = await Promise.all([
    readFile(path.join(root, 'cliente/cliente.json'), 'utf8'),
    readFile(path.join(root, 'conteudo/conteudo-provisorio.md'), 'utf8'),
  ])

  const client = JSON.parse(clientSource)
  const editorial = parseEditorial(markdown)
  const menuSource = editorial.cardapio?.sections['Categorias e texto de apresentação']
  const menuEditorial = parseMenuCategories(menuSource?.lines).filter(
    (category) => !category.needsConfirmation,
  )
  const menuCategories = client.cardapio_provisorio.categorias_sugeridas
    .map((category) => {
      const match = menuEditorial.find(
        (item) => normalizeCategory(item.name) === normalizeCategory(category.nome),
      )

      return match
        ? {
            name: category.nome,
            description: match.description || category.descricao,
            example: match.examples[0] || '',
          }
        : null
    })
    .filter(Boolean)

  return { client, editorial, menuCategories, getField: (...args) => getField(editorial, ...args) }
})