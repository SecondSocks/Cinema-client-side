import { Layout } from "@/components/layout/Layout"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { MainProvider } from "@/providers/MainProvider"
import { SITE_NAME } from "@/config/seo.config"

const OutfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Best for watch cinema',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OutfitFont.variable} antialiased`}
      >
        <MainProvider>
          <Layout>
            {children}
          </Layout>
        </MainProvider>
      </body>
    </html>
  );
}
