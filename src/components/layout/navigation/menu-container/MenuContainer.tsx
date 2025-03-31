import { GenreMenu } from "./genres/GenreMenu";
import { Menu } from "./Menu";
import { FirstMenu, UserMenu } from "./Menu.data";

export function MenuContainer() {
  return <div>
    <Menu menu={FirstMenu} />
    <GenreMenu />
    <Menu menu={UserMenu} />
  </div>
}
