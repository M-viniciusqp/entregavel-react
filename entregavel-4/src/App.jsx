import { useState, useEffect } from 'react'
import Formulario from './components/Formulario/Formulario'
import Lista from './components/Lista/Lista'
import Cronometro from './components/Cronometro/Cronometro'

function App() {
  // O estado das tarefas fica aqui, no pai, porque dois filhos precisam dele:
  // o Formulario (que adiciona) e a Lista (que mostra, marca e remove).
  const [tarefas, setTarefas] = useState([])

  const pendentes = tarefas.filter((t) => !t.concluida).length

  // useEffect: sincroniza o título da aba do navegador com o estado.
  // Roda sempre que "pendentes" muda.
  useEffect(() => {
    document.title =
      pendentes === 0
        ? 'Nenhuma tarefa pendente'
        : `${pendentes} ${pendentes === 1 ? 'tarefa pendente' : 'tarefas pendentes'}`
  }, [pendentes])

  function adicionar(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto, concluida: false }])
  }

  function alternar(id) {
    setTarefas(tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)))
  }

  function remover(id) {
    setTarefas(tarefas.filter((t) => t.id !== id))
  }

  return (
    <>
      <header className="bg-indigo-600 py-6 text-center text-white">
        <h1 className="text-3xl font-bold">Gerenciador de Tarefas</h1>
        <p className="mt-1 text-indigo-100">
          {pendentes} pendente(s) de {tarefas.length} no total
        </p>
      </header>

      <main className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        {/* dados descem por props, eventos sobem chamando as funções do pai */}
        <Formulario onAdicionar={adicionar} />
        <Lista tarefas={tarefas} onAlternar={alternar} onRemover={remover} />
        <Cronometro />
      </main>

      <footer className="bg-gray-800 py-4 text-center text-sm text-gray-300">
        Entregável 4 - Lifting State Up e useEffect
      </footer>
    </>
  )
}

export default App
