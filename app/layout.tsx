import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { AuthContextProvider } from './firebase/AuthContext'
import NavMenu from '@/components/NavMenu'

const inter = Raleway({ subsets: ['latin'] , weight:['100' ,'200','300','400','500','600','700','800' , '900'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Simple Demo App Using NextJs & Firebase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <NavMenu/>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
