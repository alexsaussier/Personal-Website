import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexandre Saussier - Welcome to my Personal Website',
  description: 'Product Manager, Indie Hacker, and Builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className="scroll-smooth">
      <script defer src="https://cloud.umami.is/script.js" data-website-id="f56265fd-def1-42b9-aa9c-30b981af9d3b"></script>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  )
}

