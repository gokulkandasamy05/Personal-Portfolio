import './globals.css'
import { Inter } from 'next/font/google'
import TorchLight from './components/TorchLight'

const inter = Inter({ subsets: ['latin'] }) 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TorchLight />
        {children}
      </body>
    </html>
  )
}
