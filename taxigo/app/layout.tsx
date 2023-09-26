
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Outfit } from 'next/font/google'
import NavBar from '@/components/Navbar'


const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title      : 'TaxiGo 🚕: Have a great journey',
  description: 'Book Your Taxi In three easy step. Created by Shivnandan Jha',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <NavBar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
