import { LayoutWrapper } from '@/components/layout/LayoutWrapper'
import { SITE_NAME } from "@/config/seo.config"
import MainProvider from "@/providers/MainProvider"
import { type TypeComponentAuthFields } from '@/types/auth.types'
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const OutfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL as string),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Best for watch cinema',
  alternates: {
    canonical: process.env.APP_URL,
    languages: {
      'en': '/en',
      'ru': '/ru'
    }
  },
  openGraph: {
    title: SITE_NAME,
    description: 'Best for watch cinema',
    url: process.env.APP_URL,
    siteName: SITE_NAME,
    // images: [
    //   {
    //     url: `${process.env.APP_URL}/images/og-image.jpg`,
    //     width: 1200,
    //     height: 630
    //   }
    // ],
    locale: 'en_US',
    type: 'website'
  },
  keywords: [
    'watch cinema',
    'watch movies',
    'watch series',
    'watch online',
    'watch free movies',
    'watch free series'
  ],
};


export default function RootLayout({
  children,
  Component
}: Readonly<TypeComponentAuthFields>) {


  return (
    <html lang="en">
      <body
        className={`${OutfitFont.variable} antialiased`}
      >
        <MainProvider Component={Component}>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </MainProvider>
      </body>
    </html>
  );
}
