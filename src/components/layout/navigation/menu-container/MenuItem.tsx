'use client'

import { usePathname } from "next/navigation"
import { IMenuItem } from "./Menu.interface"
import cn from 'clsx'
import Link from "next/link"
import { MaterialIcon } from "@/components/ui/MaterialIcon"
import styles from './Menu.module.scss'

interface Props {
  item: IMenuItem
}

export function MenuItem({item}: Readonly<Props>) {
  const pathname = usePathname()

  return <li className={cn('px-8 border-r-4 border-r-transparent transition-colors', {
    [styles.active]: pathname === item.link
  })} >
    <Link href={item.link} className='flex items-center text-gray-600 px-3 mt-6 cursor-pointer'>
      <MaterialIcon name={item.icon} className='text-2lg transition-colors' />
      <span className='ml-3 text-lg hover:text-white transition-colors'>{item.title}</span>
    </Link>
  </li>
}

