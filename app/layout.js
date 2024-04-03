import { Inter } from 'next/font/google'
import './styles/globals.css'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CyberGuard AI',
  description:
    'CyberGuard AI is a cybersecurity company that provides a range of services to help protect your business from cyber threats.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-[#F1F2F3] ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
