import clsx from 'clsx'
import Button from '../Button/Button'
import { formatarPreco } from '../../utils/formatarPreco'

function ProdutoCard({ produto, adicionado, onAdicionar }) {
  return (
    <article className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="mb-3 h-40 w-full rounded-md object-cover"
      />
      <h3 className="font-semibold text-gray-800">{produto.nome}</h3>
      <p className="mb-3 text-lg font-bold text-indigo-600">{formatarPreco(produto.preco)}</p>
      <Button
        onClick={() => onAdicionar(produto)}
        className={clsx(
          'w-full',
          adicionado && 'bg-green-600 hover:bg-green-600 focus:ring-green-300',
        )}
      >
        {adicionado ? '✓ Adicionado!' : 'Adicionar'}
      </Button>
    </article>
  )
}

export default ProdutoCard
