function Card({ titulo, descricao, children }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow transition-shadow hover:shadow-md">
      <h2 className="mb-2 text-xl font-semibold text-indigo-600">{titulo}</h2>
      <p className="text-gray-700">{descricao}</p>
      {children && <div className="mt-4">{children}</div>}
    </article>
  )
}

export default Card
