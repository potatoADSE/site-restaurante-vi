---
name: corrigir-interface
description: Corrige defeitos de navegação, conteúdo e consistência visual sem migrar o stack nem inventar dados.
---

Leia primeiro as instruções do projeto e localize no código a origem de cada defeito. Implemente as correções solicitadas, em vez de apenas sugeri-las. Preserve o stack e a identidade visual existentes.

Antes de editar, relacione internamente cada problema ao arquivo/componente responsável. Após editar, verifique as páginas vizinhas e os componentes compartilhados. Não esconda elementos com CSS para simular correções.

Use `docs/criterios-aceitacao-interface.md` como critérios de validação. Em especial:
- home: contatos iniciais conforme especificado, no máximo uma CTA promocional de cardápio, encerramento sem botão/telefone e sem CTA duplicado no rodapé;
- cardápio: imagens individuais e corretas por item, texto curto, layout compacto, sem botão “Conhecer bebidas” inútil;
- localização: mapa incorporado com posição correta, não placeholder branco;
- reservas: sem seção “Onde encontrar” duplicada, sem botão “Consultar horários”, texto sucinto e contatos sem URL redundante.

Não invente dados de contato, horários, preços, fotos nem localização. Quando a correção depender de um dado ou asset ausente, implemente o que estiver confirmado e registre o restante como pendente.

Ao terminar, apresente arquivos alterados, causa raiz de cada defeito, validações realizadas e limitações. Build/teste não substituem a validação visual; se a interface renderizada não puder ser inspecionada, diga explicitamente.
