import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const montserrat = Montserrat({
  variable: '--font-monserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bass-Loja.com',
  description: 'High quality, better price',
  icons: {
    icon: '/img/bass_logo.ico',
  },
  keywords: 'bass, loja, bags, import',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <main>
            <Header />
            <Navbar role="admin" />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
