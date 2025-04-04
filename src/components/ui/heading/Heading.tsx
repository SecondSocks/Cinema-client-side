interface Props {
  title: string
  className?: string
}

export function Heading({ title, className }: Readonly<Props>) {
  return <h1 className={`${className} text-opacity-80 font-semibold ${className?.includes('xl') ? '' : 'text-3xl'}`}>{title}</h1>
}

