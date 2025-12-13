import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { StaggeredMenu } from '@/components/StaggeredMenu'
import { Footer } from '@/components/footer'
import { socials } from '@/lib/data'

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

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
  { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'GitHub', link: socials.github },
  { label: 'LinkedIn', link: socials.linkedin },
  { label: 'LeetCode', link: socials.leetcode }
];

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
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#e9e9ef"
              openMenuButtonColor="#000"
              changeMenuColorOnOpen={true}
              colors={['#B19EEF', '#5227FF']}
              accentColor="#5227FF"
              isFixed={true}
              closeOnClickAway={true}
            />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



