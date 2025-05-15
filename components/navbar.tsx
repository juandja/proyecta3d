"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Verificar el estado inicial
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-500 ${scrolled ? "shadow-md scrolled" : ""}`}
    >
      <div className="relative">
        {/* Navbar con logo a la izquierda */}
        <div className="container mx-auto flex h-32 items-center justify-between px-4 md:px-6">
          {/* Logo destacado a la izquierda */}
          <div className="relative">
            <Link href="/" className="block overflow-visible hover:z-20">
              <div
                className={`logo-container relative transition-all duration-500 ${
                  scrolled ? "h-28 w-[280px] translate-y-0" : "h-40 w-[400px] translate-y-4"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="Proyecta3D Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation con botones más grandes */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="nav-link relative text-lg font-semibold text-gray-800 tracking-wide"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              Inicio
            </Link>
            <Link
              href="/#servicios"
              className="nav-link relative text-lg font-semibold text-gray-800 tracking-wide"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Servicios
            </Link>
            <Link
              href="/#nosotros"
              className="nav-link relative text-lg font-semibold text-gray-800 tracking-wide"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Nosotros
            </Link>
            <Link
              href="/#proyectos"
              className="nav-link relative text-lg font-semibold text-gray-800 tracking-wide"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Proyectos
            </Link>
            <Link
              href="/#contacto"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <Button className="bg-[#ff8c00] text-white px-6 py-6 text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-[#e67e00]">
                Contacto
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button más grande */}
          <Button variant="ghost" size="lg" className="md:hidden p-3" onClick={toggleMenu}>
            <Menu className="h-8 w-8" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container mx-auto flex h-32 items-center justify-between px-4">
            <div className="invisible"></div>
            <Button variant="ghost" size="lg" className="p-3" onClick={toggleMenu}>
              <X className="h-8 w-8" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <div className="relative h-40 w-[400px]">
              <Image src="/logo-nuevo.png" alt="Proyecta3D Logo" fill priority className="object-contain" />
            </div>
          </div>
          <nav className="container mx-auto flex flex-col space-y-6 px-4">
            <Link
              href="/"
              className="nav-link-mobile relative py-3 text-xl font-semibold text-gray-800"
              onClick={(e) => {
                toggleMenu()
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              Inicio
            </Link>
            <Link
              href="/#servicios"
              className="nav-link-mobile relative py-3 text-xl font-semibold text-gray-800"
              onClick={(e) => {
                toggleMenu()
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Servicios
            </Link>
            <Link
              href="/#nosotros"
              className="nav-link-mobile relative py-3 text-xl font-semibold text-gray-800"
              onClick={(e) => {
                toggleMenu()
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Nosotros
            </Link>
            <Link
              href="/#proyectos"
              className="nav-link-mobile relative py-3 text-xl font-semibold text-gray-800"
              onClick={(e) => {
                toggleMenu()
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Proyectos
            </Link>
            <Link
              href="/#contacto"
              className="nav-link-mobile relative py-3 text-xl font-semibold text-gray-800"
              onClick={(e) => {
                toggleMenu()
                if (window.location.pathname === "/") {
                  e.preventDefault()
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
