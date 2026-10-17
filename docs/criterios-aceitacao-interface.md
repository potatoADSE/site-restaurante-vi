# Critérios de aceitação de interface

Estes critérios traduzem os defeitos já observados em verificações concretas. Em outros sites, aplique os critérios correspondentes ao pedido e adapte os detalhes específicos sem perder o princípio de evitar duplicação.

## Home

1. Na primeira seção, os canais de contato pedidos aparecem como botões distintos, com símbolo reconhecível, rótulo acessível e link confirmado.
2. Dentro do conteúdo da home, há no máximo uma chamada promocional explícita “Ver cardápio”. O link de navegação global “Cardápio” não conta como CTA promocional.
3. O fechamento editorial da home contém o texto “Fale conosco pelo WhatsApp” e a fotografia prevista, sem número de telefone exposto e sem botão de contato. Não acrescente um botão duplicado no rodapé global.
4. A home apresenta a marca e o estabelecimento; não deve copiar a composição, a imagem de destaque e a chamada inicial da página de cardápio.

## Cardápio

5. Cada item exibido tem sua própria imagem associada, quando a imagem correspondente existe e foi identificada. Imagem ausente deve ser listada como pendência, nunca substituída por uma foto aleatória apresentada como real.
6. Nomes e preços são legíveis e fiéis aos dados de origem. Descrições são curtas e úteis; não inventar ingredientes, preços ou benefícios.
7. A apresentação é compacta: fotografias pequenas e proporcionais, tipografia hierarquizada, pouco texto introdutório e acesso rápido à lista de itens.
8. Não existe botão inútil “Conhecer bebidas” que retorne ao início da mesma página. Também não deve sobrar âncora ou manipulador exclusivo para essa ação.

## Localização

9. O espaço destinado ao mapa mostra um mapa incorporado com localização confirmada. Um espaço branco, uma imagem substituta ou um mapa sem destino válido não satisfaz o requisito.
10. Se o link do mapa estiver ausente, não invente uma localização exata. Use apenas um endereço confirmado para construir uma pesquisa de mapa, se isso for permitido pelo escopo, e declare a validação do pin como pendente até conferência.

## Reservas

11. A seção “Onde encontrar” não é repetida sem propósito; mantenha somente a ocorrência útil.
12. Não existe botão “Consultar horários” quando ele não faz parte do fluxo aprovado.
13. O texto explica como reservar sem parágrafos repetidos nem instruções desnecessárias.
14. WhatsApp e Instagram aparecem como opções de contato claras, com respectivos símbolos e links confirmados. Não exiba o URL do Instagram em texto corrido e, em seguida, outro botão para a mesma ação.
15. Não duplique o mesmo canal de contato na mesma seção nem acrescente mais CTAs desnecessários no final da página.

## Comportamento global e responsividade

16. O cabeçalho global pode conter navegação. Rodapés e componentes compartilhados não podem reintroduzir elementos explicitamente removidos da seção de encerramento da página.
17. Todos os links locais apontam para rotas reais. Não deixar `href="#"`, âncoras inexistentes, botões sem ação ou links de exemplo.
18. Verificar as páginas afetadas inteiras em larguras aproximadas de 390 px, 768 px e 1440 px, ou em larguras equivalentes disponíveis na ferramenta utilizada.
19. Conferir alinhamento, sobreposições, cortes, tamanhos de texto, proporções das imagens, espaçamento e foco/contraste dos controles.
20. Um `npm run build` bem-sucedido não substitui as verificações funcionais nem visuais.

## Como reportar

Para cada item aplicável, informar `APROVADO`, `PENDENTE` ou `BLOQUEADO`, com evidência concreta. Se a ferramenta não permitir abrir a interface renderizada, não aprovar os critérios que dependem de inspeção visual.
