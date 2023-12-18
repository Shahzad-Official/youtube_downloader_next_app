import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube Downloader',
  description:"Visit our site to discover the best YouTube downloader! Download YouTube videos without any hassle, convert them into MP3, or grab clips. Discover the powerful features of our easy-to-use platform. Enjoy content without hassle with our one-stop-shop solution!",
  keywords:"free youtube video downloader,downloader for youtube , youtube downloader , youtube video downloader ,youtube mp3 downloader ,youtube video converter,youtube downloader online, youtube short downloader , video downloader for youtube videos ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
