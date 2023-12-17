import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Header from './_components/Header'
import Foot from './_components/Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmed Saeed',
  description: 'It is a designed personal portfolio website showcasing Ahmed\'s expertise and creative endeavors in web development and design, offering a glimpse into his professional journey and achievements.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Foot />
      </body>
    </html>
  )
}
