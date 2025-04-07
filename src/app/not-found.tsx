import { Heading } from "@/components/ui/heading/Heading"
import { NO_INDEX_PAGE } from "@/config/seo.config"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: '404',
  ...NO_INDEX_PAGE
}

export default function NotFound() {
  return <div className='w-full h-full flex-center flex-col'>
    <Heading title='404 - Page not found' className='text-white' />
    <Link replace={true} className='btn-primary px-3 py-2 mt-6 hover:scale-105 transition-transform' href='/'>Go to Home</Link>
  </div>
}

