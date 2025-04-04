'use client'

import { Auth } from "@/components/screen/auth/Auth"
import { NO_INDEX_PAGE } from "@/config/seo.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Auth',
  ...NO_INDEX_PAGE
}

export default function AuthPage() {
  return <Auth />
}

