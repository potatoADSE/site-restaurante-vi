import Image from 'next/image'
import { Utensils } from 'lucide-react'
import { getSiteContent } from '../../lib/site-content'
import { ActionLink, PageHeading, WhatsAppLink } from '../_components/SiteShell'

const categoryVisuals = [
  {
    match: 'entradas',
    image: '/images/entrada-ilustrativa.jpg',
    alt: 'Porções variadas servidas à mesa; imagem genérica ilustrativa.',
  },
  {
    match: 'frutos',
    image: '/images/frutos-do-mar-ilustrativa.jpg',
    alt: 'Camarões em prato com limão; imagem genérica ilustrativa.',
  },
  {
    match: 'carnes',
    image: '/images/carne-ilustrativa.jpg',
    alt: 'Carne grelhada com acompanhamentos; imagem genérica ilustrativa.',
  },
  {
    match: 'vegetarianas',
    image: '/images/vegetariano-ilustrativo.jpg',
    alt: 'Tigela com vegetais e grãos; imagem genérica ilustrativa.',
  },
  {
    match: 'sobremesas',
    image: '/images/sobremesa-ilustrativa.jpg',
    alt: 'Sobremesa em prato escuro; imagem genérica ilustrativa.',
  },
  {
    match: 'drinks',
    image: '/images/drinque-ilustrativo.jpg',
    alt: 'Coquetel com gelo e cítrico; imagem genérica ilustrativa.',
  },
]

function getCategoryVisual(name) {
  const normalized = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const visual = categoryVisuals.find(({ match }) => normalized.includes(match))
  if (visual) return visual
  if (normalized.includes('drinque')) return categoryVisuals.find(({ match }) => match === 'drinks')
  return null
}

export async function generateMetadata() {
  const { getField } = await getSiteContent()

  return {
    title: getField('cardapio', 'SEO', 'Título SEO'),
    description: getField('cardapio', 'SEO', 'Meta description'),
  }
}

export default async function MenuPage() {
  const { client, getField, menuCategories } = await getSiteContent()
  const introduction = getField('cardapio', 'Introdução', 'Texto publicável')
  const warning = getField('cardapio', 'Introdução', 'Aviso visível obrigatório')
  const concept = menuCategories.find((category) => category.name.startsWith('Experiências'))
  const cards = menuCategories
    .filter((category) => !category.name.startsWith('Experiências'))
    .map((category) => ({ ...category, visual: getCategoryVisual(category.name) }))
    .filter((category) => category.visual && category.example)

  return (
    <div className="menu-page">
      <section className="menu-intro page-width section-pad">
        <PageHeading
          eyebrow="Da cozinha do Tuna"
          title="Uma seleção para descobrir."
          description={introduction}
        />
        <div className="menu-note" role="note">
          <span className="menu-note-mark"><Utensils aria-hidden="true" size={18} /></span>
          <p>{warning}</p>
        </div>
      </section>

      {concept && (
        <section className="menu-concept" aria-label="Conceito mar e terra">
          <div className="menu-concept-inner page-width">
            <p className="eyebrow eyebrow--light">A proposta da casa</p>
            <h2>{concept.description}</h2>
            <span>Mar <i aria-hidden="true">×</i> Terra</span>
          </div>
        </section>
      )}

      <section className="menu-list-section page-width section-pad" aria-labelledby="menu-list-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Sugestões ilustrativas</p>
            <h2 id="menu-list-title">Categorias gastronômicas</h2>
          </div>
          <span className="menu-count">{String(cards.length).padStart(2, '0')} referências</span>
        </div>
        <div className="menu-grid">
          {cards.map((category, index) => (
            <article className="menu-item" key={category.name}>
              <div className="menu-item-image">
                <Image
                  src={category.visual.image}
                  alt={category.visual.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="menu-item-number">0{index + 1}</span>
                <span className="image-note">Imagem ilustrativa</span>
              </div>
              <div className="menu-item-copy">
                <p className="menu-category">{category.name}</p>
                <h3>{category.example}</h3>
                <p>{category.description}</p>
                <span className="provisional-label">Sugestão provisória · validar com o restaurante</span>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-contact">
          <div>
            <p className="eyebrow">Consulte a equipe</p>
            <h2>Quer saber o que está disponível?</h2>
          </div>
          <WhatsAppLink
            client={client}
            message={client.funcionalidades.whatsapp.mensagens_sugeridas.cardapio}
            variant="dark"
          >
            Consultar cardápio atualizado
          </WhatsAppLink>
        </div>
        <p className="menu-source-note">
          As imagens são referências visuais de bancos gratuitos. Não representam fotografias dos pratos do Tuna Mar e Terra.
        </p>
      </section>
    </div>
  )
}