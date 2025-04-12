'use client'

import { themeStore } from '@/store/theme/store'
import styles from './ThemeSwitcher.module.scss'

interface Props {
	theme: 'dark' | 'light'
}

export function ThemeSwitcher({ theme }: Readonly<Props>) {
	const toggleTheme = themeStore(state => state.toggleTheme)

	return <label className={styles.switch}> 
		<input 
			type='checkbox' 
			hidden
			checked={theme === 'light'}
			onChange={() => toggleTheme()} 
		/> 
		<div className={styles.track}> 
			<div className={styles.thumb} /> 
		</div>
	</label>
}
