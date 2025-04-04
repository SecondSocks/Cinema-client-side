import Skeleton, { SkeletonProps } from "react-loading-skeleton"
import cn from 'clsx'
import 'react-loading-skeleton/dist/skeleton.css'

export function SkeletonLoader({ className, ...rest }: Readonly<SkeletonProps>) {
  return <Skeleton {...rest} baseColor='#1f2125' highlightColor="#292a2e" className={cn('rounded-lg', className)} />
}

