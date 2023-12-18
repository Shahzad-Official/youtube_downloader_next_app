import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube Downloader',
  description:"Visit our site to discover the best YouTube downloader! Easily download videos, convert to MP3, and grab clips for hassle-free content enjoyment on our user-friendly platform!",
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
