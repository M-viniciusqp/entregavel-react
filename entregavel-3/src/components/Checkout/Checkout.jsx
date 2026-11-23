import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Alert from '../Alert/Alert'
import { formatarPreco } from '../../utils/formatarPreco'

function Checkout({ total, carrinhoVazio, onFinalizar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [erros, setErros] = useState({})
  const [concluido, setConcluido] = useState(false)

  function validar() {
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'O nome é obrigatório.'
    if (!email.includes('@')) novosErros.email = 'Digite um e-mail válido.'
    return novosErros
  }

  function enviar(e) {
    e.preventDefault()
    const novosErros = validar()
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setConcluido(false)
      return
    }

    setConcluido(true)
    setNome('')
    setEmail('')
    onFinalizar()
  }

  return (
    <section className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-3 text-xl font-semibold text-indigo-600">Checkout</h2>

      <form onSubmit={enviar} className="flex flex-col gap-3" noValidate>
        <Input
          id="nome"
          label="Nome"
          placeholder="Seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          erro={erros.nome}
        />
        <Input
          id="email"
          label="E-mail"
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          erro={erros.email}
        />

        <Button type="submit" disabled={carrinhoVazio}>
          Finalizar compra {!carrinhoVazio && `(${formatarPreco(total)})`}
        </Button>
        {carrinhoVazio && !concluido && (
          <p className="text-sm text-gray-500">Adicione produtos ao carrinho para finalizar.</p>
        )}
      </form>

      {concluido && (
        <div className="mt-4">
          <Alert variant="success">Compra finalizada! Obrigado.</Alert>
        </div>
      )}
    </section>
  )
}

export default Checkout
