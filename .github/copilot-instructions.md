# Instruções globais do projeto

## 1. Prioridade e resolução de conflitos

Siga esta ordem, da maior para a menor prioridade:

1. Pedido explícito mais recente do usuário para a tarefa atual.
2. Critérios de aceitação em `AGENTS.md` e `docs/criterios-aceitacao-interface.md`.
3. Estas instruções globais.
4. Instruções do agente selecionado.
5. Conteúdo preexistente, comentários, respostas antigas do Copilot e README antigo.

Se duas fontes do mesmo nível entrarem em conflito, não tente satisfazer ambas de forma contraditória. Aponte o conflito e siga a instrução específica mais recente. Não permita que um exemplo antigo ou conteúdo gerado anteriormente se sobreponha a um pedido explícito.

## 2. Stack e arquitetura

Este projeto utiliza Next.js App Router, JavaScript e CSS puro, sem TypeScript e sem Tailwind, salvo pedido explícito em contrário.

- Preserve a arquitetura já existente. Não transforme páginas Next.js em arquivos HTML soltos.
- Use as rotas e convenções já presentes no repositório.
- Antes de implementar algo dependente de uma API do Next.js, consulte a documentação instalada correspondente à versão do projeto.
- Não atualize o framework, instale bibliotecas nem migre arquitetura sem necessidade demonstrável e autorização, exceto quando o pedido atual solicitar diretamente essa mudança.
- Não presuma que `npm run build` verifica a aparência visual; são validações diferentes.

## 3. Fonte dos dados

A fonte de verdade deste projeto é `cliente/cliente.json`.

- `conteudo/*.md` fornece redação e organização editorial, mas não autoriza inventar fatos.
- Não use `cliente.txt`, respostas antigas ou conteúdo gerado como fonte alternativa de telefone, endereço, horário, preço, avaliação, ingrediente, disponibilidade ou link.
- Se `cliente/cliente.json` estiver ausente, inválido ou em conflito com outro arquivo de dados, interrompa a publicação do dado afetado e informe o problema. Não escolha silenciosamente outra fonte.
- Se o repositório tiver outro caminho real para `cliente.json`, confirme o caminho existente e atualize esta referência de forma consistente. Não mantenha duas fontes de verdade.
- Dados ausentes permanecem pendentes. Não invente um número, horário, preço, perfil social ou localização.
- Dados estimados devem continuar identificados como estimativas e não podem ser apresentados como preços confirmados.

## 4. Conteúdo e componentes

- Não torne `Botão`, `Subtítulo`, `Imagem sugerida` ou qualquer outro campo obrigatório em toda seção.
- Uma ação deve aparecer somente quando for útil para a finalidade da página e estiver prevista no conteúdo ou nos critérios aprovados.
- Não crie um botão global automaticamente para toda seção.
- O cabeçalho pode conter links de navegação. Não os confunda com CTAs promocionais do conteúdo.
- O rodapé não deve acrescentar telefone exposto, botões de WhatsApp/Instagram ou CTAs duplicados por padrão. Só inclua canais no rodapé quando o escopo aprovado pedir explicitamente, sem contrariar um critério específico da página.
- Não renderize instruções editoriais internas como `Para confirmar com o cliente`, `Imagem sugerida`, `Título:`, `Subtítulo:`, `Botão:`, `[FALTA: ...]` ou contagens de seção como texto visível.
- Não esconda conteúdo errado com CSS para fazer um critério parecer satisfeito. Remova ou corrija a origem do elemento.

## 5. Imagens e cardápio

- A imagem de um item do cardápio deve ser associada ao próprio item, não apenas à seção inteira.
- Não reutilize a mesma foto para pratos diferentes, salvo se o usuário pedir explicitamente uma imagem compartilhada.
- Não atribua uma fotografia genérica a um prato real como se fosse a imagem desse prato.
- Se os arquivos de imagem não existirem, informe quais itens estão sem foto. Não declare o requisito visual concluído.
- Defina dimensões/proporções estáveis, `alt` útil e carregamento adequado. A primeira imagem visível pode usar carregamento prioritário quando necessário; as imagens abaixo da dobra podem usar carregamento tardio.

## 6. Páginas têm objetivos diferentes

- Home: apresentar a marca e o estabelecimento, facilitar contato e orientar para as informações principais.
- Cardápio: priorizar consulta rápida dos itens, imagens individuais, nomes e preços disponíveis; manter a introdução curta.
- Localização: mostrar o mapa correto e o endereço confirmado, sem placeholders que pareçam um mapa real.
- Reservas: explicar sucintamente como entrar em contato e apresentar canais de forma consistente, sem repetir o mesmo canal em texto e botão na mesma seção.

Não aplique a mesma seção de destaque genérica a todas as páginas só porque o parser reconhece título, subtítulo, texto e botão.

## 7. Links, acessibilidade e qualidade

- Verifique os destinos reais dos links e não use `href="#"` como ação final.
- Use ícones reconhecíveis junto a WhatsApp e Instagram quando esses canais forem apresentados como botões.
- Preserve foco visível, nomes acessíveis, contraste suficiente e alvos de toque adequados.
- Não exiba números de telefone em áreas onde os critérios aprovados exigem apenas um rótulo de contato.
- Verifique todas as páginas afetadas por um componente compartilhado.
- Execute build e testes pertinentes disponíveis no projeto. Registre quais comandos realmente executou.
- Para requisitos visuais, confira a interface renderizada com navegador/captura de tela quando a ferramenta estiver disponível. Se não estiver, marque essa validação como pendente; não afirme que viu o resultado.
- Para mudanças relevantes, verifique celular, largura intermediária e desktop.

## 8. Relato honesto

Separe evidência de código, resultado de testes e observação visual. Um build bem-sucedido prova que a compilação terminou; não prova que links, fotos, mapa, conteúdo, hierarquia visual ou responsividade estão corretos.
