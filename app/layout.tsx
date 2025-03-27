import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio template',
  description: 'react-nextjs-tailwindcss portfolio template',
  icons: "placeholder-logo.png",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black overflow-x-hidden w-fit">
      <body className="w-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
