# Kit do GitHub Copilot — versão corrigida

Este kit reorganiza as instruções compartilhadas, os agentes e os prompts para reduzir contradições e impedir que páginas sejam consideradas prontas sem verificação.

## O que foi corrigido

- Uma hierarquia única para resolver instruções contraditórias.
- Next.js App Router, JavaScript e CSS puro como arquitetura deste projeto; os agentes não devem alternar para HTML solto ou outro framework.
- `cliente/cliente.json` como fonte única dos fatos do cliente. `conteudo/*.md` contém redação e estrutura editorial, não substitui os dados de origem.
- Nenhum botão é obrigatório por seção. CTAs precisam ser explicitamente justificados e não podem ser duplicados.
- Cada item do cardápio tem um campo de imagem próprio; imagem ausente é uma pendência, não justificativa para reutilizar uma foto aleatória.
- A home, o cardápio, a localização e as reservas têm critérios próprios.
- Artista faz auditoria visual, não apenas sugere três mudanças.
- Foi criado o agente Revisador, ausente no material recebido.
- A lista de aceitação fica separada do prompt para gerar o site.
- Um build bem-sucedido não é tratado como prova de qualidade visual.

## Instalação

1. Faça uma cópia de segurança das instruções atuais.
2. Copie `.github/`, `AGENTS.md` e `docs/criterios-aceitacao-interface.md` para a raiz do repositório do site.
3. Se já existir um `AGENTS.md` criado pelo Next.js, preserve intacto o bloco entre `BEGIN:nextjs-agent-rules` e `END:nextjs-agent-rules`. Mescle os critérios deste kit fora desse bloco; não apague as instruções geradas pelo framework.
4. Revise se o caminho do JSON neste repositório é realmente `cliente/cliente.json`. Se for diferente, ajuste a referência em todas as instruções uma única vez; não mantenha duas fontes de verdade.
5. No Copilot, selecione o agente apropriado para cada tarefa. Use `.github/prompts/validar-entrega.prompt.md` após uma implementação relevante.

## Sequência recomendada

1. Auditor de alterações — confere os requisitos pedidos.
2. Corrigidor de erros — implementa os defeitos confirmados.
3. Artista — valida a interface visual renderizada.
4. Revisador — procura regressões e problemas técnicos.
5. Auditor de alterações — verifica novamente cada critério.
6. Auditor de dados — faz uma revisão separada dos dados publicados.

Não é necessário executar todos os agentes em toda alteração trivial. Em mudanças de layout, navegação ou conteúdo que afetem várias páginas, siga a sequência completa.

## Limite deste pacote

O repositório GitHub em si não foi anexado nem conectado nesta conversa. Portanto, estes são arquivos substitutos prontos para copiar para o projeto; não afirmo que arquivos remotos tenham sido alterados.
