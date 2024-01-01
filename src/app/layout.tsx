import type { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const NotoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "oasobi",
    template: '%s - oasobi'
  },
  description: "oasobi's site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <NextTopLoader showSpinner={false}/>
        <header>
          <h1 className='text-3xl ml-8'><Link href="../">oasobi</Link></h1>
          <div className='flex justify-center'>
            <ul className='hidden md:flex'>
              <li><Link href="/downloads" className='mr-5 flex'><img src="/downloads.svg" alt="" width={20} height={20} className='mr-1 object-cover dark:invert justify-between'></img>downloads</Link></li>
              <li><Link href="/series" className='mr-5 flex'><img src="/videos.svg" alt="" width={24} height={26} className='mr-1 object-cover dark:invert justify-between'></img>series</Link></li>
              <li><Link href="/tools" className='mr-5 flex'><img src="/tools.svg" alt="" width={20} height={20} className='mr-1 object-cover dark:invert justify-between'></img>tools</Link></li>
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
