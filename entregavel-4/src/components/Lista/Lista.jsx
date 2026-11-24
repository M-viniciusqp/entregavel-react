import clsx from 'clsx'
import Button from '../Button/Button'

// Recebe o array e as funções por props: não tem estado próprio da lista.
function Lista({ tarefas, onAlternar, onRemover }) {
  return (
    <section className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-3 text-xl font-semibold text-indigo-600">Tarefas</h2>

      {tarefas.length === 0 ? (
        <p className="text-gray-500">Nenhuma tarefa por aqui. Adicione a primeira!</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="flex items-center justify-between gap-3 py-2">
              <label className="flex flex-1 cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => onAlternar(tarefa.id)}
                  className="h-5 w-5 accent-indigo-600"
                />
                <span className={clsx(tarefa.concluida && 'text-gray-400 line-through')}>
                  {tarefa.texto}
                </span>
              </label>
              <Button variant="danger" size="sm" onClick={() => onRemover(tarefa.id)}>
                Remover
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Lista
