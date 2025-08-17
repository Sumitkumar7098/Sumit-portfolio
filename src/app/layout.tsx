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
  title: "Sumit Kumar | UI/UX Designer & Python Developer",
  description:
    "Sumit Kumar is a UI/UX designer and Python developer specializing in creating user-friendly interfaces and seamless user experiences.",
  keywords: ["Sumit Kumar", "UI/UX Designer", "Python Developer", "Portfolio", "Web Design"],
  authors: [{ name: "Sumit Kumar" }],
  creator: "Sumit Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumit-portfolio.vercel.app/",
    title: "Sumit Kumar | UI/UX Designer & Python Developer",
    description: "UI/UX Designer & Python Developer specializing in creating user-friendly interfaces and seamless user experiences.",
    siteName: "Sumit Kumar Portfolio",
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
