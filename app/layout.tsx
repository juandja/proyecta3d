import type React from "react"
import type { Metadata } from "next"
import { Rajdhani } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Proyecta3D - Servicios de Ingeniería Mecánica",
  description: "Servicios profesionales de ingeniería mecánica, impresión 3D, diseño a medida y más",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={rajdhani.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
