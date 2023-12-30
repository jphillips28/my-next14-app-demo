import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavSidebar from '@/components/NavSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test Drive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <NavSidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
