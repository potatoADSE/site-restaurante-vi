---
name: validar-entrega
description: Executa a revisão final pós-implementação usando critérios de aceitação comuns e evidências, sem corrigir o código.
---

Faça uma validação final de leitura, sem editar arquivos.

1. Leia o pedido que motivou a alteração, `AGENTS.md`, `.github/copilot-instructions.md` e `docs/criterios-aceitacao-interface.md`.
2. Transforme cada requisito aplicável em um item verificável.
3. Inspecione todos os arquivos e componentes relacionados, incluindo cabeçalho, rodapé e elementos compartilhados.
4. Conte e procure CTAs repetidos, textos duplicados, links vazios, âncoras inexistentes, placeholders e seções repetidas.
5. Verifique os dados publicados contra `cliente/cliente.json`.
6. Confira rotas e referências de imagens; para o cardápio, verifique a imagem de cada item individualmente.
7. Rode somente os testes já disponíveis e apropriados, sem instalar dependências nem alterar o projeto.
8. Se houver navegador visual, confira todas as páginas afetadas em celular, largura intermediária e desktop. Sem navegador, marque esses pontos como não verificados.
9. Não use build verde como substituto para as verificações de conteúdo, funcionamento e visual.

Produza um relatório com uma linha por requisito: `APROVADO`, `PENDENTE` ou `BLOQUEADO`; evidência; arquivo/área; e motivo quando não estiver aprovado. Não faça alterações e não invente evidências.
