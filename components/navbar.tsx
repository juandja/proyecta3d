"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo ajustado para que se vea completo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-64">
              <Image src="/logo.png" alt="Proyecta3D Logo" fill priority className="object-contain object-left" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-[#ff8c00]">
            Inicio
          </Link>
          <Link href="#servicios" className="text-sm font-medium text-gray-700 transition-colors hover:text-[#ff8c00]">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium text-gray-700 transition-colors hover:text-[#ff8c00]">
            Nosotros
          </Link>
          <Link href="#proyectos" className="text-sm font-medium text-gray-700 transition-colors hover:text-[#ff8c00]">
            Proyectos
          </Link>
          <Link href="#contacto">
            <Button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white">Contacto</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-64">
                <Image src="/logo.png" alt="Proyecta3D Logo" fill priority className="object-contain object-left" />
              </div>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>
          <nav className="container mx-auto mt-8 flex flex-col space-y-4 px-4">
            <Link
              href="/"
              className="py-2 text-lg font-medium text-gray-700 transition-colors hover:text-[#ff8c00]"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="py-2 text-lg font-medium text-gray-700 transition-colors hover:text-[#ff8c00]"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="py-2 text-lg font-medium text-gray-700 transition-colors hover:text-[#ff8c00]"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="#proyectos"
              className="py-2 text-lg font-medium text-gray-700 transition-colors hover:text-[#ff8c00]"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="py-2 text-lg font-medium text-gray-700 transition-colors hover:text-[#ff8c00]"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
