import { NotFound } from '@/components/screen/not-found/NotFound'
import { NO_INDEX_PAGE } from "@/config/seo.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: '404',
  ...NO_INDEX_PAGE
}

export default function NotFoundPage() {
  return <NotFound />
}

