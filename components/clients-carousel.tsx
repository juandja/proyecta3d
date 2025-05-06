"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos de los clientes
const clients = [
  {
    id: 1,
    name: "Otraco",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otraco-sgo0CBRXoqSu1D72X1CMbnfhQlk2cm.png",
  },
  {
    id: 2,
    name: "Ferpi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ferpi.jpg-wK6ZQC9PP2Cq3lcLtdZ3zKqUVT7UPp.jpeg",
  },
  {
    id: 3,
    name: "El Abra",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20minera%20el%20abra-A6iTxcqg59urHbNFf2N19O6ThJipmK.png",
  },
  {
    id: 4,
    name: "Gruacor",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-1-Vtl0N4efos49P07wvd0mzaVELHW6FQ.png",
  },
  {
    id: 5,
    name: "RUH",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RUH-vzI5O1H0OnWpaDmJG7OCwnku8XHcqO.png",
  },
  {
    id: 6,
    name: "Feram",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6689ee3356dea6.39787730-ebmWJewz4QGL0u0V9r6kQkLajk6JcG.png",
  },
  {
    id: 7,
    name: "Glencore",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descargar-ZpsqGoCFIalsH8VizvsQ2KMpwo9VLR.png",
  },
  {
    id: 8,
    name: "SICEP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SICEP-iSht4nMHmEY6571bbmkGkwtLJtV1E1.png",
  },
  {
    id: 9,
    name: "Ruhrpumpen",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RUHRPUMPEN-9c9NYpvR7FYPP51orQrL5OgcJws4LJ.png",
  },
  {
    id: 10,
    name: "El Abra (Alternativo)",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EL%20ABRA-hpFnbCmqUpIe1UwWYVKDpKWsjFVrOA.png",
  },
]

export default function ClientsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollButtons)
      // Check on mount and window resize
      checkScrollButtons()
      window.addEventListener("resize", checkScrollButtons)

      return () => {
        carousel.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current
      const scrollAmount = clientWidth * 0.8 // Scroll 80% of the visible width
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-proyecta-dark md:text-4xl">
            Nuestros <span className="text-[#ff8c00]">Clientes</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Empresas que confían en nuestros servicios de ingeniería y fabricación
          </p>
        </div>

        <div className="relative">
          {/* Botón izquierdo */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute -left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-md transition-opacity ${
              !canScrollLeft ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Desplazar a la izquierda</span>
          </Button>

          {/* Carrusel */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto pb-6 pt-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex min-w-[200px] flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:min-w-[220px] md:min-w-[240px]"
              >
                <div className="flex h-24 items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`Logo de ${client.name}`}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Botón derecho */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute -right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-md transition-opacity ${
              !canScrollRight ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Desplazar a la derecha</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
