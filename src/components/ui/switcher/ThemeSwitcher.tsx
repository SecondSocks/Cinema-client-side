'use client'

import { themeStore } from '@/store/theme/store'
import styles from './ThemeSwitcher.module.scss'

export function ThemeSwitcher() {
	const toggleTheme = themeStore(state => state.toggleTheme)

	return <label className={styles.switch}> 
		<input 
			type='checkbox' 
			hidden
			onClick={() => toggleTheme()} 
		/> 
		<div className={styles.track}> 
			<div className={styles.thumb} /> 
		</div>
	</label>
}
