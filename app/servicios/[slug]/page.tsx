import Link from "next/link"
import { ArrowLeft, ChevronLeft, Download } from "lucide-react"


// Datos de servicios
const services = [
  {
    id: 1,
    title: "Impresión 3D Fibra de Carbono",
    slug: "impresion-3d-fibra-de-carbono",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardimpresion3D.jpg-7VoN0INt2l6WlQMp5KyxgiB86yfyAk.jpeg",
    content: {
      description:
        "Tecnología de vanguardia para fabricar piezas con propiedades mecánicas excepcionales, combinando la versatilidad de la fabricación aditiva con la resistencia de los materiales compuestos.",
      headerImage: "/images/impresion3d/cardimpresion3D5.jpg",
      // Reemplazamos las secciones anteriores por la nueva sección de "Partes y Piezas"
      partesYPiezas: {
        title: "Partes y Piezas",
        description:
          "Contamos con impresora capaz de imprimir fibra de vidrio y fibra de carbono, sus piezas son tan resistentes como un duraluminio, alcanzando un máximo de 540Mpa",
        items: [
          {
            title: "Fabricación de bastones alza catados",
            description: "Elaborados para la industria minera",
            icon: "/mining-equipment.png",
          },
          {
            title: "Gatillos para pistolas de impacto",
            description: "Fabricación de gatillos para clientes de la industria hidráulica",
            icon: "/placeholder.svg?key=8f4z7",
          },
          {
            title: "Fabricación de partes mecánicas",
            description:
              "Reemplazo de componentes o piezas de duraluminio por piezas fabricadas en fibra de carbono, como carcasas, impulsores etc.",
            icon: "/placeholder.svg?key=8u1uk",
          },
        ],
        additionalInfo:
          "Contamos con un taller equipado que nos brinda la seguridad de ofrecerle a nuestros clientes calidad y respuesta a tiempo en cada trabajo, contamos con tornos, cepillo mecánico, taladros de bandera, y fresadora. En el área de impresión 3D, contamos con una impresora que nos permite imprimir piezas, con una resistencia mecánica des de los 80Mpa hasta los 540Mpa, superando ampliamente al acero al carbono SAE 1045 y el acero SAE 1045, esta impresora nos permite imprimir piezas directas en fibra de vidrio resistentes a la temperatura.",
      },
      features: [
        {
          title: "Ventajas de la Impresión 3D con Fibra de Carbono",
          items: [
            {
              title: "Alta Resistencia",
              description: "Piezas hasta 20 veces más resistentes que el plástico estándar",
              icon1: "/placeholder.svg?height=60&width=60",
              icon: "strength-icon", // Marcador para usar SVG inline
            },
            {
              title: "Ligereza",
              description: "Componentes con excelente relación resistencia-peso",
              icon2: "/placeholder.svg?height=60&width=60",
              icon: "lightweight-icon", // Marcador para usar SVG inline
            },
            {
              title: "Precisión",
              description: "Tolerancias de hasta 0.1mm para aplicaciones de ingeniería",
              icon3: "/placeholder.svg?height=60&width=60",
              icon: "precision-icon", // Marcador para usar SVG inline
            },
          ],
          image: "/images/impresion3d/deformacion.png",
          imageCaption:
            "Gráficos comparativos de resistencia a la flexión entre diferentes materiales. La fibra de carbono muestra una resistencia muy superior a otros materiales, incluso comparable al aluminio.",
        },
      ],
      extendedContent: `
        <div class="mt-12">
          <h3 class="mb-6 text-2xl font-bold">Materiales y Propiedades</h3>
          
          <div class="grid gap-8 md:grid-cols-2 mb-8">
            <div>
              <h4 class="mb-4 text-xl font-semibold">Materiales Base</h4>
              <p class="mb-4">
                Trabajamos con filamentos de nylon reforzados (Onyx) que ofrecen excelente acabado superficial y
                resistencia química. Estos materiales base pueden imprimirse solos o reforzarse con fibras
                continuas.
              </p>
              <ul class="ml-6 list-disc space-y-2">
                <li>
                  <span class="font-semibold">Onyx:</span> Nylon reforzado con microfibras de carbono para mayor
                  rigidez y acabado premium
                </li>
                <li>
                  <span class="font-semibold">Onyx FR:</span> Versión ignífuga para aplicaciones que requieren
                  resistencia al fuego
                </li>
                <li>
                  <span class="font-semibold">Nylon White:</span> Para aplicaciones que requieren color claro o
                  mayor flexibilidad
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="mb-4 text-xl font-semibold">Fibras Continuas</h4>
              <p class="mb-4">
                Las fibras continuas se aplican dentro de las piezas a través de una segunda boquilla, reforzando
                estratégicamente las áreas que requieren mayor resistencia.
              </p>
              <ul class="ml-6 list-disc space-y-2">
                <li>
                  <span class="font-semibold">Fibra de Carbono:</span> Máxima rigidez y resistencia con mínimo
                  peso
                </li>
                <li>
                  <span class="font-semibold">Fibra de Vidrio:</span> Excelente relación resistencia-costo
                </li>
                <li>
                  <span class="font-semibold">Kevlar:</span> Superior resistencia al impacto y abrasión
                </li>
                <li>
                  <span class="font-semibold">HSHT Fibra de Vidrio:</span> Para aplicaciones de alta temperatura
                </li>
              </ul>
            </div>
          </div>
          
          <h3 class="mb-6 text-2xl font-bold">Aplicaciones Industriales</h3>
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mb-8">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="mb-2 font-bold">Automoción</h4>
              <ul class="ml-4 list-disc text-sm">
                <li>Prototipos funcionales</li>
                <li>Soportes y fijaciones</li>
                <li>Componentes de baja producción</li>
                <li>Utillajes y moldes</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="mb-2 font-bold">Aeroespacial</h4>
              <ul class="ml-4 list-disc text-sm">
                <li>Componentes no críticos</li>
                <li>Soportes para instrumentación</li>
                <li>Piezas de interior</li>
                <li>Prototipos de validación</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="mb-2 font-bold">Médico</h4>
              <ul class="ml-4 list-disc text-sm">
                <li>Dispositivos a medida</li>
                <li>Instrumental quirúrgico</li>
                <li>Prótesis y ortesis</li>
                <li>Equipamiento especializado</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="mb-2 font-bold">Industrial</h4>
              <ul class="ml-4 list-disc text-sm">
                <li>Utillajes y fijaciones</li>
                <li>Piezas de reemplazo</li>
                <li>Componentes para maquinaria</li>
                <li>Herramientas especializadas</li>
              </ul>
            </div>
          </div>
          
          <h3 class="mb-6 text-2xl font-bold">Nuestro Proceso</h3>
          
          <div class="grid gap-8 md:grid-cols-4 mb-8">
            <div class="flex flex-col items-center text-center">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff8c00] text-2xl font-bold text-white">
                1
              </div>
              <h4 class="mb-2 text-lg font-bold">Diseño y Optimización</h4>
              <p>
                Nuestro equipo de ingenieros trabaja con el cliente para optimizar el diseño, aprovechando al máximo las
                ventajas de la tecnología de impresión con fibra continua.
              </p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff8c00] text-2xl font-bold text-white">
                2
              </div>
              <h4 class="mb-2 text-lg font-bold">Selección de Materiales</h4>
              <p>
                Seleccionamos la combinación óptima de material base y fibra de refuerzo según los requisitos específicos
                de resistencia, peso y entorno de uso.
              </p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff8c00] text-2xl font-bold text-white">
                3
              </div>
              <h4 class="mb-2 text-lg font-bold">Fabricación</h4>
              <p>
                Utilizamos impresoras 3D de última generación para fabricar las piezas con precisión, colocando la fibra
                continua en las áreas que requieren mayor resistencia.
              </p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff8c00] text-2xl font-bold text-white">
                4
              </div>
              <h4 class="mb-2 text-lg font-bold">Control de Calidad</h4>
              <p>
                Cada pieza fabricada pasa por rigurosos controles dimensionales y de calidad para garantizar que cumple
                con las especificaciones requeridas.
              </p>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg text-center">
            <h3 class="mb-4 text-2xl font-bold">¿Listo para revolucionar tus proyectos?</h3>
            <p class="mb-6 max-w-2xl mx-auto">
              Descubre cómo la impresión 3D con fibra de carbono puede transformar tus ideas en componentes funcionales
              con propiedades mecánicas excepcionales.
            </p>
            <a href="/#contacto" class="inline-block bg-[#ff8c00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e67e00]">
              Solicitar Cotización
            </a>
          </div>
        </div>
      `,
      description:
        "En Proyecta3D nos especializamos en la impresión 3D con fibra de carbono, una tecnología revolucionaria que permite fabricar piezas con propiedades mecánicas excepcionales. Nuestro proceso combina la versatilidad de la fabricación aditiva con la resistencia de los materiales compuestos.",
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
          icon: "calculation-icon",
          image: "/images/diseño/MEMO.png",
          description:
            "Análisis y documentación técnica para validar la integridad estructural y funcional de tus diseños.",
        },
        {
          title: "Diseño a Medida",
          icon: "custom-design-icon",
          image: "/images/diseño/MEMO2.png",
          description:
            "Soluciones personalizadas según tus necesidades específicas, desde el concepto hasta el producto final.",
        },
        {
          title: "Escaneo 3D",
          icon: "3d-scan-icon",
          image: "/images/diseño/ESCAN3.png",
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
              icon: "software-icon",
            },
            {
              title: "Ingenieros calificados",
              description: "Contamos con un gran equipo dedicados a solucionar tus problemas como equipo",
              icon: "engineer-icon",
            },
            {
              title: "Herramientas Tecnológicas",
              description: "Escáner láser 3D como faro y Simscan con precisión de 0.03mm",
              icon: "tech-tools-icon",
            },
          ],
          image: "/images/diseño/ESCAN2.png",
          imageCaption: "Equipo de escaneo láser 3D Trimble para levantamiento de alta precisión en terreno",
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
          image: "/placeholder.svg?key=w46ji",
          description: "Diagnóstico y reparación de sistemas hidráulicos con técnicos especializados.",
        },
        {
          title: "Arriendo de Equipos",
          icon: "/placeholder.svg?key=pqk84",
          image: "/placeholder.svg?key=j4zz7",
          description: "Amplia gama de equipos hidráulicos disponibles para arriendo a corto y largo plazo.",
        },
        {
          title: "Mantenimiento Preventivo",
          icon: "/placeholder.svg?key=cektb",
          image: "/placeholder.svg?key=ytixw",
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
              icon: "/placeholder.svg?key=ho1fc",
            },
            {
              title: "Técnicos Certificados",
              description: "Personal altamente capacitado con experiencia en sistemas hidráulicos",
              icon: "/placeholder.svg?key=hqz2e",
            },
            {
              title: "Repuestos Originales",
              description: "Utilizamos componentes de alta calidad para garantizar durabilidad y rendimiento",
              icon: "/placeholder.svg?key=w5z85",
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
    image: "/images/equipos-hidraulicos-hexagonos.png",
    content: {
      description: "Distribución y venta de equipos hidráulicos de alta calidad para aplicaciones industriales.",
      headerImage: "/images/equipos-hidraulicos-hexagonos.png",
      sections: [
        {
          title: "Herramientas de Torque Manual",
          icon: "/images/icons/wrench-icon.svg",
          image: "/images/catalogos/catalogo-torque-manual.png",
          description: "Herramientas de precisión para aplicaciones que requieren un torque específico y controlado.",
        },
        {
          title: "Herramientas de Torque a Batería",
          icon: "/images/icons/battery-tool-icon.svg",
          image: "/images/catalogos/catalogo-torque-bateria.png",
          description: "Soluciones portátiles y eficientes para trabajos que requieren movilidad y potencia.",
        },
        {
          title: "Cilindros y Accesorios",
          icon: "/images/icons/hydraulic-cylinder-icon.svg",
          image: "/images/catalogos/catalogo-cilindros.png",
          description: "Componentes hidráulicos de alta calidad para diversas aplicaciones industriales.",
        },
      ],
      features: [
        {
          title: "Por qué Elegirnos",
          items: [
            {
              title: "Marcas Reconocidas",
              description:
                "Distribuidores oficiales de las principales marcas del mercado como InnoTorc y Robert Tools",
              icon: "/images/icons/brand-icon.svg",
            },
            {
              title: "Asesoría Técnica",
              description: "Expertos que te ayudan a seleccionar el equipo ideal para tu aplicación",
              icon: "/images/icons/support-icon.svg",
            },
            {
              title: "Garantía Extendida",
              description: "Respaldo completo y servicio post-venta para todos nuestros productos",
              icon: "/warranty-document.png",
            },
          ],
        },
      ],
      catalogos: {
        title: "Nuestros Catálogos",
        description: "Descarga nuestros catálogos para conocer nuestra amplia gama de productos hidráulicos.",
        items: [
          {
            title: "Herramientas de Torque Manual",
            image: "/images/catalogos/catalogo-torque-manual.png",
            downloadUrl: "#",
            brand: "InnoTorc",
          },
          {
            title: "Herramientas de Torque a Batería",
            image: "/images/catalogos/catalogo-torque-bateria.png",
            downloadUrl: "#",
            brand: "InnoTorc",
          },
          {
            title: "Cilindros y Accesorios Hidráulicos",
            image: "/images/catalogos/catalogo-cilindros.png",
            downloadUrl: "#",
            brand: "Robert Tools",
          },
        ],
      },
      description:
        "En Proyecta3D ofrecemos una amplia gama de equipos hidráulicos de alta calidad para diversas aplicaciones industriales. Como distribuidores autorizados de marcas líderes en el mercado como InnoTorc y Robert Tools, garantizamos productos confiables y con respaldo oficial. Nuestro catálogo incluye herramientas de torque manual, herramientas de torque a batería, cilindros hidráulicos y una variedad de accesorios para aplicaciones industriales.",
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
      {/* Botón flotante para volver a servicios */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link
          href="/#servicios"
          className="group flex items-center gap-2 rounded-full bg-[#ff8c00] px-5 py-3 text-white shadow-lg transition-all duration-300 hover:bg-[#e67e00] hover:shadow-xl"
        >
          <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium">Volver a servicios</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold">
                <span className="text-[#ff8c00]">{service.title.split(" ")[0]}</span>
                <br />
                <span className="text-proyecta-dark">{service.title.split(" ").slice(1).join(" ")}</span>
              </h1>
              {service.content.description && (
                <p className="mt-4 max-w-xl text-gray-600">{service.content.description}</p>
              )}
            </div>
            {service.content.headerImage && (
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.content.headerImage || "/placeholder.svg"}
                    alt={service.title}
                    className="h-auto w-full rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección de Catálogos para Venta de Equipos Hidráulicos */}
      {service.slug === "venta-equipos-hidraulicos" && service.content.catalogos && (
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              <span className="text-proyecta-dark">Nuestros </span>
              <span className="text-[#ff8c00]">Catálogos</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-700">{service.content.catalogos.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {service.content.catalogos.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-sm font-medium text-white">{item.brand}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <div className="mt-auto pt-4">
                    <a
                      href={item.downloadUrl}
                      className="inline-flex items-center gap-2 rounded-md bg-[#ff8c00] px-4 py-2 text-white transition-colors hover:bg-[#e67e00]"
                    >
                      <Download className="h-4 w-4" />
                      <span>Descargar Catálogo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sección Partes y Piezas para Impresión 3D */}
      {service.slug === "impresion-3d-fibra-de-carbono" && service.content.partesYPiezas && (
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              <span className="text-proyecta-dark">Partes y </span>
              <span className="text-[#ff8c00]">Piezas</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-700">{service.content.partesYPiezas.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {service.content.partesYPiezas.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#ff8c00] p-4">
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 4h-4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6 15h4M6 18h4M6 9h4M6 6h4M16 15h2M16 18h2M16 9h2M16 6h2" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4 h-48 w-full overflow-hidden rounded-lg">
                  {index === 0 && (
                    <img
                      src="/images/impresion3d/cardimpresion3D5.jpg"
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="/images/impresion3d/cardimpresion3D.jpg"
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="/images/impresion3d/cardimpresion3D4.jpg"
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <p className="text-gray-700">{service.content.partesYPiezas.additionalInfo}</p>
          </div>
        </div>
      )}

      {/* Servicios Grid para otros servicios que no son Impresión 3D */}
      {service.slug !== "impresion-3d-fibra-de-carbono" &&
        service.content.sections &&
        service.content.sections.length > 0 && (
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {service.content.sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#ff8c00] p-4">
                    {service.slug === "venta-equipos-hidraulicos" ? (
                      index === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="14 7 14 3 6 3 6 21 14 21 14 17" />
                          <path d="M10 17v4" />
                          <path d="M10 3v4" />
                          <path d="M22 14l-8-4-8 4" />
                        </svg>
                      ) : index === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          <path d="M6 11h4" />
                          <path d="M14 11h4" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12h8" />
                          <path d="M12 8v8" />
                        </svg>
                      )
                    ) : service.slug === "ingenieria-y-diseno" ? (
                      section.icon === "calculation-icon" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <line x1="12" y1="4" x2="12" y2="20" />
                        </svg>
                      ) : section.icon === "custom-design-icon" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19l7-7 3 3-7 7-3-3z" />
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                          <path d="M2 2l7.586 7.586" />
                          <circle cx="11" cy="11" r="2" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      )
                    ) : (
                      <img
                        src={section.icon || "/placeholder.svg"}
                        alt={section.title}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold uppercase">{section.title}</h3>
                  <p className="mb-4 text-gray-600">{section.description}</p>
                  <div className="mt-4 h-48 w-full overflow-hidden rounded-lg">
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
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
                          {item.icon === "strength-icon" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 20v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8" />
                              <path d="M12 4v16" />
                              <path d="M8 12h8" />
                            </svg>
                          ) : item.icon === "lightweight-icon" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                            </svg>
                          ) : item.icon === "precision-icon" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="22" y1="12" x2="18" y2="12" />
                              <line x1="6" y1="12" x2="2" y2="12" />
                              <line x1="12" y1="6" x2="12" y2="2" />
                              <line x1="12" y1="22" x2="12" y2="18" />
                            </svg>
                          ) : service.slug === "venta-equipos-hidraulicos" ? (
                            itemIndex === 0 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                              </svg>
                            ) : itemIndex === 1 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1="6" y1="1" x2="6" y2="4" />
                                <line x1="10" y1="1" x2="10" y2="4" />
                                <line x1="14" y1="1" x2="14" y2="4" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                              </svg>
                            )                          ) : service.slug === "ingenieria-y-diseno" ? (
                              itemIndex === 0 ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-10 w-10 text-white"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                  <line x1="8" y1="21" x2="16" y2="21" />
                                  <line x1="12" y1="17" x2="12" y2="21" />
                                  <path d="M7 8h2" />
                                  <path d="M12 8h5" />
                                  <path d="M7 12h10" />
                                </svg>
                              ) : itemIndex === 1 ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-10 w-10 text-white"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-10 w-10 text-white"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                              )
                          ) : (
                            <img
                              src={item.icon || "/placeholder.svg"}
                              alt={item.title}
                              className="h-10 w-10 object-contain"
                            />
                          )}
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
                  {feature.image ? (
                    <div>
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="mb-4 h-auto w-full rounded-lg"
                      />
                      {feature.imageCaption && <p className="text-sm text-gray-600">{feature.imageCaption}</p>}
                    </div>
                  ) : (
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt={feature.title}
                      className="mb-4 h-auto w-full rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Contenido extendido para servicios específicos */}
      {service.content.extendedContent && (
        <div className="container mx-auto px-4 py-12">
          <div dangerouslySetInnerHTML={{ __html: service.content.extendedContent }} />
        </div>
      )}

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
