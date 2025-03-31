import { Menu } from "./Menu";
import { FirstMenu, UserMenu } from "./Menu.data";

export function MenuContainer() {
  return <div>
    <Menu menu={FirstMenu} />
    {/* Genres Menu */}
    <Menu menu={UserMenu} />
  </div>
}
