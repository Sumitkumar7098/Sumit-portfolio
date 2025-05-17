import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Parthiv Purkayastha | Backend Developer & AI/ML Engineer",
  description:
    "Parthiv Purkayastha is a backend developer and AI/ML engineer specializing in scalable systems and innovative AI solutions.",
  keywords: ["Parthiv Purkayastha", "Backend Developer", "AI/ML", "Portfolio", "Software Engineer"],
  authors: [{ name: "Parthiv Purkayastha" }],
  creator: "Parthiv Purkayastha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parthiv-portfolio.vercel.app/",
    title: "Parthiv Purkayastha | Backend Developer & AI/ML Engineer",
    description: "Backend Developer & AI/ML Engineer specializing in scalable systems and innovative solutions.",
    siteName: "Parthiv Purkayastha Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
