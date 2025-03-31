import { TypeMaterialIconName } from "@/types/icons.types"
import * as MaterialIcons from 'react-icons/md'

interface Props {
  name: TypeMaterialIconName
  className?: string
}

export function MaterialIcon({name, className}: Readonly<Props>) {
  const IconComponent = MaterialIcons[name]

  return IconComponent ? <IconComponent className={className} /> : <MaterialIcons.MdDragIndicator className={className} />
}

