# Entregável 2

## Objetivo
Criar uma biblioteca de componentes reutilizáveis em React, estilizados com Tailwind CSS e com variações visuais controladas por props.

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- Tailwind CSS (v3)
- clsx
- HTML5

## Configuração do Tailwind

O Tailwind foi instalado junto com `postcss` e `autoprefixer`. No `tailwind.config.js`, a diretiva `content` aponta para a pasta `src` (e para o `index.html`), para que o Tailwind gere apenas as classes que realmente são usadas:

```js
content: ['./index.html', './src/**/*.{js,jsx}'],
```

O arquivo `src/index.css` contém as diretivas `@tailwind base`, `@tailwind components` e `@tailwind utilities` e é importado no `main.jsx`.

## Componentes desenvolvidos

**Button:** botão com a prop `variant` (`primary`, `secondary`, `danger`, `outline`) e a prop `size` (`sm`, `md`, `lg`).
**Badge:** etiqueta com a prop `variant` (`default`, `info`, `success`, `warning`, `danger`).
**Input:** campo de texto com `label` e mensagem de erro opcional (prop `erro`). Repassa as demais props para o `<input>`.
**Card:** componente da semana anterior, refatorado para usar classes do Tailwind em vez de arquivo CSS.
**Alert:** aviso com a prop `variant` (`success`, `error`, `warning`) que muda as cores de fundo, texto e borda.
**App:** página que reúne e demonstra todos os componentes.

As classes de cada variante ficam escritas por completo em objetos (por exemplo `'bg-red-600 text-white'`) e são combinadas com o `clsx`. Isso é necessário porque o Tailwind não reconhece classes montadas dinamicamente, como `bg-${cor}-500`.

## Reflexão — Tailwind CSS e CSS tradicional

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React?**

**Vantagens**

- A estilização fica no próprio componente, dentro do JSX. Não é preciso alternar entre arquivos `.js` e `.css` nem inventar nomes de classes.
- Variações por props ficam simples: basta escolher quais classes aplicar de acordo com a prop (`variant`, `size`).
- O CSS final é pequeno, pois o Tailwind gera apenas as classes que aparecem no código.
- Não há conflito de estilos globais entre componentes, já que cada um usa classes utilitárias próprias.
- O padrão de espaçamentos, cores e tamanhos mantém o visual consistente e acelera o desenvolvimento.

**Desvantagens**

- O JSX fica mais carregado, com muitas classes em uma única linha, o que pode prejudicar a leitura.
- Existe uma curva de aprendizado para memorizar os nomes das classes utilitárias.
- Classes dinâmicas precisam ser escritas por completo, o que exige organizar as variantes em objetos.
- O estilo fica misturado com a estrutura do componente, o que vai contra a separação tradicional entre HTML e CSS.
- Exige configuração inicial (PostCSS, `tailwind.config.js`) e dependência de uma ferramenta de build.
