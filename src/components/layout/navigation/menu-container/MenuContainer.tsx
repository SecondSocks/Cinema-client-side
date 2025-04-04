import { GenreMenu } from "./genres/GenreMenu";
import { Menu } from "./Menu";
import { FirstMenu, UserMenu } from "./Menu.data";

export function MenuContainer() {
  return <div className='overflow-hidden'>
    <Menu menu={FirstMenu} />
    <GenreMenu />
    <Menu menu={UserMenu} />
  </div>
}
