import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

// Este componente NÃO guarda a lista de tarefas. Ele só guarda o texto que está
// sendo digitado e, ao enviar, avisa o pai chamando a função recebida por props.
function Formulario({ onAdicionar }) {
  const [texto, setTexto] = useState('')
  const [erro, setErro] = useState('')

  function enviar(e) {
    e.preventDefault()

    if (texto.trim() === '') {
      setErro('Digite o nome da tarefa.')
      return
    }

    onAdicionar(texto.trim())
    setTexto('')
    setErro('')
  }

  return (
    <form onSubmit={enviar} className="rounded-lg bg-white p-5 shadow" noValidate>
      <h2 className="mb-3 text-xl font-semibold text-indigo-600">Nova tarefa</h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <Input
            id="tarefa"
            placeholder="Ex: estudar useEffect"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            erro={erro}
            aria-label="Nome da tarefa"
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </div>
    </form>
  )
}

export default Formulario
