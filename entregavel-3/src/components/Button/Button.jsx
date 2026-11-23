import clsx from 'clsx'

// As classes ficam escritas por inteiro (e não montadas com bg-${cor}-500)
// porque o Tailwind só gera o CSS das classes que ele encontra escritas no código.
const variantes = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
  outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-300',
}

const tamanhos = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
  return (
    <button
      className={clsx(
        'rounded-md font-medium transition-colors focus:outline-none focus:ring-4',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantes[variant],
        tamanhos[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
