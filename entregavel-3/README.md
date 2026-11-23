# Entregável 3

## Objetivo
Criar uma aplicação React interativa com estado, usando `useState`, para entender a re-renderização, a imutabilidade do estado e a reação a eventos do usuário.

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- Tailwind CSS (v3)
- clsx

## O que a aplicação faz

**Contador (Parte 1):** exemplo simples de `useState`, com botões para aumentar, diminuir e zerar. A cada clique o React renderiza o componente de novo com o valor atualizado.

**Carrinho de compras (Parte 2):** lista de produtos com botão "Adicionar". O carrinho é um estado do `App` e as funções `adicionar` e `remover` nunca alteram o array original:

- adicionar item novo: `setCarrinho([...carrinho, { ...produto, quantidade: 1 }])`
- adicionar item que já existe: `map` criando um objeto novo com `{ ...item, quantidade: item.quantidade + 1 }`
- remover: `filter`

O valor total é calculado com `reduce` a cada renderização. Ao clicar em "Adicionar", o botão fica verde e mostra "✓ Adicionado!" por cerca de 1 segundo.

**Checkout (Parte 3):** formulário com nome e e-mail. Se o nome estiver vazio (ou o e-mail não tiver `@`), o campo ganha borda vermelha e uma mensagem de erro, usando classes do Tailwind. Com os dados válidos a compra é finalizada, o carrinho é esvaziado e aparece um alerta de sucesso.

## Componentes

- `Contador`
- `ProdutoCard`
- `Carrinho`
- `Checkout`
- `Button`, `Input` e `Alert` (reaproveitados do entregável 2)

## Imagens

As fotos dos produtos (pasta `public/produtos`) vêm do Wikimedia Commons:

- `mouse.jpg`, `mousepad.jpg` e `monitor.jpg`: domínio público
- `webcam.jpg`: CC0
- `teclado.jpg`: "Mechanical Keyboard.jpg", licença CC BY-SA 4.0
- `headset.jpg`: "Logitech G35 side view.jpg", licença CC BY-SA 3.0

## Reflexão — Imutabilidade do estado

**Por que não devemos mutar o estado diretamente (ex: `carrinho.push(item)`) e qual a importância do spread operator (`[...carrinho, item]`) no React?**

O React decide se precisa renderizar o componente de novo comparando o valor antigo do estado com o novo. Para arrays e objetos, essa comparação é feita pela referência (o endereço na memória), e não pelo conteúdo. Quando fazemos `carrinho.push(item)`, o mesmo array é modificado e a referência continua igual. O React entende que nada mudou e a tela não é atualizada, mesmo que os dados tenham mudado. Além disso, alterar o estado fora da função atualizadora deixa o comportamento imprevisível e dificulta encontrar bugs.

Com o spread operator, `[...carrinho, item]` cria um array novo, copiando os itens antigos e adicionando o novo no final. Como a referência é nova, o React percebe a mudança, renderiza o componente e a interface fica sincronizada com os dados. O mesmo vale para objetos (`{ ...item, quantidade: 2 }`) e para métodos como `map` e `filter`, que também devolvem uma cópia. Assim o estado anterior permanece intacto, o que deixa o código mais previsível e fácil de depurar.
