# EntregÃ¡vel 1

## Objetivo
Desenvolver uma aplicaÃ§Ã£o React utilizando componentes reutilizÃ¡veis, organizaÃ§Ã£o de arquivos e renderizaÃ§Ã£o dinÃ¢mica de informaÃ§Ãµes.

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- HTML5
- CSS3

## Componentes desenvolvidos

**Header:** apresenta o tÃ­tulo e a descriÃ§Ã£o da aplicaÃ§Ã£o.
**Footer:** exibe o rodapÃ© da pÃ¡gina.
**Card:** componente reutilizÃ¡vel que recebe tÃ­tulo e descriÃ§Ã£o atravÃ©s de props.
**Lista:** recebe um array de strings e utiliza o mÃ©todo `.map()` para renderizar dinamicamente os elementos, atribuindo uma `key` Ãºnica a cada item.
**App:** componente principal responsÃ¡vel por organizar e renderizar os demais componentes utilizando React Fragments.

## Como executar o projeto

**1. Clonar o repositÃ³rio**

```bash
git clone URL_DO_REPOSITORIO
```

**2. Acessar a pasta**

```bash
cd entregavel-react/entregavel-1
```

**3. Instalar as dependÃªncias**

```bash
npm install
```

**4. Iniciar o servidor**

```bash
npm run dev
```

## ReflexÃ£o â€” ProgramaÃ§Ã£o imperativa e declarativa

**Qual a diferenÃ§a entre a abordagem imperativa (JavaScript puro/manipulaÃ§Ã£o do DOM) e a declarativa (React)?**

Na programaÃ§Ã£o imperativa, o desenvolvedor descreve passo a passo como as alteraÃ§Ãµes devem acontecer na interface. Utilizando JavaScript puro, podemos selecionar elementos do DOM com o `document.querySelector()` e modificar diretamente seus conteÃºdos.
JÃ¡ na programaÃ§Ã£o declarativa, utilizada pelo React, descrevemos como a interface deve aparecer de acordo com os dados e estados da aplicaÃ§Ã£o. O React fica responsÃ¡vel por atualizar os elementos necessÃ¡rios quando essas informaÃ§Ãµes mudam.

**Por que o Virtual DOM otimiza a performance?**
O Virtual DOM Ã© uma representaÃ§Ã£o da interface mantida em memÃ³ria pelo React.
Quando ocorre uma atualizaÃ§Ã£o, o React compara a nova representaÃ§Ã£o com a anterior para identificar as mudanÃ§as necessÃ¡rias. Em seguida, realiza as alteraÃ§Ãµes apropriadas no DOM real.
Esse processo permite evitar algumas manipulaÃ§Ãµes desnecessÃ¡rias do DOM, que podem ser custosas. Entretanto, o Virtual DOM nÃ£o garante que toda aplicaÃ§Ã£o React serÃ¡ mais rÃ¡pida, pois o desempenho tambÃ©m depende da estrutura e da implementaÃ§Ã£o do projeto.
