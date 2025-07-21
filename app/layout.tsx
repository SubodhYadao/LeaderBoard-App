import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leaderboard',
  description: 'Leaderboard for the Leaderboard app project',
  generator: 'Subodh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
