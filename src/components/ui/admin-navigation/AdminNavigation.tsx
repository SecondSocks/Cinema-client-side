import { navigationItems } from './admin-navigation.data'
import { AdminNavigationItem } from './AdminNavigationItem'

export function AdminNavigation() {
	return <nav className='air-block w-4/5 mx-auto mb-10'>  {/*styles.nav */}
		<ul className='flex justify-evenly items-center'>
			{navigationItems.map(item => <AdminNavigationItem item={item} key={item.page} />)}
		</ul>
	</nav>
}
