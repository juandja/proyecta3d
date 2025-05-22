"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// Usar directamente las URLs de las imágenes proporcionadas
const heroImages = [
  "/images/hero/hero-soldador.png",  
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CNC-m2UV6uoJkBrabSYX8KRwXG0gSI5MgC.png", // CNC
  "/images/hero/cardimpresion3D5.jpg", // Piezas impresas 
  "/images/hero/cardimpresion3D3.jpg", // Maquetas
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[calc(100vh-128px)] w-full overflow-hidden pt-16">
      {/* Hero Background Images */}
      {heroImages.map((imageUrl, index) => (
        <div
          key={imageUrl}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={`Ingeniería Mecánica ${index + 1}`}
              fill
              priority
              className="object-cover"
              unoptimized // Usar esta propiedad para evitar problemas con imágenes externas
            />
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Indicadores de imagen */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 w-10 rounded-full transition-all ${
              index === currentImageIndex ? "bg-[#ff8c00]" : "bg-white/50"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="mb-2 text-6xl font-bold tracking-tight text-[#ff8c00] md:text-7xl lg:text-8xl">Proyecta3D</h1>
        <h2 className="mb-6 text-3xl font-semibold tracking-wider text-white md:text-4xl">
          INGENIERÍA, DISEÑO E INNOVACIÓN
        </h2>
        <p className="mb-10 max-w-3xl text-xl text-gray-200 md:text-2xl">
          {/* Servicios profesionales de ingeniería mecánica, impresión 3D y diseño personalizado para tus proyectos */}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <a href="#servicios">
            <Button size="lg" className="bg-[#ff8c00] px-8 py-7 text-lg font-semibold text-white hover:bg-[#e67e00]">
              Nuestros Servicios
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#contacto">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 px-8 py-7 text-lg font-semibold text-white hover:bg-white/20"
            >
              Contáctanos
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
