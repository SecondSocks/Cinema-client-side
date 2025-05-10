'use client'

import { LogoutButton } from '@/components/ui/buttons/LogoutButton'
import { CLIENT_URLS } from '@/config/url.config'
import { userStore } from '@/store/user/store'
import { MenuItem } from '../MenuItem'

interface Props {
  theme: 'dark' | 'light'
}

export function AuthItems({ theme }: Readonly<Props>) {
  const isAuthenticated = userStore(state => state.isAuthenticated)
  const user = userStore(state => state.user)

  return <>
    { isAuthenticated ? <>
      <MenuItem 
        item={{
          icon: 'MdSettings',
          link: '/profile',
          title: 'Profile'
        }}
        theme={theme}  
      />
      <LogoutButton />
    </> : <MenuItem 
      item={{
        icon: 'MdLogin',
        link: '/auth',
        title: 'Login'
      }}
      theme={theme}
    />  }

    {user?.isAdmin && <MenuItem 
      item={{
        icon: 'MdOutlineLock',
        link: CLIENT_URLS.ADMIN,
        title: 'Admin panel'
      }}
      theme={theme}
    />}
  </>
}

