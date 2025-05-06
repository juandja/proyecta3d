import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Impresión 3D Fibra de Carbono",
    slug: "impresion-3d-fibra-de-carbono", // Asegúrate de que este slug coincida con el de la página
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMPRE-9l064peq6nd6aCsfWojT0JhWU7qAoV.png",
  },
  {
    id: 2,
    title: "Ingeniería y Diseño",
    slug: "ingenieria-y-diseno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ING-6ol3FyVea9IAd91519Ad92EvTPJpbd.png",
  },
  {
    id: 3,
    title: "Maestranza Mecanizado",
    slug: "maestranza-mecanizado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAES-YDzlUOHZHTbzKANBJoWXUSoyG6tJF0.png",
  },
  {
    id: 4,
    title: "Reparación Fabricación",
    slug: "reparacion-fabricacion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impre%203d%20p-3UVEq4DM1oqzBiLI8So9TbaCy3khHv.png",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-proyecta-dark md:text-4xl">Nuestros Servicios</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Ofrecemos soluciones integrales en ingeniería mecánica, impresión 3D y diseño personalizado para satisfacer
            tus necesidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/servicios/${service.slug}`}
              className="group relative block h-80 w-full cursor-pointer overflow-hidden rounded-lg"
            >
              {/* Imagen completa */}
              <div className="h-full w-full">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Título */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
