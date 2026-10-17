# Regras centrais do repositório

As instruções globais em `.github/copilot-instructions.md` aplicam-se a todos os agentes. Os critérios detalhados para interface estão em `docs/criterios-aceitacao-interface.md`.

## Fonte única de verdade

- Dados do cliente: `cliente/cliente.json`.
- Conteúdo editorial: `conteudo/*.md` e suas traduções, quando existirem.
- Arquitetura atual: Next.js App Router, JavaScript e CSS puro.
- Não introduza uma segunda fonte de dados nem misture o prompt de geração do site com estas regras permanentes.

## Critérios de aceitação obrigatórios

Antes de declarar uma alteração pronta, avalie cada critério aplicável em `docs/criterios-aceitacao-interface.md`. Não aprove um requisito sem evidência. Para critérios visuais, a inspeção estática do código não substitui a conferência da interface renderizada.

## Regras para todos os agentes

1. Inspecionar todas as páginas impactadas, não apenas a home.
2. Pesquisar CTAs, botões, links, textos e seções duplicados.
3. Corrigir a origem do defeito, em vez de escondê-lo com CSS.
4. Verificar os componentes compartilhados e procurar regressões nas outras páginas.
5. Distinguir dados confirmados, conteúdo editorial, inferências e pendências.
6. Não inventar fatos, preços, fotos reais, links, horários ou localizações.
7. Informar limitações de validação visual, de links ou de assets.
8. Não misturar revisão de dados, revisão visual e revisão técnica em uma única aprovação genérica.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
