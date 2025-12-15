import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Prashlesh Pratap Singh | Full-Stack & Blockchain Developer',
  description: 'Portfolio of a CSE student at Woxsen University specializing in Full-Stack Development, Blockchain, and modern web applications.',
  keywords: ['Full-Stack', 'Blockchain', 'Next.js', 'React', 'Solidity', 'Portfolio'],
  authors: [{ name: 'Prashlesh Pratap Singh' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
