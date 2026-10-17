---
name: gerar-site
description: Implementa ou atualiza a estrutura do site usando o stack, os dados e os arquivos editoriais oficiais do repositório.
---

Implemente o site a partir dos arquivos existentes. Antes de editar, leia `.github/copilot-instructions.md`, `AGENTS.md`, `cliente/cliente.json`, os Markdown pertinentes e a estrutura atual da aplicação.

Regras obrigatórias:

1. Preserve o stack atual. Neste projeto: Next.js App Router, JavaScript, CSS puro, sem Tailwind e sem TypeScript.
2. Não recrie o projeto do zero se já existe uma implementação.
3. Use `cliente/cliente.json` como única fonte factual. Não use um `cliente.txt` nem conteúdos antigos como autoridade alternativa.
4. Leia cada arquivo Markdown no servidor, conforme o parser existente. Não mostre ao visitante notas internas, `[FALTA: ...]`, “Para confirmar com o cliente”, “Imagem sugerida” ou rótulos de estrutura editorial.
5. Não renderize toda seção pelo mesmo modelo genérico quando a finalidade das páginas for diferente. Home, cardápio, localização e reservas precisam de composições adequadas ao objetivo de cada uma.
6. Botões são opcionais. Não gere automaticamente um botão por seção; siga o pedido atual e os critérios de aceitação.
7. Cada item de cardápio deve possuir uma associação de imagem individual. Não invente ou reutilize fotos como se representassem pratos diferentes. Informe os itens sem asset.
8. Não crie mapa apontando para endereço inventado. Se a localização não estiver suficientemente confirmada, deixe explícita a pendência.
9. Siga todos os critérios aplicáveis de `docs/criterios-aceitacao-interface.md`.
10. Teste links locais, conteúdo exibido, rotas e build. Use navegador/capturas para verificar o visual se a ferramenta estiver disponível; caso contrário, registre a validação visual como pendente.

Ao final, informe arquivos alterados, critérios aprovados/pendentes/bloqueados e testes realmente executados. Não declare que o site está pronto apenas porque o build passou.
