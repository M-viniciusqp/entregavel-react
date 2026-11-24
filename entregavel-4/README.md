# Entregável 4

## Objetivo
Criar uma aplicação React com vários componentes que compartilham estado por meio do *lifting state up* e usam `useEffect` para sincronizar com sistemas externos (título da aba e timer).

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- Tailwind CSS (v3)
- clsx

## O que a aplicação faz

**Gerenciador de tarefas (Partes 1 e 2):** o estado `tarefas` fica no componente pai (`App`), porque dois componentes irmãos precisam dele:

- `Formulario` recebe a função `onAdicionar` por props. Ele guarda só o texto que está sendo digitado e, ao enviar, chama a função do pai. Se o campo estiver vazio, mostra a mensagem de erro.
- `Lista` recebe o array `tarefas` e as funções `onAlternar` e `onRemover` por props. Permite marcar tarefas como concluídas e removê-las.

As funções de atualização ficam no `App` e nunca alteram o array original (`[...tarefas, nova]`, `map` e `filter`).

**Título da aba (Parte 2):** um `useEffect` no `App` atualiza `document.title` com o número de tarefas pendentes (por exemplo, "3 tarefas pendentes"). O array de dependências é `[pendentes]`, então o efeito só roda quando esse número muda.

**Cronômetro (Parte 3):** o componente `Cronometro` usa um `useEffect` com `setInterval` para contar os segundos em que a página está aberta. O timer é limpo no `return` do efeito (`clearInterval`), para não continuar rodando depois que o componente sai da tela.

## Componentes

- `App` (estado das tarefas e o `useEffect` do título)
- `Formulario`
- `Lista`
- `Cronometro`
- `Button` e `Input` (reaproveitados dos entregáveis anteriores)

## Reflexão

**O que acontece se omitirmos o array de dependências do `useEffect`?**

Sem o array de dependências, o efeito roda depois de toda renderização do componente. Se o efeito atualizar um estado, isso gera uma nova renderização, que roda o efeito de novo, e assim por diante, causando um loop infinito. Mesmo quando não há loop, o efeito executa trabalho desnecessário a cada renderização. No caso do cronômetro, por exemplo, um novo `setInterval` seria criado a cada segundo, e o resultado seria vários timers acumulados. Com o array vazio (`[]`), o efeito roda só uma vez, quando o componente aparece. Com valores no array (`[pendentes]`), ele roda apenas quando algum deles muda.

**Como funciona o fluxo de dados no lifting state up?**

Quando dois componentes irmãos precisam do mesmo dado, o estado é movido para o ancestral comum mais próximo (no projeto, o `App`). A partir daí o fluxo é de mão única: os dados descem do pai para os filhos por props (a `Lista` recebe o array `tarefas`) e os eventos sobem dos filhos para o pai chamando funções recebidas por props (o `Formulario` chama `onAdicionar`). O filho não altera o estado do pai diretamente. Ele pede a mudança, o pai atualiza o estado com `setTarefas`, o React renderiza de novo e todos os filhos recebem os dados atualizados. Assim existe uma única fonte de verdade e os componentes não ficam dessincronizados.
