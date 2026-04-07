import clsx from 'clsx'

const VARIANTS = {
  primary:
    'bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900',
  subtle:
    'bg-sand-100 text-slate-900 hover:bg-sand-200 focus-visible:outline-slate-900',
  ghost:
    'bg-transparent text-slate-700 hover:bg-sand-100 focus-visible:outline-slate-900',
}

const SIZES = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
}

export function Button({
  variant = 'subtle',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        VARIANTS[variant] ?? VARIANTS.subtle,
        SIZES[size] ?? SIZES.md,
        className,
      )}
      {...props}
    />
  )
}

