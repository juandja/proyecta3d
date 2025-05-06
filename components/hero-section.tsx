"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// Usar directamente las URLs de las imágenes proporcionadas
const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CNC-m2UV6uoJkBrabSYX8KRwXG0gSI5MgC.png", // CNC
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PZ-CzwkERCPpf7wKFOGQ3rStxqR93zJhO.png", // Piezas impresas
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maquetas-mcP9i6bzBK53dSH8ars7dIhNTiTRBD.png", // Maquetas
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
    <section className="relative h-[80vh] w-full overflow-hidden">
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
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentImageIndex ? "bg-[#ff8c00]" : "bg-white/50"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="text-[#ff8c00]">Proyecta3D</span> - Soluciones de Ingeniería
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Servicios profesionales de ingeniería mecánica, impresión 3D y diseño personalizado para tus proyectos
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button size="lg" className="bg-[#ff8c00] text-white hover:bg-[#e67e00]">
            Nuestros Servicios
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}
