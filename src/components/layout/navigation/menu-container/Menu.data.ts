import { IMenu } from "./Menu.interface";

export const FirstMenu: IMenu = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home'
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Discovery'
    },
    {
      icon: 'MdFiberNew',
      link: '/fresh',
      title: 'Fresh Movies'
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now'
    },

  ]
}

export const UserMenu: IMenu = {
  title: 'General',
  items: []
}
