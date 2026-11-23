import './Lista.css'

function Lista({ titulo, itens }) {
  return (
    <section className="lista">
      {titulo && <h2>{titulo}</h2>}
      <ul>
        {itens.map((item) => (
          // key única e estável: aqui os textos são únicos, então servem como chave.
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Lista
