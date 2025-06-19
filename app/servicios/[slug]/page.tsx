"use client";

import Link from "next/link"
import { ArrowLeft, ChevronLeft, Download } from "lucide-react"
import { use, useState } from "react"
import { useParams } from "next/navigation";


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
      headerImage: "/images/impresion3d/imp3d2.png",

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
    image: "/images/IngenieriayDiseño.png",
    content: {
      description: "Servicios profesionales de ingeniería mecánica y diseño industrial.",
      headerImage: "/images/IngenieriayDiseño.png",
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
        "Nuestro departamento de ingeniería cuenta con un staff altamente calificado, con herramientas que nos proporcionan realizar levantamientos y re ingeniería con calidad y presión milimétrica.\n\nContamos con equipos y software de calidad como SolidWorks – Desing X para el modelado 3D y procesado de nube de puntos.",
    },
  },
  // Los demás servicios se mantienen igual...
  {
    id: 3,
    title: "Maestranza Mecanizado",
    slug: "maestranza-mecanizado",
    image: "",
    content: {
      description:
        "Fabricación y mecanizado de piezas con precisión y calidad para diversas aplicaciones industriales.",
      headerImage: "/images/MAES2.png",
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
      description:
        "Nuestro personal cuenta con herramientas de medición certificadas y calibradas que nos permiten mantener la calidad en cada trabajo realizado, nuestros equipos cuentan con mantenimiento programado con la finalidad de mantener a nuestros clientes satisfechos día a día.\n\nNuestra maestranza cuanta con equipos como Tornos Convencionales, fresadoras centro de mecanizado y torno CNC.",
    },
  },
  {
    id: 4,
    title: "Fabricación",
    slug: "fabricacion",
    image: "/images/FabricacionPiping.png",
    content: {
      description:
        "Servicios especializados de fabricación industrial con tecnología avanzada y personal altamente calificado para proyectos de gran envergadura.",
      headerImage:
        "/images/FabricacionPiping.png",
      fullDescription: `En nuestra empresa contamos con personal altamente acidifico desde 5G hasta 6G, con experiencia en materiales especiales como Super Dúplex y titanio. El área de Fabricación o calderería cuenta con un área de 330 m²2  exclusiva para la fabricación estructural y piping. `,
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

      ],
      features: [

      ],
      description:
        "Proyecta 3D cuenta con un equipo calificado en el área de mantenciones, reparación, calibración y certificación de todo equipo hidráulico, neumático, eléctrico y electrónico. También contamos con ingenieros calificados para realizar trabajos en fabricación y mantención de redes neumáticas. Nos especializamos en mantención y reparación de equipos autónomos (compresores, generadores, soldadoras y luminarias), entre otros.",
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


export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const service = services.find((s) => s.slug === slug);
  const [isEquipmentListOpen, setIsEquipmentListOpen] = useState(false)

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
                <div className="h-12">
                  <p className="text-gray-600">{item.description}</p>
                </div>
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
                            )) : service.slug === "ingenieria-y-diseno" ? (
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

      {/* Sección de Equipos Disponibles para Arriendo */}
      {service.slug === "reparacion-arrendo-equipos-hidraulicos" && (
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#ff8c00]">ARRIENDO</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                NUESTRA EMPRESA CUENTA CON UNA AMPLIA GAMA DE EQUIPOS PARA ARRIENDO:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-lg">
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full bg-gray-200 border-b-2 border-black p-4 hover:bg-gray-300 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-xl font-bold text-black">
                    Listados de equipos disponibles para arriendo ({24} equipos)
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">
                      {open ? "Ocultar lista" : `Ver ${24} equipos disponibles`}
                    </span>
                    <svg
                      className={`h-6 w-6 text-black transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                </div>

                {open && (
                  <div className="divide-y-2 divide-black">
                    {[
                      "B-RAD 1000",
                      "DB-RAD 1000 NGX CORTA Y LARGA",
                      "RAD 1800",
                      "RAD 34GX",
                      "RAD 60DX",
                      "B-RAD 1500-2",
                      "B-RAD 5000",
                      "E-RAD 2500",
                      "E-RAD 3000",
                      "GATA ENERPAC 200TON, PRASA20016",
                      "GATA ENERPAC 200TON, PRASA20027",
                      "BOMBAS ELECTRO-HIDRAULICAS 10.000PSI TORQUE C/MANGUERA",
                      "CABEZAL 3MXT",
                      "CABEZAL 5MXT",
                      "CABEZAL 10MXT",
                      'LLAVE IMPACTO BATERIA 3/4"',
                      'LLAVE DE IMPACTO BATERIA 1/2"',
                      'LLAVE DE IMPACTO ELECTRICA 3/4"',
                      'LLAVE DE IMPACTO ELECTRICA 1/2"',
                      "CABEZAL TIPO CASSETE LINK 70 A 95MM",
                      "CABEZAL TIPO CASSETE LINK 55MM",
                      "CILINDRO VARIOS HASTA 100 TONS",
                      "BOMBAS MANUAL TIPO P-80",
                      "CARGADOR PARTIDOR BOOSTER 12V A 24V",
                    ].map((equipo, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">{equipo}</span>
                          <div className="flex items-center space-x-2">
                            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-sm text-green-600 font-medium">Disponible</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="p-4 bg-[#ff8c00] text-white">
                      <div className="flex items-start space-x-3">
                        <svg
                          className="h-6 w-6 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold">CONSULTAR POR SU EQUIPO</p>
                          <p className="text-sm text-orange-100">YA QUE TENEMOS SEMANAL UN INGRESO NUEVO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Disponibilidad Inmediata</h4>
                <p className="text-gray-600">Equipos listos para entrega el mismo día</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Equipos Certificados</h4>
                <p className="text-gray-600">Todos nuestros equipos están calibrados y certificados</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">Soporte Técnico</h4>
                <p className="text-gray-600">Asesoría especializada durante todo el período de arriendo</p>
              </div>
            </div>


          </div>
        </div>

      )}

      {/* Sección de Servicios Mejorada */}
      {service.slug === "reparacion-arrendo-equipos-hidraulicos" && (
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            {/* Introducción mejorada */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-proyecta-dark">Nuestros </span>
                <span className="text-[#ff8c00]">Servicios Especializados</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  En Proyecta3D entendemos que el tiempo de inactividad de equipos hidráulicos puede resultar
                  extremadamente costoso para cualquier operación industrial. Por eso, hemos desarrollado un servicio
                  integral que combina <strong>experiencia técnica</strong>,{" "}
                  <strong>equipos de última generación</strong> y <strong>respuesta inmediata</strong> para mantener sus
                  operaciones funcionando sin interrupciones.
                </p>
                <div className="bg-[#ff8c00] text-white p-6 rounded-lg">
                  <p className="text-lg font-semibold">
                    "Más de 5 años de experiencia nos respaldan como líderes en soluciones hidráulicas industriales"
                  </p>
                </div>
              </div>
            </div>

            {/* Grid de servicios mejorado */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reparación de Equipos */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ff8c00] to-[#e67e00] rounded-full mx-auto mb-6">
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">REPARACIÓN DE EQUIPOS</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Diagnóstico avanzado y reparación especializada de sistemas hidráulicos con técnicos certificados y
                    repuestos originales.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Diagnóstico con equipos de última generación</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Técnicos certificados por fabricantes</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Garantía extendida en todas las reparaciones</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Servicio de emergencia 24/7</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      <strong>Tiempo promedio de reparación:</strong> 24-48 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Arriendo de Equipos */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-[#ff8c00]">
                <div className="bg-gradient-to-r from-[#ff8c00] to-[#e67e00] p-2">
                  <p className="text-white text-center font-semibold text-sm">⭐ SERVICIO DESTACADO</p>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ff8c00] to-[#e67e00] rounded-full mx-auto mb-6">
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">ARRIENDO DE EQUIPOS</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Amplia flota de equipos hidráulicos de última generación disponibles para proyectos de cualquier
                    duración y complejidad.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Más de 50 equipos especializados disponibles</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Entrega e instalación en sitio</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Capacitación de operadores incluida</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Soporte técnico durante todo el arriendo</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#ff8c00] to-[#e67e00] p-4 rounded-lg text-white">
                    <p className="text-xs text-center">
                      <strong>Disponibilidad:</strong> Inmediata • <strong>Modalidades:</strong> Diario, Semanal,
                      Mensual
                    </p>
                  </div>
                </div>
              </div>

              {/* Mantenimiento Preventivo */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#ff8c00] to-[#e67e00] rounded-full mx-auto mb-6">
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">MANTENIMIENTO PREVENTIVO</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Programas personalizados de mantenimiento para maximizar la vida útil de sus equipos y prevenir
                    costosas averías.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Inspecciones programadas y reportes detallados</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Cambio de fluidos y filtros especializados</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Calibración y ajustes de precisión</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#ff8c00] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Historial digital de mantenimientos</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 text-center">
                      <strong>Ahorro promedio:</strong> 40% en costos de reparación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Galería de Equipos */}
      {service.slug === "reparacion-arrendo-equipos-hidraulicos" && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-proyecta-dark">Galería de </span>
                <span className="text-[#ff8c00]">Equipos</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Conoce visualmente algunos de nuestros equipos hidráulicos disponibles para arriendo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_1-NNWFVGTW7ahkRhg19Ir4K3wrF9NtMB.png",
                  title: "Herramienta de Torque con Batería",
                  description: "Kit completo con maletín protector",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_2-mHhxEc91BR3G3bDNnI7CgAUBmrQ9vg.png",
                  title: "Unidad de Potencia Hidráulica",
                  description: "Bomba portátil con manómetro",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_3-DMw6DLDvRlDLOqBuh2pTtvVtgXtkbT.png",
                  title: "Llave de Impacto Neumática",
                  description: "Herramienta de alta potencia",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_4-LO68vA8qbYQgajvI1oF4Xt0hkpJ6Sw.png",
                  title: "Herramienta Hidráulica Azul",
                  description: "En maletín protector rojo",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_5-maG8kaevoKfioGKKC8DeirwR9OF1iF.png",
                  title: "Llave Hidráulica Roja",
                  description: "Herramienta de precisión",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_6-lg32decC5yJBHULJVEJCHCTE46gY2x.png",
                  title: "Llave de Torque Extendida",
                  description: "Para aplicaciones de alto torque",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_7-WVIM6uISq2Zm6SEUC73TZSTmFdmVs9.png",
                  title: "Cilindro Hidráulico Enerpac",
                  description: "Cilindro amarillo con documentación",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_8-IH6M3pwLPX5XXUpb7S2sf4pKzzmYk8.png",
                  title: "Herramienta Roja con Batería",
                  description: "Kit completo con accesorios",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_9-Vcb7IiLwTGPrN2OSKjWMVR2b6jVo7s.png",
                  title: "Kit de Herramientas Completo",
                  description: "Maletín con múltiples componentes",
                },
                {
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/equipo_10-LOHpc4sbaYf9cdw7orwYubHrT4TIb7.png",
                  title: "Bomba Hidráulica con Mangueras",
                  description: "Sistema completo con control",
                },
              ].map((equipo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={equipo.image || "/placeholder.svg"}
                      alt={equipo.title}
                      className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{equipo.title}</h3>
                    <p className="text-gray-600 text-sm">{equipo.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex items-center text-green-600 text-sm font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Disponible
                      </span>
                      <button className="text-[#ff8c00] hover:text-[#e67e00] font-medium text-sm transition-colors">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action para la galería */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  ¿Necesitas más información sobre algún equipo?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Nuestro equipo técnico puede proporcionarte especificaciones detalladas, manuales de operación y
                  asesoría personalizada para cada herramienta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contacto"
                    className="inline-flex items-center justify-center bg-[#ff8c00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors"
                  >
                    Consultar Disponibilidad
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </a>
                  <a
                    href="tel:+56912345678"
                    className="inline-flex items-center justify-center border-2 border-[#ff8c00] text-[#ff8c00] px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8c00] hover:text-white transition-colors"
                  >
                    Llamar Ahora
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Sección Especial para Fabricación */}
      {service.slug === "fabricacion" && (
        <>
          {/* Servicios de Fabricación */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-proyecta-dark">Nuestras </span>
                  <span className="text-[#ff8c00]">Especialidades</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Fabricación industrial de alta complejidad con soldadores certificados 6G y tecnología avanzada
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" className="h-8 w-8 text-white">
                          <path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" />
                          <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" />
                          <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
                          <path d="M18 6h4" />
                          <path d="m5 10-2 8" />
                          <path d="m7 18 2-8" />
                        </svg>


                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Fabricación de Spool</h3>
                        <p className="text-gray-600">
                          Fabricación de estructuras especializadas para transporte y manejo de materiales industriales
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.42.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Reparación de bombas y motores</h3>
                        <p className="text-gray-600">
                          Nos dedicamos a ofrecer soluciones rápidas y efectivas para la reparación de bombas y motores.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-8 w-8 text-white">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Reparación de Excitatriz</h3>
                        <p className="text-gray-600">
                          Contamos con personal con experiencia de la mas alta calidad en reparación de equipos industriales como reductores, excitatrices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#ff8c00] to-[#e67e00] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">⚡ SOLDADURA ESPECIALIZADA</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Soldadores certificados 6G</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Mecánicos con experiencia en mantenimiento industrial minero</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Certificaciones de calidad industrial</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Soldadura en materiales especiales (inoxidables, duplex, súper duplex)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-4 text-gray-800">Proyectos de Fabricación</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Estructura Móvil Especializada</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Tuberías de Gran Diámetro</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Tolvas Industriales</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Proyectos de infraestructura de gran envergadura</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-8 flex items-center">
                        <a
                          href="/#proyectos"
                          className="inline-flex items-center justify-center bg-[#ff8c00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors text-sm">
                          Ver Proyectos
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galería de Proyectos de Fabricación */}
          {/*<div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-proyecta-dark">Galería de </span>
                  <span className="text-[#ff8c00]">Proyectos</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Ejemplos de nuestros trabajos de fabricación industrial de alta complejidad
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen_de_WhatsApp_2025-03-07_a_las_18.21.40_b6b49257-removebg-preview-MdnMVI3LYWVIa2ffYwK3Z9pJtTnpkK.png"
                      alt="Estructura móvil para manejo de materiales"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Estructura Móvil Especializada</h3>
                    <p className="text-gray-600 text-sm">
                      Fabricación de estructura amarilla móvil para transporte y manejo de materiales industriales
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-08%20a%20las%2017.03.18_93d5b40e.jpg-VC10k0IwBJhZytAPUevh7WEbhvEeZb.jpeg"
                      alt="Tubería de gran diámetro con bridas"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Tuberías de Gran Diámetro</h3>
                    <p className="text-gray-600 text-sm">
                      Fabricación e instalación de sistemas de tuberías industriales con bridas especializadas
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-08%20a%20las%2017.03.18_7c4a3ec6.jpg-AifwUbU3Kp1MELtwjc95Htt2ZH6xLg.jpeg"
                      alt="Infraestructura de tuberías"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Infraestructura Industrial</h3>
                    <p className="text-gray-600 text-sm">
                      Proyectos de gran envergadura para instalación de infraestructura de tuberías
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soldador-PVaprnu48xwwlnU547gN0vebufxELn.png"
                      alt="Soldadura especializada"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Soldadura Especializada</h3>
                    <p className="text-gray-600 text-sm">
                      Procesos de soldadura con soldadores certificados 6G para estructuras críticas
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turbo-wPkQTcMC6BmJuKtTYFMWw3huu8FXRV.png"
                      alt="Impulsor de turbina mecanizado"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Mecanizado de Precisión</h3>
                    <p className="text-gray-600 text-sm">
                      Fabricación de impulsores de turbina con acabados especializados y tolerancias exactas
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sector-energetico.-Fabricacion-de-tolvas-I-1024x677.jpg-7krzHszp7ZMDoza2S9BPpSgtckmQiF.jpeg"
                      alt="Tolvas para sector energético"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Tolvas Industriales</h3>
                    <p className="text-gray-600 text-sm">
                      Fabricación de tolvas metálicas para aplicaciones en sector energético y minero
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          */}

          {/* Brochure de Servicios */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                    <span className="text-proyecta-dark">Catálogo de </span>
                    <span className="text-[#ff8c00]">Servicios</span>
                  </h2>
                  <p className="text-xl text-gray-700">
                    Conoce en detalle nuestros servicios de fabricación y reparación industrial
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <img
                        src="/images/generada2.png"
                        alt="Brochure de servicios de fabricación"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-800">FABRICACIÓN Y REPARACIÓN</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm font-bold">01</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Fabricación de Spool</h4>
                            <p className="text-gray-600">
                              Equipo de soldadores profesionales con amplia experiencia en fabricación de spool en
                              materiales como inoxidables, duplex y súper duplex
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm font-bold">02</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Reparación de Bombas y Motores</h4>
                            <p className="text-gray-600">
                              Servicios especializados de reparación y mantenimiento de equipos industriales críticos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm font-bold">03</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Reparación de Excitatriz</h4>
                            <p className="text-gray-600">
                              Personal con experiencia en mantenimiento industrial minero para equipos eléctricos
                              especializados
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto Especializado para Fabricación */}
          <div className="bg-gradient-to-r from-[#ff8c00] to-[#e67e00] py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">¿Tienes un proyecto de fabricación?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Nuestro equipo de soldadores certificados 6G y mecánicos especializados está listo para abordar
                  proyectos de alta complejidad
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="font-bold text-lg mb-4">📞 CONTACTO DIRECTO</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+56964551759"
                        className="block text-lg font-semibold hover:text-orange-200 transition-colors"
                      >
                        +56 9 6455 1759
                      </a>
                      <a
                        href="tel:+56953609309"
                        className="block text-lg font-semibold hover:text-orange-200 transition-colors"
                      >
                        +56 9 5360 9309
                      </a>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="font-bold text-lg mb-4">📧 CORREOS ESPECIALIZADOS</h3>
                    <div className="space-y-2">
                      <a
                        href="mailto:ventas@proyecta3d.cl"
                        className="block text-lg font-semibold hover:text-orange-200 transition-colors"
                      >
                        ventas@proyecta3d.cl
                      </a>
                      <a
                        href="mailto:cgarcia@proyecta3d.cl"
                        className="block text-lg font-semibold hover:text-orange-200 transition-colors"
                      >
                        cgarcia@proyecta3d.cl
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#contacto"
                    className="inline-flex items-center justify-center bg-white text-[#ff8c00] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Solicitar Cotización
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                {/*Boton Vistitar WEB*/}                
                  {/*<a
                    href="https://www.proyecta3d.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#ff8c00] transition-colors"
                  >
                    Visitar Web
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>*/}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

  {/* Sección Especial para Maestranza Mecanizado */}
      {service.slug === "maestranza-mecanizado" && (
        <>
          {/* Servicios de Maestranza */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-proyecta-dark">Nuestros </span>
                  <span className="text-[#ff8c00]">Servicios de Maestranza</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Servicios especializados de mecanizado y maestranza con tecnología de precisión y personal altamente
                  calificado
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Mecanizado CNC</h3>
                        <p className="text-gray-600">
                          Mecanizado de alta precisión con máquinas CNC para componentes críticos y piezas complejas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Fabricación de Engranajes</h3>
                        <p className="text-gray-600">
                          Fabricación especializada de engranajes rectos, helicoidales y cónicos con tolerancias de
                          precisión
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Reparación de Maquinaria</h3>
                        <p className="text-gray-600">
                          Servicios de reparación y mantenimiento de maquinaria pesada e industrial
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Control de Calidad</h3>
                        <p className="text-gray-600">
                          Inspección dimensional y control de calidad con equipos de medición de alta precisión
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#ff8c00] to-[#e67e00] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">⚙️ TECNOLOGÍA AVANZADA</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Máquinas CNC de última generación</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Tornos y fresadoras de alta precisión</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Equipos de medición dimensional</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Software CAD/CAM especializado</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-4 text-gray-800">SERVICIOS ESPECIALIZADOS</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Mecanizado de componentes automotrices</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Fabricación de piezas de repuesto</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Mantenimiento de equipos rotatorios</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#ff8c00] rounded-full"></div>
                            <span>Rectificado y acabados superficiales</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-8 flex items-center">
                        <a
                          href="/#proyectos"
                          className="inline-flex items-center justify-center bg-[#ff8c00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors text-sm"
                        >
                          Ver Proyectos
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galería de Proyectos de Maestranza */}
          {/*<div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-proyecta-dark">Galería de </span>
                  <span className="text-[#ff8c00]">Trabajos</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Ejemplos de nuestros trabajos de maestranza y mecanizado de precisión
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://proyectaingenieria.com/static/media/img_04.a7f5e44c936981949351.jpg"
                      alt="Componentes mecanizados de precisión"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Componentes Mecanizados</h3>
                    <p className="text-gray-600 text-sm">
                      Fabricación de componentes mecanizados con tolerancias exigentes para la industria automotriz
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://proyectaingenieria.com/static/media/img_05.93532919526055559c99.jpg"
                      alt="Estructuras metálicas para minería"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Estructuras para Minería</h3>
                    <p className="text-gray-600 text-sm">
                      Diseño y fabricación de estructuras metálicas robustas para soportar equipos pesados en minería
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://proyectaingenieria.com/static/media/img_06.0c4a951e960559344665.jpg"
                      alt="Reparación de maquinaria pesada"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Reparación de Maquinaria</h3>
                    <p className="text-gray-600 text-sm">
                      Servicios de reparación y mantenimiento de maquinaria pesada para continuidad operativa
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://proyectaingenieria.com/static/media/img_07.538993c5183330c09965.jpg"
                      alt="Fabricación de engranajes industriales"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Engranajes Industriales</h3>
                    <p className="text-gray-600 text-sm">
                      Fabricación de engranajes de alta precisión para diversas aplicaciones industriales
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://proyectaingenieria.com/static/media/img_08.6954891353348399995a.jpg"
                      alt="Mecanizado de piezas complejas"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Piezas Complejas</h3>
                    <p className="text-gray-600 text-sm">
                      Mecanizado de piezas complejas con geometrías intrincadas y tolerancias ajustadas
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://proyectaingenieria.com/static/media/img_09.9995595559505a28149c.jpg"
                      alt="Mantenimiento de equipos rotatorios"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Equipos Rotatorios</h3>
                    <p className="text-gray-600 text-sm">
                      Mantenimiento preventivo y correctivo de equipos rotatorios para optimizar rendimiento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </>
      )}
      
            {/* Sección de Capacidades de Producción */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-proyecta-dark">Capacidades de </span>
              <span className="text-[#ff8c00]">Producción</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Nuestras capacidades técnicas y de fabricación para satisfacer las demandas más exigentes de la industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Fabricación de Engranajes</h3>
              <p className="text-gray-600 text-center">
                Mecanizado de precisión de engranajes rectos, helicoidales y cónicos con tolerancias de alta precisión
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Calibradores</h3>
              <p className="text-gray-600 text-center">
                Calibradores de 12" hasta de 1Mt
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Alexometros y micrómetro</h3>
              <p className="text-gray-600 text-center">
                Instrumentos de medición de alta precisión utilizados en control dimensional.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Personal de Control de Calidad Certificado</h3>
              <p className="text-gray-600 text-center">
                Profesionales especializados en inspección y aseguramiento de la calidad, capacitados y certificados para verificar que los productos cumplan con normas técnicas, tolerancias y estándares industriales.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 1.657-2.657 1.657-2.657A8 8 0 0118.657 17.657z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l4 4m0 0l4-4m-4 4V8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">Operadores de equipo de trabajo altamente calificados</h3>
              <p className="text-gray-600 text-center">
                Personal técnico especializado en operación de maquinaria industrial y ejecución de procesos de manufactura, con formación continua y experiencia en el manejo seguro y eficiente de tecnologías avanzadas.
              </p>
            </div>  
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#ff8c00] to-[#e67e00] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Capacidades Técnicas Destacadas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">±0.01mm</div>
                  <div className="text-sm opacity-90">Tolerancia de Precisión</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Servicio de Emergencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6G</div>
                  <div className="text-sm opacity-90">Certificación de Soldadura</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Descripción */}
      {service.slug === "fabricacion" ? (
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-gray-100 p-8">
              <div className="mb-4 h-1 w-20 bg-[#ff8c00]"></div>
              <div className="whitespace-pre-line text-gray-700">{service.content.fullDescription}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-gray-100 p-8">
              <div className="mb-4 h-1 w-20 bg-[#ff8c00]"></div>
              <div className="whitespace-pre-line text-gray-700">{service.content.description}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
