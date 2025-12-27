# Lista-de-tarefas

Projeto simples de lista de tarefas com CRUD básico (criar, ler, atualizar, excluir) e modo escuro.

Tecnologias: HTML, CSS e JavaScript (vanilla).

Demo: https://eduardojmm.github.io/Lista-de-tarefas/

Objetivo
- Projeto para aprendizado e para incluir no currículo como exemplo de aplicação web front-end simples.

O que o projeto demonstra
- Manipulação do DOM com JavaScript moderno (`createElement`, `textContent`, `dataset`).
- Uso de `addEventListener` e event delegation para melhor manutenção.
- Persistência local com `localStorage` (estado das tarefas e preferência de tema).
- Boas práticas de segurança: evitar `innerHTML` para entradas de usuário (mitigação básica de XSS).
- Edição inline de tarefas, marcação de concluídas e remoção.

Como executar localmente
1. Abra o arquivo `index.html` no navegador (arrastar para a janela do navegador ou usar `Live Server` no VS Code).
2. Digite uma tarefa no campo e pressione `Adicionar` ou `Enter`.
3. Use os botões ao lado de cada tarefa para concluir, editar ou excluir.

Pontos para mencionar no currículo/entrevista
- Implementação de um CRUD completo no front-end usando apenas JavaScript.
- Explicação das decisões: por que `addEventListener` em vez de `onclick`, por que evitar `innerHTML`, e vantagens do event delegation.
- Como foi implementada a persistência com `localStorage` e por que isso é útil para protótipos.
- Possíveis melhorias que você pode descrever: migração para backend (API REST), testes automatizados, arquitetura MVC/Componentes, ou usar frameworks (React/Vue) para escalar o projeto.

Melhorias futuras (sugestões)
- Adicionar testes unitários/end-to-end.
- Sincronização com um backend (ex.: Firebase ou API REST) para persistência entre dispositivos.
- Melhorar acessibilidade (labels mais explícitos, roles ARIA onde necessário).
- Implementar filtros e ordenação de tarefas.

Licença
- Código de exemplo — livre para uso e modificação.
