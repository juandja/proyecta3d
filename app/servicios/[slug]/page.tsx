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
          image: "/images/mecanizado.png",
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
                        <svg className="h-8 w-8 text-white" fill="currentColor" stroke="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M 72.902958,511.04361 C 70.374584,510.58488 66.93861,509.50249 65.26746,508.63831 60.965843,506.41386 54.206886,498.40485 53.017423,494.12267 52.377768,491.81985 52.009122,458.53001 52.005577,402.75 L 52,315 H 32.147883 C 13.154876,315 12.149751,314.9016 8.9216798,312.7262 4.0745087,309.4597 1.2299208,304.68839 0.46111206,298.53505 0.09250719,295.58484 -0.03492443,285.82004 0.17793068,276.83551 0.5891426,259.47842 1.2133998,256.91761 6.154986,252.31661 10.240882,248.51233 13.43479,248 33.0651,248 L 52,248 V 230.5 213 h -5.818499 c -12.250702,0 -20.911643,-4.80399 -25.59127,-14.19477 L 18,193.60731 18,115.27154 C 18,28.232616 17.628837,33.126301 24.798827,25.630793 30.3393,19.838782 35.024208,18.047875 44.703083,18.021962 52.906165,18 52.906165,18 54.555874,14.523496 56.556761,10.306941 62.907254,4.4022119 67.860436,2.1528301 70.909149,0.76832252 75.152678,0.50622764 94,0.53836142 c 18.87487,0.0321807 23.08474,0.30817083 26.12928,1.71297908 5.24118,2.4183811 9.53937,6.3271078 12.48535,11.3540565 L 135.19004,18 l 11.45464,0 c 8.02016,0 12.26429,0.42961 14.15498,1.43283 3.23936,1.718842 40.51439,39.13338 42.09387,42.251429 1.40444,2.772474 1.42471,9.345445 0.0401,13.000641 -1.57294,4.152354 -37.59487,40.15153 -42.43362,42.40682 -3.07118,1.43144 -6.38009,1.86946 -14.25,1.88632 L 136,119 v 64.5 64.5 h 39 39 l 0.01,-32.75 c 0.01,-32.28391 0.0433,-32.82195 2.36393,-37.80561 2.75339,-5.91296 8.99821,-11.64003 14.48474,-13.28383 C 232.98892,163.52225 239.4513,163 245.21928,163 l 10.48725,0 0.64202,-7.59513 c 0.35312,-4.17733 1.47352,-9.46483 2.48978,-11.75 2.11427,-4.75417 8.16588,-10.99976 12.32894,-12.72416 L 274,129.75736 v -14.94442 c 0,-8.21943 0.4328,-15.753122 0.96178,-16.741531 0.52898,-0.98841 2.32898,-2.36342 4,-3.055579 C 282,93.757359 282,93.757359 282,84.87868 V 76 l -23.04545,0 c -23.04546,0 -23.04546,0 -25.5,-2.454545 -3.49589,-3.495882 -3.25761,-7.691938 0.62218,-10.956561 C 237.15345,60 237.15345,60 259.44824,60 h 22.29479 l 0.46282,-7.75 c 0.52419,-8.777761 2.70203,-13.947766 7.95652,-18.888047 7.02163,-6.601756 15.03823,-8.615108 23.93576,-6.011413 6.95056,2.03395 12.06084,6.320735 15.31164,12.844232 C 331.98294,45.358457 332,45.552619 332,69.677292 v 24.284604 l 2.51582,0.63143 c 1.38369,0.347286 3.40869,1.766546 4.5,3.15391 C 340.79131,100.00442 341,101.82316 341,115.03984 l 0,14.77012 4.46611,2.61731 C 353.74538,137.27924 358,145.4934 358,156.62573 V 163 h 25.96515 25.96515 l 0.28485,-50.75 c 0.27978,-49.847552 0.3233,-50.821129 2.44722,-54.75 2.52265,-4.666456 7.52066,-9.613072 11.98266,-11.859443 11.5418,-5.810669 26.77152,-0.4726 32.72244,11.469323 C 459.95095,62.29425 460,62.771021 460,82.696344 V 103 h 9 9 V 72.45034 c 0,-31.980789 0.40213,-35.239465 4.5448,-36.829159 3.32201,-1.274773 7.1484,-0.576659 9.28089,1.69327 1.74862,1.86133 2.17431,3.525454 2.17431,8.5 L 494,52 l 6.32569,0 c 5.31919,0 6.67164,0.368256 8.5,2.314451 2.68627,2.859406 2.8236,7.66214 0.30793,10.768864 -1.52518,1.883515 -3.07911,2.382103 -8.5,2.727279 L 494,68.232991 l 0,19.735621 c 0,18.886498 -0.0981,19.881158 -2.27957,23.118278 -1.25377,1.86046 -4.06627,4.3946 -6.25,5.63143 -3.42904,1.94214 -5.43626,2.25102 -14.72043,2.26523 L 460,119 v 22 22 h 3.30366 c 4.61001,0 13.13002,4.4896 16.67001,8.78423 5.67986,6.89066 6.02633,9.43666 6.02633,44.28461 v 31.71256 l 7.44927,0.37617 c 5.52337,0.27892 8.15738,0.90485 10.18821,2.42109 3.96647,2.9614 6.36838,6.52896 7.40505,10.99873 1.18007,5.08812 1.18007,34.7571 0,39.84522 -1.10541,4.76614 -3.63657,8.33564 -8.03236,11.32739 -3.15424,2.14676 -4.21688,2.25 -23.15805,2.25 H 460 l -0.006,87.75 c -0.004,56.51548 -0.36834,89.05611 -1.02474,91.41936 -1.48395,5.34279 -9.06633,13.31644 -14.74756,15.50858 -4.058,1.56581 -7.81619,1.8206 -26.72212,1.8117 -24.28211,-0.0114 -25.81517,-0.31542 -32.88164,-6.51986 -2.0549,-1.80423 -4.72218,-5.12303 -5.92727,-7.3751 C 376.5,493.5 376.5,493.5 376.22913,404.25 L 375.95826,315 H 256 136.04174 l -0.27087,89.25 C 135.5,493.5 135.5,493.5 133.30891,497.59468 c -1.20509,2.25207 -3.87237,5.57087 -5.92727,7.3751 -6.68469,5.86924 -8.9221,6.3587 -30.38164,6.64643 -10.725,0.1438 -21.568669,-0.11387 -24.097042,-0.5726 z M 115.4552,494.37882 C 120.03807,492.62021 120,493.39774 120,401.54966 V 315 H 94 68 v 87.54545 87.54546 l 2.454545,2.45454 C 72.900677,494.99159 72.979235,495 93.372758,495 c 11.255012,0 21.192112,-0.27953 22.082442,-0.62118 z M 441.54545,492.54545 444,490.09091 V 402.54545 315 h -26.01603 -26.01604 l 0.26604,88.08855 0.26603,88.08855 2.36078,1.91145 c 2.1563,1.74588 4.17412,1.91145 23.29546,1.91145 20.8936,0 20.93948,-0.005 23.38921,-2.45455 z M 495,281.5 V 264 H 256 17 V 281.5 299 H 256 495 Z M 120,135.95034 C 120,16.75856 120.10161,19.404178 115.4552,17.621181 114.56487,17.279532 104.62777,17 93.372758,17 72.979235,17 72.900677,17.008414 70.454545,19.454545 L 68,21.909091 V 134.95455 248 h 26 26 z M 248,241.2101 c 0,-18.3924 8.66722,-32.48925 24.8855,-40.47519 l 6.56965,-3.23491 67.98256,-0.28358 c 66.0258,-0.27541 68.17612,-0.22478 74.70783,1.75917 6.9192,2.10164 14.24853,6.84137 19.13623,12.37501 C 447.72182,218.64174 452,230.75974 452,241.7101 V 248 h 9 9 V 216.57673 185.15345 L 467.41111,182.07673 464.82221,179 H 349.86565 234.90909 l -2.45454,2.45455 C 230,183.90909 230,183.90909 230,215.95455 V 248 h 9 9 z m 187.75338,-0.97779 c -0.29283,-4.27224 -1.20084,-9.36746 -2.0178,-11.32273 -2.26895,-5.43037 -7.67672,-10.97303 -13.2283,-13.55827 -5.00728,-2.33177 -5.00728,-2.33177 -69.89126,-2.34154 -46.86387,-0.007 -65.97412,0.31684 -68.80918,1.16625 -5.0153,1.50262 -12.27958,7.88406 -15.02131,13.19577 -1.48826,2.8833 -2.26738,6.6161 -2.58359,12.37821 L 263.7492,248 h 86.26829 86.2683 z M 52,115.5 V 34 l -6.545455,0 c -5.616161,0 -6.893939,0.348485 -9,2.454545 L 34,38.909091 v 76.456559 76.45656 l 3.076725,2.5889 c 2.552188,2.14752 4.08656,2.58889 9,2.58889 H 52 Z m 290,41.93426 c 0,-5.73948 -1.15673,-9.036 -3.91334,-11.15246 -1.16222,-0.89232 -9.46089,-1.2267 -31.02221,-1.25 -28.86755,-0.0312 -29.48021,0.0102 -31.75,2.14251 -1.98085,1.86092 -2.31445,3.15816 -2.31445,9 V 163 h 34.5 34.5 z m 102,-43.3785 V 65.111527 l -2.39387,-2.783036 C 438.45756,58.66806 432.1474,58.408486 428.75505,61.799852 426.5,64.054249 426.5,64.054249 426.22277,113.52712 L 425.94555,163 H 434.97277 444 Z M 325,119 v -9 H 307.5 290 v 9 9 H 307.5 325 Z M 170.99984,85.500158 188.47825,68.000316 171.50016,51.000158 154.52206,34 145.26103,34 136,34 V 68.5 103 h 8.76072 8.76071 z M 316,70.588894 V 47.177787 l -3.19468,-2.688144 c -2.58535,-2.175432 -3.86138,-2.579952 -6.69022,-2.120896 -1.92255,0.311987 -4.42244,1.493283 -5.55532,2.625103 -1.94391,1.942096 -2.07673,3.378314 -2.36115,25.532002 L 297.89725,94 H 306.94863 316 Z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Tornos convencionales</h3>
                        <p className="text-gray-600">
                          Contamos con tornos convencionales y CNC con capacidades de volteo desde 400 mm hasta 1800 mm sobre bancada, permitiendo el maquinado de piezas de gran volumen con alta precisión y eficiencia.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-[#ff8c00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="h-8 w-8 text-white" fill="currentColor" stroke="currentColor" viewBox="0 0 49152 49152" xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="m 10627.836,48917.667 c -418.707,-149.362 -904.2285,-616.819 -974.1302,-937.886 -26.3174,-120.88 -63.2686,-543.781 -82.1137,-939.781 -34.2638,-720 -34.2638,-720 -1514.928,-773.202 -1375.8976,-49.439 -1517.1326,-72.038 -1996.0729,-319.399 -635.8793,-328.416 -1311.3817,-955.553 -1208.5185,-1121.989 46.5119,-75.258 34.1628,-94.706 -33.559,-52.852 -120.2695,74.331 -538.2452,-662.605 -453.5463,-799.651 28.7259,-46.48 -2.0403,-102.595 -68.3693,-124.702 -96.0318,-32.006 -125.8328,-3363.013 -146.2958,-16352.199 C 4124.6046,11184 4124.6046,11184 4325.4924,10521.425 4449.707,10111.737 4630.7391,9754.4917 4799.8055,9585.4252 4950.1894,9435.0414 5046.561,9312 5013.9645,9312 4888.6025,9312 5636.7848,8800.6282 6048,8605.2517 6462.996,8408.0789 6642.4829,8398.1107 10608,8352 c 4128,-48 4128,-48 4176,-3758.0498 44.775,-3460.7678 60.15,-3723.46701 228.83,-3909.73624 99.457,-109.82749 224.931,-172.4303 278.833,-139.11734 56.764,35.08227 68.656,13.0853 28.261,-52.2756 -44.537,-72.06165 56.43,-165.56273 279.371,-258.71325 303.572,-126.84075 1457.045,-145.481052 8842.573,-142.897415 4671.404,1.634171 8610.612,30.652515 8753.797,64.485215 358.306,84.66332 856.323,471.67029 1023.848,795.62827 108.541,209.89386 142.283,754.81366 152.765,2467.03746 7.4,1208.7013 36.222,2811.9432 64.05,3562.7599 50.596,1365.1212 50.596,1365.1212 4266.688,1392 3390.959,21.6183 4231.588,51.9687 4295.271,155.0782 43.549,70.5096 106.749,124.5096 140.446,120 197.553,-26.4386 256.729,4.5329 196.1,102.6334 -42.601,68.9298 -26.317,84.7633 43.071,41.8793 125.946,-77.8391 424.269,173.1149 324.451,272.9332 -35.477,35.4763 1.706,39.0956 82.628,8.0429 170.058,-65.2572 492.689,248.0105 451.022,437.9329 -15.403,70.2084 36.795,130.6574 115.995,134.3311 79.2,3.6736 138.077,80.7724 130.839,171.3304 -7.239,90.5581 20.583,143.7962 61.825,118.3068 41.243,-25.4893 155.165,136.9756 253.161,361.0336 170.921,390.792 179.218,1069.481 203.804,16670.687 22.756,14440.369 8.927,16328.499 -123.367,16844.895 -171.138,668.015 -446.053,1175.785 -615.818,1137.416 -64.194,-14.508 -88.185,19.785 -53.315,76.206 34.87,56.421 5.681,172.694 -64.864,258.384 -213.937,259.864 -866.697,699.729 -956.258,644.377 -46.204,-28.556 -84.007,-13.008 -84.007,34.551 0,190.492 -810.323,308.933 -2123.138,310.331 -759.474,0.809 -1445.662,43.347 -1524.862,94.53 -113.871,73.589 -116.312,93.368 -11.665,94.53 209.335,2.325 99.307,1409.235 -139.096,1778.597 -279.062,432.358 -544.828,626.452 -691.437,504.97 -93.554,-77.52 -106.889,-61.36 -56.887,68.943 59.779,155.78 6.294,166.199 -631.433,123 -670.061,-45.389 -710.586,-62.341 -1058.234,-442.662 -389.019,-425.581 -480.414,-742.447 -482.191,-1671.757 -1.057,-552.38 -1.057,-552.38 -11785.057,-528 C 12816,46320 12816,46320 12763.957,47136 c -28.624,448.8 -101.515,902.4 -161.981,1008 -202.693,353.99 -700.245,740.71 -1060.722,824.439 -455.516,105.804 -477.991,104.555 -913.418,-50.772 z M 41760,27263.475 C 41760,11424 41760,11424 38061.918,11424 c -3698.082,0 -3698.082,0 -3685.617,1437.353 11.032,1272.121 -9.239,1473.523 -176.339,1752 -103.842,173.056 -241.325,302.777 -305.518,288.268 -64.194,-14.508 -90.528,15.994 -58.521,67.783 32.008,51.789 -59.942,171.659 -204.331,266.379 -197.545,129.589 -525.034,184.098 -1323.059,220.217 C 31248,15504 31248,15504 31200,17376 c -41.811,1630.617 -71.501,1906.674 -230.256,2140.907 -307.817,454.164 -676.936,584.282 -1721.974,607.013 -519.326,11.297 -967.069,43.379 -994.984,71.294 -27.915,27.915 -45.007,495.812 -37.983,1039.77 13.309,1030.623 -172.542,1695.204 -457.129,1634.637 -68.17,-14.508 -98.865,14.203 -68.212,63.801 130.91,211.817 -637.752,523.504 -1399.826,567.62 -753.636,43.627 -753.636,43.627 -753.636,1751.441 0,1733.689 -36.301,2059.744 -216.892,1948.133 -59.696,-36.894 -72.177,-16.011 -30.618,51.233 114.405,185.112 -337.935,485.421 -736.49,488.957 -198,1.757 -360,-42.556 -360,-98.472 0,-55.916 -39.741,-77.104 -88.313,-47.085 -48.572,30.019 -179.889,-61.84 -291.816,-204.132 -193.649,-246.185 -202.156,-347.343 -175.687,-2088.915 C 23664,23472 23664,23472 23252.192,23505.969 c -570.967,47.099 -1099.954,-60.963 -1012.432,-206.82 52.225,-87.033 33.787,-86.59 -75.512,1.817 -189.198,153.031 -896.662,-294.757 -812.441,-514.233 29.697,-77.388 12.596,-115.12 -38.001,-83.849 -204.847,126.602 -393.003,-653.818 -377.584,-1566.109 11.39,-673.814 -18.167,-924.106 -116.48,-986.382 -72.458,-45.899 -543.33,-84.114 -1046.381,-84.923 -905.506,-1.455 -1432.07,-161.035 -1289.981,-390.939 30.568,-49.461 -21.532,-59.783 -118.394,-23.457 -147.368,55.267 -154.852,42.547 -50.536,-85.889 101.021,-124.378 95.948,-160.932 -28.986,-208.874 -102.198,-39.217 -129.629,-19.452 -84.366,60.789 48.201,85.451 29.348,83.823 -67.014,-5.785 -123.649,-114.981 -164.848,-957.212 -180.566,-3691.315 -1.518,-264 -1.518,-264 -1081.518,-264.359 -917.179,-0.305 -1128.359,-29.842 -1400.767,-195.92 -197.636,-120.493 -300.852,-247.456 -268.889,-330.752 32.286,-84.136 4.524,-117.02 -73.513,-87.074 -130.985,50.264 -373.131,-409.627 -340.318,-646.342 10.03,-72.354 13.117,-725.553 6.861,-1451.553 C 14784,11424 14784,11424 11064,11423.998 c -3720,-0 -3720,-0 -3695.4308,15810.686 14.3221,9216.557 60.5437,15832.924 110.8251,15864.002 47.4408,29.323 7779.9847,42.278 17183.4307,28.789 C 41760,43102.949 41760,43102.949 41760,27263.475 Z M 16150.293,41172.155 C 15638.665,41024.51 15264,40416.403 15264,39733.639 c 0,-521.091 25.634,-584.502 391.966,-969.597 388.169,-408.05 398.412,-412.042 1057.303,-412.042 648.42,0 673.881,9.328 1001.445,366.883 184.86,201.786 307.199,413.661 271.865,470.833 -38.286,61.948 -19.461,76.272 46.588,35.451 68.065,-42.066 111.339,-1.484 112.144,105.167 0.721,95.516 29.126,277.621 63.122,404.678 40.6,151.738 26.751,209.343 -40.358,167.867 -63.384,-39.174 -84.209,5.535 -54.858,117.775 96.946,370.72 -655.396,1284.577 -921.928,1119.851 -49.512,-30.6 -117.157,-11.732 -150.321,41.929 -72.728,117.677 -462.877,113.174 -890.675,-10.279 z m 5526.696,56.834 c -28.055,-28.055 -154.055,-70.789 -280,-94.963 -226.868,-43.546 -743.458,-549.037 -771.611,-755.035 -8.042,-58.845 -19.984,-150.191 -26.538,-202.991 -6.553,-52.8 -45.268,-149.265 -86.034,-214.367 -144.854,-231.331 55.205,-811.293 413.834,-1199.686 307.858,-333.408 426.532,-394.087 850.388,-434.814 432.51,-41.559 515.776,-19.508 682.592,180.767 104.496,125.455 191.43,174.1 193.186,108.1 1.757,-66 -47.206,-120 -108.806,-120 -61.6,0 -89.383,-22.617 -61.74,-50.26 96.287,-96.287 376.423,75.953 328.146,201.759 -30.452,79.358 1.902,107.333 86.563,74.845 392.889,-150.765 680.962,1203.492 380.689,1789.656 -146.403,285.794 -685.321,703.316 -809.081,626.829 -48.021,-29.679 -114.445,-10.056 -147.609,43.605 -62.42,100.997 -553.999,136.535 -643.979,46.555 z M 26736,41174.217 C 25232.871,40712.492 25529.32,38304 27089.28,38304 c 1646.091,0 2188.834,2122.534 714,2792.28 -433.309,196.773 -632.954,211.352 -1067.28,77.937 z m 5466.467,18.736 c 29.589,-47.876 -39.417,-62.671 -153.346,-32.878 -147.685,38.621 -186.292,20.43 -134.499,-63.373 49.019,-79.315 14.875,-107.65 -104.988,-87.123 -107.418,18.396 -167.207,-19.834 -151.255,-96.715 14.508,-69.924 -15.317,-101.366 -66.278,-69.871 -128.87,79.646 -503.828,-343.54 -443.555,-500.608 27.09,-70.597 13.488,-106.252 -30.227,-79.235 -139.961,86.501 -116.066,-769.947 31.323,-1122.698 161.987,-387.691 657.706,-785.803 874.751,-702.515 82.746,31.753 120.265,14.904 86.927,-39.037 -35.201,-56.957 106.739,-94.647 355.014,-94.267 904.106,1.382 1685.034,951.453 1473.812,1793.027 -108.962,434.138 -605.346,974.964 -993.896,1082.88 -439.289,122.008 -815.396,128.285 -743.783,12.413 z M 9528.9776,36072.895 c -170.9618,-119.292 -290.2155,-273.139 -265.0082,-341.881 25.2072,-68.742 4.966,-99.73 -44.9806,-68.861 C 9080.7841,35747.568 8832,35190.277 8832,34795.276 c 0,-424.099 239.4657,-958.394 516.5148,-1152.447 111.9169,-78.389 203.4852,-174.094 203.4852,-212.678 0,-38.583 43.2,-55.751 96,-38.151 52.8,17.6 64.8763,0.876 26.8363,-37.164 -95.0049,-95.005 301.5454,-634.876 414.8827,-564.829 50.071,30.945 79.168,-0.947 64.66,-70.871 -14.509,-69.925 22.539,-118.03 82.327,-106.901 59.788,11.13 102.988,-53.67 96,-144 -6.988,-90.329 37.508,-154.697 98.88,-143.04 61.373,11.658 157.455,-110.382 213.517,-271.2 65.019,-186.515 142.963,-267.036 215.246,-222.363 68.519,42.347 87.858,28.841 48.919,-34.164 -35.419,-57.309 33.506,-217.802 153.167,-356.651 411.051,-476.965 649.603,-769.69 996.898,-1223.284 196.802,-257.039 395.033,-427.595 456.315,-392.609 59.594,34.022 77.472,27.652 39.73,-14.155 -97.375,-107.862 96.869,-434.769 258.334,-434.769 74.226,0 165.781,-49.875 203.455,-110.833 46.123,-74.628 24.454,-85.178 -66.334,-32.298 -74.158,43.195 -13.047,-37.235 135.802,-178.732 148.849,-141.497 317.524,-228.288 374.833,-192.869 60.549,37.421 76.716,19.932 38.594,-41.751 -181.217,-293.215 693.238,-315.532 11267.938,-287.569 9369.286,24.776 10604.397,44.867 10577.143,172.052 -23.676,110.486 -4.196,117.818 83.698,31.502 63.005,-61.874 184.891,-85.699 270.857,-52.944 227.387,86.64 597.487,448.268 620.711,606.504 23.573,160.614 351.591,649.349 351.591,523.858 0,-47.191 -75.6,-174.859 -168,-283.707 -134.743,-158.727 -137.031,-174.048 -11.557,-77.395 86.044,66.28 280.139,299.001 431.322,517.159 151.184,218.158 391.781,521.794 534.66,674.747 156.704,167.752 239.085,342.807 207.622,441.186 -37.596,117.557 -27.5,128.864 36.163,40.501 64.44,-89.441 281.038,113.599 801.056,750.913 392.003,480.426 784.552,1003.409 872.33,1162.185 87.777,158.775 191.903,317.664 231.391,353.087 39.487,35.422 36.595,3.729 -6.429,-70.429 -53.287,-91.85 -42.08,-112.495 35.155,-64.761 62.358,38.54 101.433,141.445 86.833,228.679 -14.751,88.133 37.437,159.563 117.454,160.761 201.81,3.019 479.673,603.643 479.851,1037.237 0.175,426.627 -243.657,1067.561 -375.206,986.26 -50.258,-31.061 -122.638,-5.895 -160.844,55.924 -43.385,70.198 -27.854,86.68 41.366,43.9 226.243,-139.826 95.418,93.735 -156.184,278.833 -257.965,189.78 -431.947,192.288 -15045.074,216.895 -14784.0918,24.896 -14784.0918,24.896 -15094.9314,-192 z M 35078.818,32920.209 c -74.38,-83.484 -102.743,-184.284 -63.027,-224 39.715,-39.715 25.164,-57.809 -32.335,-40.209 -152.444,46.662 -642.279,-566.934 -559.503,-700.868 42.041,-68.025 28.353,-87.236 -34.487,-48.399 -57.309,35.419 -131.334,20.494 -164.498,-33.167 -40.193,-65.033 -3253.729,-97.566 -9637.352,-97.566 -9577.052,0 -9577.052,0 -9978.334,446.573 -220.705,245.616 -401.282,469.014 -401.282,496.441 0,27.427 -71.495,128.869 -158.879,225.427 -153.827,169.977 175.812,175.559 10368,175.559 7220.117,0 10526.879,31.345 10526.879,99.785 0,57.671 56.988,47.542 135.027,-24 116.033,-106.372 116.003,-145.138 -0.209,-275.576 z M 26284.038,20856 C 26256,20112 26256,20112 24576,20112 c -1680,0 -1680,0 -1708.941,613.889 -15.918,337.638 -6.474,672.438 20.987,744 39.391,102.651 405.974,130.111 1736.979,130.111 1687.051,0 1687.051,0 1659.013,-744 z M 27744,16126.723 c 0,-673.277 0,-673.277 -3240,-648 -3240,25.277 -3240,25.277 -3269.452,541.834 -16.199,284.106 -6.755,575.706 20.987,648 41.306,107.641 633.34,131.443 3269.452,131.443 3219.013,0 3219.013,0 3219.013,-673.277 z M 31152,7728 c 0,-4416 0,-4416 -6554,-4416 -6554,0 -6554,0 -6553,4392 0.55,2415.6 1.45,4413.9 2,4440.666 0.55,26.767 2949.4,37.567 6553,24 C 31152,12144 31152,12144 31152,7728 Z m -8651.683,2980.796 C 22014.115,10499.233 21888,10228.902 21888,9396.2801 c 0,-736.9987 0,-736.9987 -1245.9,-770.6394 -1228.888,-33.1814 -1249.532,-37.4229 -1512,-310.6545 -146.355,-152.3575 -201.3,-246.3539 -122.1,-208.8808 89.131,42.1716 79.986,15.663 -24,-69.5696 -92.4,-75.7363 -168,-192.2295 -168,-258.8738 0,-94.1604 37.45,-92.17 168,8.9289 146.095,113.1366 144.966,103.049 -8.653,-77.3656 -202.891,-238.2811 -156.06,-491.3649 140.735,-760.5645 166.966,-151.4407 403.356,-188.4243 1461.55,-228.6608 C 21840,6672 21840,6672 21888,5930.3178 21966.027,4724.6699 21903.681,4752 24576,4752 c 2672.319,0 2609.973,-27.3301 2688,1178.3178 C 27312,6672 27312,6672 28528.705,6720 c 1097.308,43.2896 1239.454,69.4114 1448.518,266.1895 342.482,322.3546 352.33,996.9849 19.414,1329.9008 -141.681,141.6808 -306.264,221.7333 -389.892,189.642 -82.067,-31.4918 -119.326,-14.4491 -86.065,39.3673 37.349,60.4325 -342.323,94.9004 -1045.349,94.9004 -607.2,0 -1125.665,35.0547 -1152.144,77.8994 -26.48,42.8447 -57.006,412.7103 -67.837,821.9236 -19.301,729.226 -26.412,749.149 -357.515,1001.693 -337.55,257.463 -339.328,257.685 -2217.828,277.059 -1398.816,14.428 -1956.711,-13.671 -2179.69,-109.779 z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Centro CNC</h3>
                        <p className="text-gray-600">
                          Disponemos de centros de mecanizado CNC de alta precisión, capaces de atender una amplia gama de requerimientos en fresado y perforado, adaptándonos a las especificaciones técnicas de cada cliente con eficiencia y calidad.
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
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Fabricación de Engranajes</h3>
                        <p className="text-gray-600">
                          Fabricación especializada de engranajes rectos, helicoidales y cónicos con tolerancias de
                          precisión.
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
            {/*  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
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
            </div> */}

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
                <svg className="h-8 w-8 text-white" fill="currentColor" stroke="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M 72.902958,511.04361 C 70.374584,510.58488 66.93861,509.50249 65.26746,508.63831 60.965843,506.41386 54.206886,498.40485 53.017423,494.12267 52.377768,491.81985 52.009122,458.53001 52.005577,402.75 L 52,315 H 32.147883 C 13.154876,315 12.149751,314.9016 8.9216798,312.7262 4.0745087,309.4597 1.2299208,304.68839 0.46111206,298.53505 0.09250719,295.58484 -0.03492443,285.82004 0.17793068,276.83551 0.5891426,259.47842 1.2133998,256.91761 6.154986,252.31661 10.240882,248.51233 13.43479,248 33.0651,248 L 52,248 V 230.5 213 h -5.818499 c -12.250702,0 -20.911643,-4.80399 -25.59127,-14.19477 L 18,193.60731 18,115.27154 C 18,28.232616 17.628837,33.126301 24.798827,25.630793 30.3393,19.838782 35.024208,18.047875 44.703083,18.021962 52.906165,18 52.906165,18 54.555874,14.523496 56.556761,10.306941 62.907254,4.4022119 67.860436,2.1528301 70.909149,0.76832252 75.152678,0.50622764 94,0.53836142 c 18.87487,0.0321807 23.08474,0.30817083 26.12928,1.71297908 5.24118,2.4183811 9.53937,6.3271078 12.48535,11.3540565 L 135.19004,18 l 11.45464,0 c 8.02016,0 12.26429,0.42961 14.15498,1.43283 3.23936,1.718842 40.51439,39.13338 42.09387,42.251429 1.40444,2.772474 1.42471,9.345445 0.0401,13.000641 -1.57294,4.152354 -37.59487,40.15153 -42.43362,42.40682 -3.07118,1.43144 -6.38009,1.86946 -14.25,1.88632 L 136,119 v 64.5 64.5 h 39 39 l 0.01,-32.75 c 0.01,-32.28391 0.0433,-32.82195 2.36393,-37.80561 2.75339,-5.91296 8.99821,-11.64003 14.48474,-13.28383 C 232.98892,163.52225 239.4513,163 245.21928,163 l 10.48725,0 0.64202,-7.59513 c 0.35312,-4.17733 1.47352,-9.46483 2.48978,-11.75 2.11427,-4.75417 8.16588,-10.99976 12.32894,-12.72416 L 274,129.75736 v -14.94442 c 0,-8.21943 0.4328,-15.753122 0.96178,-16.741531 0.52898,-0.98841 2.32898,-2.36342 4,-3.055579 C 282,93.757359 282,93.757359 282,84.87868 V 76 l -23.04545,0 c -23.04546,0 -23.04546,0 -25.5,-2.454545 -3.49589,-3.495882 -3.25761,-7.691938 0.62218,-10.956561 C 237.15345,60 237.15345,60 259.44824,60 h 22.29479 l 0.46282,-7.75 c 0.52419,-8.777761 2.70203,-13.947766 7.95652,-18.888047 7.02163,-6.601756 15.03823,-8.615108 23.93576,-6.011413 6.95056,2.03395 12.06084,6.320735 15.31164,12.844232 C 331.98294,45.358457 332,45.552619 332,69.677292 v 24.284604 l 2.51582,0.63143 c 1.38369,0.347286 3.40869,1.766546 4.5,3.15391 C 340.79131,100.00442 341,101.82316 341,115.03984 l 0,14.77012 4.46611,2.61731 C 353.74538,137.27924 358,145.4934 358,156.62573 V 163 h 25.96515 25.96515 l 0.28485,-50.75 c 0.27978,-49.847552 0.3233,-50.821129 2.44722,-54.75 2.52265,-4.666456 7.52066,-9.613072 11.98266,-11.859443 11.5418,-5.810669 26.77152,-0.4726 32.72244,11.469323 C 459.95095,62.29425 460,62.771021 460,82.696344 V 103 h 9 9 V 72.45034 c 0,-31.980789 0.40213,-35.239465 4.5448,-36.829159 3.32201,-1.274773 7.1484,-0.576659 9.28089,1.69327 1.74862,1.86133 2.17431,3.525454 2.17431,8.5 L 494,52 l 6.32569,0 c 5.31919,0 6.67164,0.368256 8.5,2.314451 2.68627,2.859406 2.8236,7.66214 0.30793,10.768864 -1.52518,1.883515 -3.07911,2.382103 -8.5,2.727279 L 494,68.232991 l 0,19.735621 c 0,18.886498 -0.0981,19.881158 -2.27957,23.118278 -1.25377,1.86046 -4.06627,4.3946 -6.25,5.63143 -3.42904,1.94214 -5.43626,2.25102 -14.72043,2.26523 L 460,119 v 22 22 h 3.30366 c 4.61001,0 13.13002,4.4896 16.67001,8.78423 5.67986,6.89066 6.02633,9.43666 6.02633,44.28461 v 31.71256 l 7.44927,0.37617 c 5.52337,0.27892 8.15738,0.90485 10.18821,2.42109 3.96647,2.9614 6.36838,6.52896 7.40505,10.99873 1.18007,5.08812 1.18007,34.7571 0,39.84522 -1.10541,4.76614 -3.63657,8.33564 -8.03236,11.32739 -3.15424,2.14676 -4.21688,2.25 -23.15805,2.25 H 460 l -0.006,87.75 c -0.004,56.51548 -0.36834,89.05611 -1.02474,91.41936 -1.48395,5.34279 -9.06633,13.31644 -14.74756,15.50858 -4.058,1.56581 -7.81619,1.8206 -26.72212,1.8117 -24.28211,-0.0114 -25.81517,-0.31542 -32.88164,-6.51986 -2.0549,-1.80423 -4.72218,-5.12303 -5.92727,-7.3751 C 376.5,493.5 376.5,493.5 376.22913,404.25 L 375.95826,315 H 256 136.04174 l -0.27087,89.25 C 135.5,493.5 135.5,493.5 133.30891,497.59468 c -1.20509,2.25207 -3.87237,5.57087 -5.92727,7.3751 -6.68469,5.86924 -8.9221,6.3587 -30.38164,6.64643 -10.725,0.1438 -21.568669,-0.11387 -24.097042,-0.5726 z M 115.4552,494.37882 C 120.03807,492.62021 120,493.39774 120,401.54966 V 315 H 94 68 v 87.54545 87.54546 l 2.454545,2.45454 C 72.900677,494.99159 72.979235,495 93.372758,495 c 11.255012,0 21.192112,-0.27953 22.082442,-0.62118 z M 441.54545,492.54545 444,490.09091 V 402.54545 315 h -26.01603 -26.01604 l 0.26604,88.08855 0.26603,88.08855 2.36078,1.91145 c 2.1563,1.74588 4.17412,1.91145 23.29546,1.91145 20.8936,0 20.93948,-0.005 23.38921,-2.45455 z M 495,281.5 V 264 H 256 17 V 281.5 299 H 256 495 Z M 120,135.95034 C 120,16.75856 120.10161,19.404178 115.4552,17.621181 114.56487,17.279532 104.62777,17 93.372758,17 72.979235,17 72.900677,17.008414 70.454545,19.454545 L 68,21.909091 V 134.95455 248 h 26 26 z M 248,241.2101 c 0,-18.3924 8.66722,-32.48925 24.8855,-40.47519 l 6.56965,-3.23491 67.98256,-0.28358 c 66.0258,-0.27541 68.17612,-0.22478 74.70783,1.75917 6.9192,2.10164 14.24853,6.84137 19.13623,12.37501 C 447.72182,218.64174 452,230.75974 452,241.7101 V 248 h 9 9 V 216.57673 185.15345 L 467.41111,182.07673 464.82221,179 H 349.86565 234.90909 l -2.45454,2.45455 C 230,183.90909 230,183.90909 230,215.95455 V 248 h 9 9 z m 187.75338,-0.97779 c -0.29283,-4.27224 -1.20084,-9.36746 -2.0178,-11.32273 -2.26895,-5.43037 -7.67672,-10.97303 -13.2283,-13.55827 -5.00728,-2.33177 -5.00728,-2.33177 -69.89126,-2.34154 -46.86387,-0.007 -65.97412,0.31684 -68.80918,1.16625 -5.0153,1.50262 -12.27958,7.88406 -15.02131,13.19577 -1.48826,2.8833 -2.26738,6.6161 -2.58359,12.37821 L 263.7492,248 h 86.26829 86.2683 z M 52,115.5 V 34 l -6.545455,0 c -5.616161,0 -6.893939,0.348485 -9,2.454545 L 34,38.909091 v 76.456559 76.45656 l 3.076725,2.5889 c 2.552188,2.14752 4.08656,2.58889 9,2.58889 H 52 Z m 290,41.93426 c 0,-5.73948 -1.15673,-9.036 -3.91334,-11.15246 -1.16222,-0.89232 -9.46089,-1.2267 -31.02221,-1.25 -28.86755,-0.0312 -29.48021,0.0102 -31.75,2.14251 -1.98085,1.86092 -2.31445,3.15816 -2.31445,9 V 163 h 34.5 34.5 z m 102,-43.3785 V 65.111527 l -2.39387,-2.783036 C 438.45756,58.66806 432.1474,58.408486 428.75505,61.799852 426.5,64.054249 426.5,64.054249 426.22277,113.52712 L 425.94555,163 H 434.97277 444 Z M 325,119 v -9 H 307.5 290 v 9 9 H 307.5 325 Z M 170.99984,85.500158 188.47825,68.000316 171.50016,51.000158 154.52206,34 145.26103,34 136,34 V 68.5 103 h 8.76072 8.76071 z M 316,70.588894 V 47.177787 l -3.19468,-2.688144 c -2.58535,-2.175432 -3.86138,-2.579952 -6.69022,-2.120896 -1.92255,0.311987 -4.42244,1.493283 -5.55532,2.625103 -1.94391,1.942096 -2.07673,3.378314 -2.36115,25.532002 L 297.89725,94 H 306.94863 316 Z" />
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
