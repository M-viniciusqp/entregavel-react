import clsx from 'clsx'

const variantes = {
  default: 'bg-gray-100 text-gray-700',
  info: 'bg-blue-100 text-blue-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-700',
}

function Badge({ variant = 'default', className, children }) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full px-3 py-0.5 text-xs font-semibold',
        variantes[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
