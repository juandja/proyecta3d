import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Datos de servicios
const services = [
  {
    id: 1,
    title: "Impresión 3D Fibra de Carbono",
    slug: "impresion-3d-fibra-de-carbono",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardimpresion3D.jpg-7VoN0INt2l6WlQMp5KyxgiB86yfyAk.jpeg", // Nueva imagen de impresión 3D
    content: {
      description:
        "Fabricación de piezas con tecnología de impresión 3D utilizando fibra de carbono para mayor resistencia y durabilidad.",
      headerImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardimpresion3D.jpg-7VoN0INt2l6WlQMp5KyxgiB86yfyAk.jpeg", // Nueva imagen de impresión 3D
      sections: [
        {
          title: "Tecnología Avanzada",
          icon: "/placeholder.svg?height=80&width=80",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20IMP-vkiMNF0JKc4Exian7iDk7yoIkORfPR.png",
          description:
            "Utilizamos impresoras 3D de última generación que permiten la incorporación de fibra de carbono para crear piezas de alta resistencia.",
        },
        {
          title: "Materiales Premium",
          icon: "/placeholder.svg?height=80&width=80",
          image: "/placeholder.svg?height=200&width=200",
          description:
            "Trabajamos con filamentos de nylon reforzados con fibra de carbono continua, ofreciendo resistencia comparable a piezas de aluminio.",
        },
        {
          title: "Aplicaciones Industriales",
          icon: "/placeholder.svg?height=80&width=80",
          image: "/placeholder.svg?height=200&width=200",
          description: "Ideal para piezas funcionales en sectores como automoción, aeroespacial, médico e industrial.",
        },
      ],
      features: [
        {
          title: "Ventajas de la Impresión 3D con Fibra de Carbono",
          items: [
            {
              title: "Alta Resistencia",
              description: "Piezas hasta 20 veces más resistentes que el plástico estándar",
              icon: "/placeholder.svg?height=60&width=60",
            },
            {
              title: "Ligereza",
              description: "Componentes con excelente relación resistencia-peso",
              icon: "/placeholder.svg?height=60&width=60",
            },
            {
              title: "Precisión",
              description: "Tolerancias de hasta 0.1mm para aplicaciones de ingeniería",
              icon: "/placeholder.svg?height=60&width=60",
            },
          ],
        },
      ],
      description:
        "En Proyecta3D nos especializamos en la impresión 3D con fibra de carbono, una tecnología revolucionaria que permite fabricar piezas con propiedades mecánicas excepcionales. Nuestro proceso combina la versatilidad de la fabricación aditiva con la resistencia de los materiales compuestos.\n\nLa incorporación de fibra de carbono continua durante el proceso de impresión crea piezas con una resistencia comparable a componentes mecanizados en aluminio, pero con un peso significativamente menor. Esto resulta ideal para aplicaciones donde la relación resistencia-peso es crítica.\n\nNuestro equipo de ingenieros trabaja estrechamente con cada cliente para optimizar el diseño de las piezas, aprovechando al máximo las ventajas de esta tecnología y garantizando resultados que cumplen con los más altos estándares de calidad.",
    },
  },
  {
    id: 2,
    title: "Ingeniería y Diseño",
    slug: "ingenieria-y-diseno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ING-6ol3FyVea9IAd91519Ad92EvTPJpbd.png",
    content: {
      description: "Servicios profesionales de ingeniería mecánica y diseño industrial.",
      headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EVZaHEekZKQh3CWyuPs5PYWs6g6Rmi.png",
      sections: [
        {
          title: "Memoria de Cálculo",
          icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEMO%203-l1ix2SABlnMUPEguwzCSsVfa4lAzCB.png",
          image: "/placeholder.svg?height=200&width=200",
          description:
            "Análisis y documentación técnica para validar la integridad estructural y funcional de tus diseños.",
        },
        {
          title: "Diseño a Medida",
          icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DISE-w7jXDKH0IbWIdXk4li6epdw6FoZu1u.png",
          image: "/placeholder.svg?height=200&width=200",
          description:
            "Soluciones personalizadas según tus necesidades específicas, desde el concepto hasta el producto final.",
        },
        {
          title: "Escaneo 3D",
          icon: "/placeholder.svg?height=80&width=80",
          image: "/placeholder.svg?height=200&width=200",
          description:
            "Digitalización de objetos físicos con alta precisión para su posterior análisis o reproducción.",
        },
      ],
      features: [
        {
          title: "Levantamiento En terreno",
          items: [
            {
              title: "Software Certificados",
              description: "Solidworks, Auto CAD",
              icon: "/placeholder.svg?height=60&width=60",
            },
            {
              title: "Ingenieros calificados",
              description: "Contamos con un gran equipo dedicados a solucionar tus problemas como equipo",
              icon: "/placeholder.svg?height=60&width=60",
            },
            {
              title: "Herramientas Tecnológicas",
              description: "Escáner láser 3D como faro y Simscan con precisión de 0.03mm",
              icon: "/placeholder.svg?height=60&width=60",
            },
          ],
        },
      ],
      description:
        "Dado al compromiso de mejorar y brindar a nuestros clientes una excelente calidad, el departamento de ingeniería cuenta con software y herramientas especializadas en el rubro mecánico, como Solidworks, Desing X, Artec Studio. Nos apoyamos de herramientas de modelado 3D para garantizar cada diseño y poder realizar pruebas de las estructuras o piezas antes de su fabricación.\n\nContamos con escáner 3D con la precisión de hasta 0.3mm que nos permite realizar levantamiento y desarrollar planos para la fabricación de cualquier tipo de estructura o pieza mecánica.",
    },
  },
  // Los demás servicios se mantienen igual...
  {
    id: 3,
    title: "Maestranza Mecanizado",
    slug: "maestranza-mecanizado",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAES-YDzlUOHZHTbzKANBJoWXUSoyG6tJF0.png",
    content: {
      description:
        "Fabricación y mecanizado de piezas con precisión y calidad para diversas aplicaciones industriales.",
      headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAES-YDzlUOHZHTbzKANBJoWXUSoyG6tJF0.png",
      sections: [
        {
          title: "Mecanizado CNC",
          icon: "/placeholder.svg?height=80&width=80",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CNC-m2UV6uoJkBrabSYX8KRwXG0gSI5MgC.png",
          description:
            "Fabricación de piezas mediante control numérico computarizado con alta precisión y repetibilidad.",
        },
        {
          title: "Torneado",
          icon: "/placeholder.svg?height=80&width=80",
          image: "/placeholder.svg?height=200&width=200",
          description: "Mecanizado de piezas cilíndricas con acabados de alta calidad y tolerancias precisas.",
        },
        {
          title: "Fresado",
          icon: "/placeholder.svg?height=80&width=80",
          image: "/placeholder.svg?height=200&width=200",
          description: "Fabricación de piezas complejas mediante el arranque de viruta con herramientas rotativas.",
        },
      ],
      features: [
        {
          title: "Capacidades de Producción",
          items: [
            {
              title: "Materiales Diversos",
              description: "Trabajamos con acero, aluminio, titanio, plásticos técnicos y más",
              icon: "/placeholder.svg?height=60&width=60",
            },
            {
              title: "Precisión Garantizada",
              description: "Tolerancias de hasta 0.01mm en nuestros procesos de mecanizado",
              icon: "/placeholder.svg?height=60&width=60",
            },
            {
              title: "Producción Flexible",
              description: "Desde prototipos unitarios hasta series medianas de producción",
              icon: "/placeholder.svg?height=60&width=60",
            },
          ],
        },
      ],
      description:
        "Nuestro servicio de Maestranza y Mecanizado ofrece soluciones integrales para la fabricación de piezas y componentes mecánicos con los más altos estándares de calidad. Contamos con un taller equipado con tecnología de punta y operado por técnicos altamente calificados.\n\nNos especializamos en la fabricación de piezas a medida según planos o muestras, utilizando procesos de mecanizado CNC que garantizan precisión y repetibilidad. Nuestras capacidades incluyen torneado, fresado, taladrado, roscado y rectificado de superficies.\n\nTrabajamos con una amplia gama de materiales, incluyendo diferentes tipos de aceros, aluminio, latón, bronce, titanio y plásticos técnicos. Cada pieza fabricada pasa por rigurosos controles de calidad para asegurar que cumple con las especificaciones requeridas.",
    },
  },
  {
    id: 4,
    title: "Fabricación",
    slug: "fabricacion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impre%203d%20p-3UVEq4DM1oqzBiLI8So9TbaCy3khHv.png",
    content: {
      description: "Servicios especializados de fabricación de piezas y componentes industriales.",
      headerImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impre%203d%20p-3UVEq4DM1oqzBiLI8So9TbaCy3khHv.png",
      sections: [
        {
          title: "Fabricación de Componentes",
          icon: "/modern-manufacturing-facility.png",
          image: "/placeholder.svg?key=wyqg2",
          description: "Producción de componentes mecánicos de alta precisión para diversas aplicaciones industriales.",
        },
        {
          title: "Piezas a Medida",
          icon: "/custom-parts.png",
          image: "/custom-manufacturing-facility.png",
          description: "Fabricación personalizada según especificaciones exactas del cliente.",
        },
        {
          title: "Producción en Serie",
          icon: "/industrial-production-line.png",
          image: "/batch-production.png",
          description: "Capacidad para producir series medianas con consistencia y calidad garantizada.",
        },
      ],
      features: [
        {
          title: "Nuestras Capacidades",
          items: [
            {
              title: "Precisión Garantizada",
              description: "Fabricamos con tolerancias mínimas para asegurar el perfecto funcionamiento",
              icon: "/precision-target.png",
            },
            {
              title: "Materiales de Calidad",
              description: "Utilizamos los mejores materiales para garantizar durabilidad y rendimiento",
              icon: "/diverse-art-materials.png",
            },
            {
              title: "Personalización Total",
              description: "Adaptamos cada proyecto a las necesidades específicas de nuestros clientes",
              icon: "/customization-options.png",
            },
          ],
        },
      ],
      description:
        "En Proyecta3D, nuestra división de fabricación se especializa en la producción de componentes y piezas de alta calidad para diversas aplicaciones industriales. Combinamos tecnologías tradicionales de manufactura con métodos innovadores para ofrecer soluciones óptimas a cada desafío.\n\nNuestro equipo de técnicos e ingenieros trabaja con precisión y atención al detalle para garantizar que cada pieza cumpla con las especificaciones exactas requeridas. Desde prototipos únicos hasta series de producción, tenemos la capacidad de adaptarnos a las necesidades de cada proyecto.\n\nUtilizamos materiales de primera calidad y sometemos cada componente a rigurosos controles para asegurar su funcionalidad y durabilidad. Nuestro compromiso es ofrecer soluciones de fabricación que contribuyan al éxito de los proyectos de nuestros clientes.",
    },
  },
  {
    id: 5,
    title: "Reparación y Arrendo de Equipos Hidráulicos",
    slug: "reparacion-arrendo-equipos-hidraulicos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xr5nOsYC8TZRNPVh2NI7gzW1eBGoSs.png",
    content: {
      description: "Servicios de reparación, mantenimiento y arriendo de equipos hidráulicos industriales.",
      headerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xr5nOsYC8TZRNPVh2NI7gzW1eBGoSs.png",
      sections: [
        {
          title: "Reparación de Equipos",
          icon: "/placeholder.svg?key=jdp0t",
          image: "/placeholder.svg?height=200&width=200&query=hydraulic equipment repair",
          description: "Diagnóstico y reparación de sistemas hidráulicos con técnicos especializados.",
        },
        {
          title: "Arriendo de Equipos",
          icon: "/placeholder.svg?height=80&width=80&query=hydraulic rental",
          image: "/placeholder.svg?height=200&width=200&query=hydraulic equipment rental",
          description: "Amplia gama de equipos hidráulicos disponibles para arriendo a corto y largo plazo.",
        },
        {
          title: "Mantenimiento Preventivo",
          icon: "/placeholder.svg?height=80&width=80&query=hydraulic maintenance",
          image: "/placeholder.svg?height=200&width=200&query=hydraulic preventive maintenance",
          description: "Programas de mantenimiento para prevenir fallas y extender la vida útil de los equipos.",
        },
      ],
      features: [
        {
          title: "Ventajas de Nuestro Servicio",
          items: [
            {
              title: "Respuesta Rápida",
              description: "Servicio de emergencia disponible para minimizar tiempos de inactividad",
              icon: "/placeholder.svg?height=60&width=60&query=quick response",
            },
            {
              title: "Técnicos Certificados",
              description: "Personal altamente capacitado con experiencia en sistemas hidráulicos",
              icon: "/placeholder.svg?height=60&width=60&query=certified technicians",
            },
            {
              title: "Repuestos Originales",
              description: "Utilizamos componentes de alta calidad para garantizar durabilidad y rendimiento",
              icon: "/placeholder.svg?height=60&width=60&query=quality parts",
            },
          ],
        },
      ],
      description:
        "Nuestro servicio de Reparación y Arrendo de Equipos Hidráulicos ofrece soluciones completas para mantener sus operaciones en funcionamiento óptimo. Contamos con un equipo de técnicos especializados y un amplio inventario de equipos disponibles para arriendo inmediato.\n\nEn nuestra división de reparación, diagnosticamos y solucionamos problemas en bombas, motores, cilindros, válvulas y sistemas hidráulicos completos. Utilizamos herramientas de diagnóstico avanzadas y repuestos de calidad para garantizar reparaciones duraderas.\n\nNuestro servicio de arriendo incluye una amplia gama de equipos hidráulicos como bombas, unidades de potencia, cilindros y herramientas especializadas. Todos nuestros equipos son sometidos a rigurosas inspecciones y mantenimiento preventivo antes de cada arriendo para asegurar su funcionamiento confiable.\n\nOfrecemos también programas de mantenimiento preventivo personalizados para reducir costosas averías y extender la vida útil de sus equipos hidráulicos.",
    },
  },
  {
    id: 6,
    title: "Venta de Equipos Hidráulicos",
    slug: "venta-equipos-hidraulicos",
    image: "/placeholder.svg?key=i4ojc",
    content: {
      description: "Distribución y venta de equipos hidráulicos de alta calidad para aplicaciones industriales.",
      headerImage: "/placeholder.svg?key=01l8b",
      sections: [
        {
          title: "Bombas Hidráulicas",
          icon: "/placeholder.svg?height=80&width=80&query=hydraulic pumps",
          image: "/placeholder.svg?height=200&width=200&query=hydraulic pump equipment",
          description: "Amplia gama de bombas hidráulicas para diversas aplicaciones y requerimientos de presión.",
        },
        {
          title: "Cilindros y Actuadores",
          icon: "/placeholder.svg?height=80&width=80&query=hydraulic cylinders",
          image: "/placeholder.svg?height=200&width=200&query=hydraulic cylinders",
          description: "Soluciones de movimiento lineal y rotativo para aplicaciones industriales.",
        },
        {
          title: "Válvulas y Controles",
          icon: "/placeholder.svg?height=80&width=80&query=hydraulic valves",
          image: "/placeholder.svg?height=200&width=200&query=hydraulic valves",
          description: "Sistemas de control de flujo, presión y dirección para circuitos hidráulicos.",
        },
      ],
      features: [
        {
          title: "Por qué Elegirnos",
          items: [
            {
              title: "Marcas Reconocidas",
              description: "Distribuidores oficiales de las principales marcas del mercado",
              icon: "/placeholder.svg?height=60&width=60&query=quality brands",
            },
            {
              title: "Asesoría Técnica",
              description: "Expertos que te ayudan a seleccionar el equipo ideal para tu aplicación",
              icon: "/placeholder.svg?height=60&width=60&query=technical advice",
            },
            {
              title: "Garantía Extendida",
              description: "Respaldo completo y servicio post-venta para todos nuestros productos",
              icon: "/placeholder.svg?height=60&width=60&query=warranty",
            },
          ],
        },
      ],
      description:
        "En Proyecta3D ofrecemos una amplia gama de equipos hidráulicos de alta calidad para diversas aplicaciones industriales. Como distribuidores autorizados de marcas líderes en el mercado, garantizamos productos confiables y con respaldo oficial.\n\nNuestro catálogo incluye bombas hidráulicas, cilindros, motores, válvulas, mangueras, accesorios y sistemas completos para aplicaciones móviles e industriales. Todos nuestros productos cumplen con los más altos estándares de calidad y eficiencia.\n\nContamos con un equipo de asesores técnicos que te ayudarán a seleccionar el equipo más adecuado para tus necesidades específicas, considerando factores como presión, caudal, potencia y condiciones de operación.\n\nAdemás de la venta, ofrecemos servicios de instalación, puesta en marcha y capacitación para asegurar el óptimo funcionamiento de tus equipos hidráulicos. Nuestro compromiso es proporcionar soluciones completas que contribuyan al éxito de tu operación.",
    },
  },
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  // Si no se encuentra el servicio, mostrar una página genérica en lugar de 404
  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <Link href="/#servicios" className="mb-4 inline-flex items-center text-[#ff8c00] hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a servicios
            </Link>
            <h1 className="text-4xl font-bold">
              <span className="text-[#ff8c00]">Servicio no encontrado</span>
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <p>Lo sentimos, el servicio que buscas no está disponible actualmente.</p>
        </div>
      </div>
    )
  }

  // Plantilla común para todas las páginas de servicio
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <Link href="/#servicios" className="mb-4 inline-flex items-center text-[#ff8c00] hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a servicios
          </Link>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold">
                <span className="text-[#ff8c00]">{service.title.split(" ")[0]}</span>
                <br />
                <span className="text-proyecta-dark">{service.title.split(" ").slice(1).join(" ")}</span>
              </h1>
            </div>
            {service.content.headerImage && (
              <div className="w-full md:w-1/2">
                <img
                  src={service.content.headerImage || "/placeholder.svg"}
                  alt={service.title}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Servicios Grid */}
      {service.content.sections && service.content.sections.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {service.content.sections.map((section, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#ff8c00] p-4">
                  <img
                    src={section.icon || "/placeholder.svg"}
                    alt={section.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold uppercase">{section.title}</h3>
                <div className="mt-4 h-48 w-full overflow-hidden rounded-lg">
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      {service.content.features &&
        service.content.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">
                  {feature.title.split(" ")[0]}
                  <br />
                  <span className="text-[#ff8c00]">{feature.title.split(" ").slice(1).join(" ")}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-8">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="mr-4 flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#ff8c00]">
                          <img
                            src={item.icon || "/placeholder.svg"}
                            alt={item.title}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt={feature.title}
                    className="mb-4 h-auto w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Descripción */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-gray-100 p-8">
            <div className="mb-4 h-1 w-20 bg-[#ff8c00]"></div>
            <div className="whitespace-pre-line text-gray-700">{service.content.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
