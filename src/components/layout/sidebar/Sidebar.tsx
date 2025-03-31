interface Props {
  className: string
}

export function Sidebar({className}: Readonly<Props>) {
  return <div className={className}>Sidebar</div>
}
