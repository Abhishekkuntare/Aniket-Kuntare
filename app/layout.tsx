import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aniket Kuntare | Cybersecurity Professional',
  description:
    'Cybersecurity professional with 3+ years in IT Support, Cloud Computing, and Penetration Testing',

  icons: {
    icon: '/ak-icon.svg',
    shortcut: '/ak-icon.svg',
    apple: '/ak-icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1410' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased overflow-x-hidden bg-background text-foreground transition-colors duration-200">
        <Navbar />
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
