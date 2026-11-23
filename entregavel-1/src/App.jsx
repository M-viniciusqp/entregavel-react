import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Lista from './components/Lista/Lista'
import './App.css'

const tecnologias = ['JSX', 'Componentes funcionais', 'Props', 'Fragments', 'Virtual DOM']

function App() {
  // Fragment (<> </>) permite devolver mais de um elemento sem uma <div> extra,
  // respeitando a regra do elemento raiz único do JSX.
  return (
    <>
      <Header titulo="Meu Primeiro App React" />

      <main className="conteudo">
        <Card
          titulo="Componentização"
          descricao="Dividir a interface em pedaços pequenos e reutilizáveis facilita a manutenção do código."
        />
        <Card
          titulo="JSX"
          descricao="Sintaxe que mistura JavaScript e marcação, usando className no lugar de class."
        />
        <Card
          titulo="Props"
          descricao="Dados passados do componente pai para o filho, que tornam o componente reutilizável."
        />

        <Lista titulo="O que estou aprendendo" itens={tecnologias} />
      </main>

      <Footer texto="© 2026 - Entregável 1 - Fundamentos de React e Componentes" />
    </>
  )
}

export default App
