import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Impresión 3D Fibra de Carbono",
    slug: "impresion-3d-fibra-de-carbono",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardimpresion3D.jpg-7VoN0INt2l6WlQMp5KyxgiB86yfyAk.jpeg", // Nueva imagen de impresión 3D
  },
  {
    id: 2,
    title: "Ingeniería y Diseño",
    slug: "ingenieria-y-diseno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ING-6ol3FyVea9IAd91519Ad92EvTPJpbd.png",
  },
  {
    id: 3,
    title: "Maestranza, Máquinas y Herramientas",
    slug: "maestranza-mecanizado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAES-YDzlUOHZHTbzKANBJoWXUSoyG6tJF0.png",
  },
  {
    id: 4,
    title: "Fabricación Estructural/Piping",
    slug: "fabricacion",
    image: "images/services/soldador.png",
  },
  {
    id: 5,
    title: "Reparación y Arrendo de Equipos Hidráulicos",
    slug: "reparacion-arrendo-equipos-hidraulicos",
    image: "images/services/reparacion.png",
  },
  {
    id: 6,
    title: "Venta de Equipos Hidráulicos",
    slug: "venta-equipos-hidraulicos",
    image: "/images/equipos-hidraulicos-hexagonos.png",
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/servicios/${service.slug}`}
              className="group relative block h-64 w-full cursor-pointer overflow-hidden rounded-lg"
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
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
