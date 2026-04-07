import clsx from 'clsx'

const VARIANTS = {
  neutral:
    'border-sand-200 bg-sand-50 text-slate-700',
  red: 'border-rose-200 bg-rose-50 text-rose-700',
  blue: 'border-sky-200 bg-sky-50 text-sky-700',
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  amber: 'border-amber-200 bg-amber-50 text-amber-800',
  ink: 'border-slate-200 bg-slate-900 text-white',
}

export function Badge({ variant = 'neutral', className, ...props }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold',
        VARIANTS[variant] ?? VARIANTS.neutral,
        className,
      )}
      {...props}
    />
  )
}

