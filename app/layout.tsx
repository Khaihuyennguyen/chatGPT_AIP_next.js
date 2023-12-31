import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Instrument_Serif, Xanh_Mono } from 'next/font/google'

// adding two lovely font from Google Fonts
// https://fonts.google.com/specimen/Instrument+Serif
// https://fonts.google.com/specimen/Xanh+Mono

const serif = Roboto({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

// const serif = Instrument_Serif({
//   subsets: ['latin'],
//   weight: '400',
//   style: ['normal', 'italic'],
//   variable: '--font-serif',
// })

const mono = Xanh_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
})

// this adds metadata to the Next.js pages
// you can see all the options over at
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: 'Creating Randomness',
  description: 'A demo project for the ChatGPT',
  authors: [{ name: 'Khai', url: 'https://khai.one' }],

 
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  themeColor: '#089755',
}

// our general theme
// all the head tags are given to us by Next.js's build system
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={serif.variable + ' ' + mono.variable}>
      <body>
        <main>
          <header>
            <p>
              <span>Creating Randomness</span> &ndash; from Cole on Medium
            </p>
            <nav>
              
            </nav>
          </header>

          {children}
        </main>
      </body>
    </html>
  )
}
