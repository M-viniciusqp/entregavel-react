import { useState } from 'react'
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Input from './components/Input/Input'
import Card from './components/Card/Card'
import Alert from './components/Alert/Alert'

function App() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const emailInvalido = email !== '' && !email.includes('@')

  function enviar(e) {
    e.preventDefault()
    if (email && !emailInvalido) setEnviado(true)
  }

  return (
    <>
      <header className="bg-indigo-600 py-6 text-center text-white">
        <h1 className="text-3xl font-bold">Biblioteca de Componentes</h1>
        <p className="mt-1 text-indigo-100">React + Tailwind CSS</p>
      </header>

      <main className="mx-auto grid max-w-4xl gap-6 px-4 py-8 md:grid-cols-2">
        <Card titulo="Button" descricao="Variações escolhidas pela prop variant.">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="primary" disabled>
              Desabilitado
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button size="sm">Pequeno</Button>
            <Button size="md">Médio</Button>
            <Button size="lg">Grande</Button>
          </div>
        </Card>

        <Card titulo="Badge" descricao="Etiquetas coloridas para status e categorias.">
          <div className="flex flex-wrap gap-2">
            <Badge>Padrão</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Sucesso</Badge>
            <Badge variant="warning">Aviso</Badge>
            <Badge variant="danger">Perigo</Badge>
          </div>
        </Card>

        <Card titulo="Input" descricao="Campo com label e mensagem de erro opcional.">
          <form onSubmit={enviar} className="flex flex-col gap-3">
            <Input
              id="email"
              label="E-mail"
              type="text"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setEnviado(false)
              }}
              erro={emailInvalido ? 'Digite um e-mail válido (precisa ter @).' : ''}
            />
            <Button type="submit" disabled={!email || emailInvalido}>
              Enviar
            </Button>
          </form>
        </Card>

        <Card titulo="Alert" descricao="Três variantes: success, error e warning.">
          <div className="flex flex-col gap-3">
            {enviado && <Alert variant="success">E-mail {email} enviado.</Alert>}
            <Alert variant="success">Operação concluída com sucesso.</Alert>
            <Alert variant="error">Não foi possível salvar os dados.</Alert>
            <Alert variant="warning">Sua sessão vai expirar em breve.</Alert>
          </div>
        </Card>
      </main>

      <footer className="bg-gray-800 py-4 text-center text-sm text-gray-300">
        Entregável 2 - Biblioteca de componentes com Tailwind CSS
      </footer>
    </>
  )
}

export default App
