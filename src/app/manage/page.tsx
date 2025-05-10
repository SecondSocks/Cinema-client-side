import { NextPageAuth } from '@/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <div>Admin Page</div>
}

AdminPage.isOnlyAdmin = true

export default AdminPage