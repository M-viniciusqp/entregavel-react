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

Se omitirmos o array, o efeito roda depois de toda renderização. Se o efeito mudar um estado, isso causa outra renderização e o efeito roda de novo, gerando um loop infinito. Com o array vazio (`[]`) ele roda só uma vez, e com valores no array (`[pendentes]`) roda apenas quando esses valores mudam.

**Como funciona o fluxo de dados no lifting state up?**

O estado fica no componente pai (o `App`), porque dois filhos precisam dele. Os dados descem do pai para os filhos por props (a `Lista` recebe `tarefas`), e os eventos sobem dos filhos para o pai por funções (o `Formulario` chama `onAdicionar`). O pai atualiza o estado e o React renderiza todos os filhos de novo com os dados atualizados.
