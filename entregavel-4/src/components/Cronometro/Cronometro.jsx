import { useState, useEffect } from 'react'

function formatar(totalSegundos) {
  const minutos = String(Math.floor(totalSegundos / 60)).padStart(2, '0')
  const segundos = String(totalSegundos % 60).padStart(2, '0')
  return `${minutos}:${segundos}`
}

function Cronometro() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    // roda a cada 1 segundo, usando a forma funcional para não depender do valor antigo
    const intervalo = setInterval(() => {
      setSegundos((atual) => atual + 1)
    }, 1000)

    // cleanup: quando o componente sai da tela, o timer é cancelado
    return () => clearInterval(intervalo)
  }, []) // [] = o efeito roda uma vez, quando o componente aparece

  return (
    <div className="rounded-lg bg-white p-5 text-center shadow">
      <p className="text-sm text-gray-500">Tempo com a página aberta</p>
      <p className="text-3xl font-bold tabular-nums text-gray-800">{formatar(segundos)}</p>
    </div>
  )
}

export default Cronometro
