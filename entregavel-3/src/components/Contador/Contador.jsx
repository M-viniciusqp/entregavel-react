import { useState } from 'react'
import Button from '../Button/Button'

function Contador() {
  // useState devolve [valorAtual, funcaoAtualizadora]
  const [contagem, setContagem] = useState(0)

  // Cada chamada de setContagem faz o React renderizar o componente de novo
  // com o valor novo.
  return (
    <section className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-1 text-xl font-semibold text-indigo-600">Contador</h2>
      <p className="mb-4 text-sm text-gray-600">
        Exemplo simples de useState: o número muda e a tela é renderizada de novo.
      </p>
      <div className="flex items-center gap-4">
        <Button variant="secondary" onClick={() => setContagem(contagem - 1)}>
          -
        </Button>
        <span className="min-w-12 text-center text-3xl font-bold text-gray-800">{contagem}</span>
        <Button onClick={() => setContagem(contagem + 1)}>+</Button>
        <Button variant="outline" size="sm" onClick={() => setContagem(0)}>
          Zerar
        </Button>
      </div>
    </section>
  )
}

export default Contador
