'use client'

import { themeStore } from '@/store/theme/store'
import cn from 'clsx'
import { AuthItems } from "./auth/AuthItems"
import { IMenu } from "./Menu.interface"
import { MenuItem } from "./MenuItem"

interface Props {
  menu: IMenu
}

export function Menu({menu}: Readonly<Props>) {
  const theme = themeStore(state => state.theme)

  return <div className='mb-14 animate-fade overflow-hidden'>
    <div className={cn('transition-colors uppercase text-sm font-semibold pl-layout', {
      ['text-gray-500']: theme === 'dark',
      ['text-black/80']: theme === 'light'
    })}>{menu.title}</div>
    <ul>
      {menu.items.map(item => (
        <MenuItem key={item.link} item={item} theme={theme} />
      ))}
      {menu.title === 'General' ? <AuthItems /> : null}
    </ul>
  </div>
}

