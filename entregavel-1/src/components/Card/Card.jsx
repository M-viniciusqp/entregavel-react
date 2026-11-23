import './Card.css'

function Card({ titulo, descricao }) {
  return (
    <article className="card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  )
}

export default Card
