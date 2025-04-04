import { AuthItems } from "./auth/AuthItems"
import { IMenu } from "./Menu.interface"
import { MenuItem } from "./MenuItem"

interface Props {
  menu: IMenu
}

export function Menu({menu}: Readonly<Props>) {
  return <div className='mb-14 animate-fade overflow-hidden'>
    <div className='text-gray-500 uppercase text-sm font-semibold pl-layout'>{menu.title}</div>
    <ul>
      {menu.items.map(item => (
        <MenuItem key={item.link} item={item} />
      ))}
      {menu.title === 'General' ? <AuthItems /> : null}
    </ul>
  </div>
}

