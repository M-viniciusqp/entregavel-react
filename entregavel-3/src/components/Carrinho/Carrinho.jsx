import Button from '../Button/Button'
import { formatarPreco } from '../../utils/formatarPreco'

function Carrinho({ itens, total, onRemover, onLimpar }) {
  return (
    <section className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-3 text-xl font-semibold text-indigo-600">Carrinho</h2>

      {itens.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {itens.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-2 py-2">
                <div>
                  <p className="font-medium text-gray-800">
                    {item.emoji} {item.nome}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.quantidade} x {formatarPreco(item.preco)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-800">
                    {formatarPreco(item.preco * item.quantidade)}
                  </span>
                  <Button variant="danger" size="sm" onClick={() => onRemover(item.id)}>
                    Remover
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
            <span className="text-lg font-semibold text-gray-700">Total</span>
            <span className="text-2xl font-bold text-gray-900">{formatarPreco(total)}</span>
          </div>

          <Button variant="outline" size="sm" className="mt-3" onClick={onLimpar}>
            Esvaziar carrinho
          </Button>
        </>
      )}
    </section>
  )
}

export default Carrinho
