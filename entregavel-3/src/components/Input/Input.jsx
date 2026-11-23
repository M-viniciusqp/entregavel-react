import clsx from 'clsx'

function Input({ label, id, erro, className, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          'rounded-md border px-3 py-2 text-gray-900 focus:outline-none focus:ring-2',
          erro
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-300',
          className,
        )}
        {...props}
      />
      {erro && <span className="text-sm text-red-600">{erro}</span>}
    </div>
  )
}

export default Input
