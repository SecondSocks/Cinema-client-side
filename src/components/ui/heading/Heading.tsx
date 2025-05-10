import cn from 'clsx'

interface Props {
  title: string
  className?: string
  theme?: 'dark' | 'light'
  size?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
}

export function Heading({ title, className, theme = 'dark', size = 'xl' }: Readonly<Props>) {
  return <h1 
    className={cn(`${className} transition-colors text-opacity-80 font-semibold text-${size}`, {
      ['text-white']: theme === 'dark',
      ['text-black/80']: theme === 'light'
    })}
  >{title}</h1>
}

