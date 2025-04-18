import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio template',
  description: 'react-nextjs-tailwindcss portfolio template',
  icons: "logo.svg",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black overflow-x-hidden">
      <body className="margin-0 overflow-x-hidden">{children}</body>
    </html>
  );
}
