import { useState, useRef, useEffect } from 'react'
import Contador from './components/Contador/Contador'
import ProdutoCard from './components/ProdutoCard/ProdutoCard'
import Carrinho from './components/Carrinho/Carrinho'
import Checkout from './components/Checkout/Checkout'
import { produtos } from './data/produtos'

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [adicionadoId, setAdicionadoId] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  function adicionar(produto) {
    const existente = carrinho.find((item) => item.id === produto.id)

    if (existente) {
      // já está no carrinho: cria um novo array trocando só a quantidade desse item
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item,
        ),
      )
    } else {
      // novo item: spread copia o array antigo e coloca o item no final
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }])
    }

    // feedback visual no botão por 1,2 segundo
    setAdicionadoId(produto.id)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setAdicionadoId(null), 1200)
  }

  function remover(id) {
    // filter devolve um array novo, sem alterar o original
    setCarrinho(carrinho.filter((item) => item.id !== id))
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0)

  return (
    <>
      <header className="bg-indigo-600 py-6 text-center text-white">
        <h1 className="text-3xl font-bold">Loja de Periféricos</h1>
        <p className="mt-1 text-indigo-100">Interatividade com useState</p>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <Contador />

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">Produtos</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
                adicionado={adicionadoId === produto.id}
                onAdicionar={adicionar}
              />
            ))}
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <Carrinho
            itens={carrinho}
            total={total}
            onRemover={remover}
            onLimpar={() => setCarrinho([])}
          />
          <Checkout
            total={total}
            carrinhoVazio={carrinho.length === 0}
            onFinalizar={() => setCarrinho([])}
          />
        </div>
      </main>

      <footer className="bg-gray-800 py-4 text-center text-sm text-gray-300">
        Entregável 3 - Interatividade e useState
      </footer>
    </>
  )
}

export default App
