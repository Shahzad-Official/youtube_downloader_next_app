import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube Downloader',
  description:"Unlock a world of free entertainment and knowledge with our YouTube downloader. Download videos, shorts, and audio effortlessly in various resolutions. Stay ahead with YouTube's latest trend 'shorts' and enjoy uninterrupted learning and entertainment, even offline. Perfect for teachers and students, our free downloader ensures learning never pauses. Discover the joy of seamless YouTube time—whether for learning, teaching, or pure enjoyment. The YouTube video downloader is your free gateway to an uninterrupted experience!",
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
