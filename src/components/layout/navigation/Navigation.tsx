import { Logo } from "@/components/ui/Logo"
import { MenuContainer } from "./menu-container/MenuContainer"

interface Props {
  className: string
}

export function Navigation({className}: Readonly<Props>) {
  return <div className={`${className} py-layout`} >
    <Logo />
    <MenuContainer />
  </div>
}
