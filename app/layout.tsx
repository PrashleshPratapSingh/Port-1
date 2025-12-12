import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Prashlesh Pratap Singh | Full-Stack & Blockchain Developer',
  description: 'Portfolio of a CSE student at Woxsen University specializing in Full-Stack Development, Blockchain, and modern web applications. Building AURA, HerbX, and more.',
  keywords: ['CSE', 'Full-Stack', 'Blockchain', 'Next.js', 'React', 'Solidity', 'Portfolio', 'Woxsen'],
  authors: [{ name: 'Prashlesh Pratap Singh' }],
  openGraph: {
    title: 'Prashlesh Pratap Singh | Full-Stack & Blockchain Developer',
    description: 'Building modern web apps and blockchain solutions. 17+ GitHub repos, Smart India Hackathon participant, UX Design certified.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prashlesh Pratap Singh | Full-Stack & Blockchain Developer',
    description: 'Building modern web apps and blockchain solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
