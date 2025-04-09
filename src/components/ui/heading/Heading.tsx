import cn from 'clsx'

interface Props {
  title: string
  className?: string
  theme?: 'dark' | 'light'
}

export function Heading({ title, className, theme = 'dark' }: Readonly<Props>) {
  return <h1 
    className={cn(`${className} transition-colors text-opacity-80 font-semibold ${className?.includes('xl') ? '' : 'text-3xl'}`, {
      ['text-white']: theme === 'dark',
      ['text-black/80']: theme === 'light'
    })}
  >{title}</h1>
}

