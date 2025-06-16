import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Adoniyas | Next.js Developer',
  description:
    'Portfolio website of Adoniyas, a passionate Next.js developer specializing in modern web applications and user experiences.',
  keywords: [
    'Next.js',
    'React',
    'Web Development',
    'Portfolio',
    'Adoniyas',
    'Frontend Developer',
  ],
  authors: [{ name: 'Adoniyas' }],
  creator: 'Adoniyas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adoni-portfolio.vercel.app',
    title: 'Adoniyas | Next.js Developer',
    description:
      'Portfolio website of Adoniyas, a passionate Next.js developer specializing in modern web applications and user experiences.',
    siteName: 'Adoniyas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adoniyas | Next.js Developer',
    description:
      'Portfolio website of Adoniyas, a passionate Next.js developer specializing in modern web applications and user experiences.',
    creator: '@adoniyas',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 antialiased min-h-screen flex flex-col'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className='flex-grow relative'>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
