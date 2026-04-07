import clsx from 'clsx'

export function Card({ className, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-sand-200 bg-white',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={clsx('flex items-start justify-between px-4 py-3', className)} {...props} />
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <div
      className={clsx('text-sm font-black text-slate-900', className)}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }) {
  return (
    <div className={clsx('text-sm text-slate-600', className)} {...props} />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={clsx('p-4', className)} {...props} />
}

