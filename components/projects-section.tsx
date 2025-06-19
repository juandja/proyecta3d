import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  // NUEVOS PROYECTOS DE IMPRESIÓN 3D
  {
    id: 1,
    title: "Engranajes Industriales de Precisión",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Whiskey_Leaner_black_3d_printed_gear_parts_in_an_industrial_set_1e39105d-b5b0-450a-904f-9c34acc783a3-cMbDDRVbDEA8uTlMPinWZRvkrRkHcD.webp",
    description:
      "Fabricación de engranajes cónicos y cilíndricos mediante impresión 3D para aplicaciones industriales de alta precisión.",
  },
  {
    id: 2,
    title: "Sistemas de Alimentación de Filamento",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/613igGnHEOL.jpg-2bU5eKE3M9bexUCsCLWSd7fd3zR4xw.jpeg",
    description: "Desarrollo de mecanismos de tracción y alimentación precisa para equipos de impresión 3D industrial.",
  },
  {
    id: 3,
    title: "Impresión con Tecnología Markforged",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/article_markforged_cover-JZRbMFgMfBCujYAYx0GBE0MO1pZpM0.webp",
    description: "Utilización de impresoras Markforged para fabricación de componentes con fibra de carbono continua.",
  },
  {
    id: 4,
    title: "Componentes en ABS Reforzado",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABS-GF25_1_142853c0-f05f-45ff-98a3-ca19382d740e_1024x1024-N0pNICcTRllwA3P2tPI64KXm98AkVw.webp",
    description: "Fabricación de piezas mecánicas utilizando ABS reforzado con fibra de vidrio para mayor resistencia.",
  },
  {
    id: 5,
    title: "Transmisiones Mecánicas Complejas",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/61otkXbT2VL._AC_UF894%2C1000_QL80_.jpg-1ajPBuDW062vCARWd4VTwn1yAEUkiK.jpeg",
    description: "Impresión 3D de sistemas de transmisión con engranajes de diferentes módulos y configuraciones.",
  },
  {
    id: 6,
    title: "Impulsores de Geometría Compleja",
    category: "impresion-3d",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fffffff.jpg-jmcpy6QnaHWvCvGcH0bGkEBwQMWL6O.jpeg",
    description: "Fabricación de impulsores con geometrías complejas para aplicaciones de bombeo y ventilación.",
  },
  {
    id: 7,
    title: "Impresión 3D en Materiales Metálicos",
    category: "impresion-3d",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metals_cover-TkTOLmWTzxgYNgwcVRplHbUfgJdf0o.webp",
    description: "Componentes de alta precisión fabricados mediante tecnologías de impresión 3D metálica.",
  },
  {
    id: 8,
    title: "Piezas en Fibra de Carbono",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fibra-de-Carbono-de-XYZprinting.jpg-3HnFNMjWpeRIMMYNUDU2DAeTVhLtAB.jpeg",
    description: "Fabricación de componentes estructurales utilizando materiales compuestos de fibra de carbono.",
  },
  {
    id: 9,
    title: "Mecanismos Integrados Complejos",
    category: "impresion-3d",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pieza%2033.jpg-pdBuQrmYroBJ9rAnbY0ajw66dkwCAc.png",
    description: "Desarrollo de componentes mecánicos con múltiples funciones integradas en una sola pieza impresa.",
  },
  {
    id: 10,
    title: "Portfolio de Aplicaciones Diversas",
    category: "impresion-3d",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IG-title_photo_blog-scaled.jpg-lMilfC8HeiS0Zm62mej5TaL3oDhNJM.jpeg",
    description: "Amplia gama de aplicaciones industriales mostrando la versatilidad de la impresión 3D avanzada.",
  },
  /*  {
    id: 11,
    title: "Sistema de Ventilación",
    category: "diseno",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    description: "Diseño e implementación de sistema de ventilación optimizado para entornos industriales.",
  },*/
  // NUEVOS PROYECTOS DE DISEÑO
  {
    id: 45,
    title: "Modificacion de Spool",
    category: "diseno",
    image:
      "/images/ModificaciondSpool.jpg",
    description:
      "Diseño de Spools.",
  },
  {
    id: 46,
    title: "Spool de Venteo",
    category: "diseno",
    image:
      "/images/SpooldeVenteo.jpg",
    description:
      "Diseño de Spools.",
  },
  {
    id: 47,
    title: "Spool Largo",
    category: "diseno",
    image:
      "/images/SpoolLargo.jpg",
    description:
      "Diseño de Spools.",
  },
  {
    id: 12,
    title: "Diseño de Sistema Transportador Industrial",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-03-06%20a%20las%2020.14.27_eeac5cff.jpg-4ljBRy9vR33tkw7w3ycZ1NTGydGOkB.jpeg",
    description:
      "Modelado 3D de sistema transportador industrial con estructura metálica y componentes especializados para manejo de materiales.",
  },
  {
    id: 13,
    title: "Documentación Técnica y Planos de Ingeniería",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ingenieria-planos-detalle-850x491.jpg-udH5dIInr0AuGoMjNXSEoFYumijRau.jpeg",
    description:
      "Desarrollo de planos técnicos detallados y documentación de ingeniería con especificaciones precisas para fabricación.",
  },
  {
    id: 14,
    title: "Análisis de Esfuerzos von Mises",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-23%20at%2012.00.07%20PM-3DngOsstgvw1nwP9LQriV5z0CTXtRv.jpeg",
    description:
      "Análisis de elementos finitos para evaluación de esfuerzos von Mises en componentes roscados industriales.",
  },
  {
    id: 15,
    title: "Análisis de Desplazamientos Estructurales",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-23%20at%2012.00.47%20PM-ap1DO2RuP2Ewuo74N07ZDoHalU62JO.jpeg",
    description:
      "Simulación FEA de desplazamientos (URES) para validación de integridad estructural en componentes críticos.",
  },
  {
    id: 16,
    title: "Escaneo 3D de Instalaciones Industriales",
    category: "diseno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ndp2a-530x310-2AUMFWx0GoEXyBwREFvXenJoCsRzFJ.png",
    description:
      "Digitalización mediante escaneo 3D de instalaciones industriales para ingeniería inversa y documentación.",
  },
  {
    id: 17,
    title: "Modelado de Sistemas de Tuberías Complejas",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-30%20at%207.09.42%20PM-2CxMJTSfEUKoLvDBw84CB1EKSZbQVi.jpeg",
    description:
      "Diseño 3D de sistemas de tuberías industriales complejas con múltiples conexiones y componentes especializados.",
  },
  {
    id: 18,
    title: "Análisis de Factor de Seguridad (FDS)",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-23%20at%2012.01.42%20PM-Ew1ADsxcMQdpBIdiMWMnQEouoTBAmU.jpeg",
    description:
      "Evaluación del factor de seguridad mediante análisis FEA para garantizar la confiabilidad de componentes mecánicos.",
  },
  {
    id: 19,
    title: "Ingeniería de Sistemas con Dimensionado Preciso",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-30%20at%206.41.54%20PM-CGYWbCuTX6iUeZcxql651HGHBcyz8C.jpeg",
    description:
      "Modelado 3D detallado con dimensiones precisas para sistemas de tuberías industriales y componentes asociados.",
  },
  {
    id: 20,
    title: "Análisis de Deformaciones (ESTRN)",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-04-23%20at%2012.01.14%20PM-JHiEQvIrJeVscgaNZLCwWt5SUkBYnN.jpeg",
    description: "Simulación de deformaciones estructurales para optimización de diseño y validación de tolerancias.",
  },
  {
    id: 21,
    title: "Digitalización de Maquinaria Industrial",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-07-30%20at%2011.45.37%20AM-E58L5MyXDqs8LTqeP1Yq9LTMuv7Old.jpeg",
    description: "Escaneo 3D avanzado de maquinaria industrial compleja para documentación, mantenimiento y rediseño.",
  },
  // PROYECTOS DE FABRICACIÓN (mantenidos)
  {
    id: 22,
    title: "Fabricación de Tolvas Industriales",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lerman-tolva-jpg-POzX6CTY1Rq3IH77Ovq1vsq5201VTq.jpeg",
    description: "Diseño y fabricación de tolvas metálicas para manejo de materiales a granel en la industria minera.",
  },
  {
    id: 23,
    title: "Tuberías de Gran Diámetro",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-08%20a%20las%2017.03.18_93d5b40e.jpg-FrDwiORePVBjwvFLs6WSlN6P1HmjEz.jpeg",
    description: "Fabricación e instalación de tuberías industriales de gran diámetro con bridas especializadas.",
  },
  {
    id: 24,
    title: "Estructuras de Manejo de Materiales",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen_de_WhatsApp_2025-03-07_a_las_18.21.40_b6b49257-removebg-preview-gJBVJ5TwdcNTY20TLslwxDeQXXDF1d.png",
    description:
      "Fabricación de estructuras móviles especializadas para el transporte y manejo de materiales industriales.",
  },
  {
    id: 25,
    title: "Tolvas para Sector Energético",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sector-energetico.-Fabricacion-de-tolvas-I-1024x677.jpg-W4ZULrY78NnnL5iVFtKgYiBSdb9fx5.jpeg",
    description: "Fabricación de tolvas industriales de alta capacidad para aplicaciones en el sector energético.",
  },
  {
    id: 26,
    title: "Infraestructura de Tuberías",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-08%20a%20las%2017.03.18_7c4a3ec6.jpg-1r6HntDPGrDICu1UcrX2DmCpZShbjX.jpeg",
    description: "Proyectos de gran envergadura para instalación de infraestructura de tuberías industriales.",
  },
  {
    id: 27,
    title: "Impulsores de Turbina de Precisión",
    category: "fabricacion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turbo-uVkJFPiVqWbQfcCgUM6rGb9omSQu1O.png",
    description: "Mecanizado de alta precisión de impulsores para turbinas industriales con acabados especializados.",
  },
  {
    id: 28,
    title: "Procesos de Soldadura Especializada",
    category: "fabricacion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soldador-lTVfezZIcMjFuZFt3tSGxE7DKKH4FE.png",
    description: "Soldadura especializada para estructuras críticas con certificaciones de calidad industrial.",
  },
  {
    id: 29,
    title: "Componentes Mecanizados de Precisión",
    category: "maestranza",
    image: "https://proyectaingenieria.com/static/media/img_04.a7f5e44c936981949351.jpg",
    description: "Fabricación de componentes mecanizados con tolerancias exigentes para la industria automotriz.",
  },
  {
    id: 30,
    title: "Estructuras Metálicas para Minería",
    category: "maestranza",
    image: "https://proyectaingenieria.com/static/media/img_05.93532919526055559c99.jpg",
    description: "Diseño y fabricación de estructuras metálicas robustas para soportar equipos pesados en la minería.",
  },
  {
    id: 31,
    title: "Reparación de Maquinaria Pesada",
    category: "maestranza",
    image: "https://proyectaingenieria.com/static/media/img_06.0c4a951e960559344665.jpg",
    description:
      "Servicios de reparación y mantenimiento de maquinaria pesada para garantizar la continuidad operativa.",
  },
  {
    id: 32,
    title: "Fabricación de Engranajes Industriales",
    category: "maestranza",
    image: "https://proyectaingenieria.com/static/media/img_07.538993c5183330c09965.jpg",
    description: "Fabricación de engranajes de alta precisión para diversas aplicaciones industriales.",
  },
  {
    id: 33,
    title: "Mecanizado de Piezas Complejas",
    category: "maestranza",
    image: "https://proyectaingenieria.com/static/media/img_08.6954891353348399995a.jpg",
    description: "Mecanizado de piezas complejas con geometrías intrincadas y tolerancias ajustadas.",
  },
  {
    id: 34,
    title: "Mantenimiento de Equipos Rotatorios",
    category: "maestranza",
    image: "https://proyectaingenieria.com/static/media/img_09.9995595559505a28149c.jpg",
    description: "Mantenimiento preventivo y correctivo de equipos rotatorios para optimizar su rendimiento.",
  },

  // NUEVOS PROYECTOS DE ESCANEO 3D Y DIGITALIZACIÓN
  {
    id: 35,
    title: "Escaneo 3D de Válvulas Industriales",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.32%20PM%20%282%29-BTrf1U5rhAAAyIFcGxSaV0p9LcR2y2.jpeg",
    description:
      "Digitalización precisa de válvulas y sistemas de control mediante escaneo 3D para documentación técnica y análisis dimensional.",
  },
  {
    id: 36,
    title: "Captura 3D de Equipos de Proceso",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.32%20PM%20%283%29-zSqfwRU1AXixwoh9c6SeG4WW2oH01Z.jpeg",
    description:
      "Escaneo tridimensional de equipos industriales complejos con válvulas y conexiones para ingeniería inversa.",
  },
  {
    id: 37,
    title: "Digitalización de Sistemas de Tuberías",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.32%20PM%20%281%29-ZNlk9CNjj9TIVnRMzDunfLXSS91gEP.jpeg",
    description:
      "Escaneo 3D de alta precisión de sistemas de tuberías industriales con múltiples válvulas y conexiones de control.",
  },
  {
    id: 38,
    title: "Modelado 3D de Válvulas de Gran Diámetro",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.33%20PM%20%281%29-pbunWO9JeaOpRzdSie8rHin0XpGcvR.jpeg",
    description:
      "Captura tridimensional de válvulas industriales de gran tamaño con sistemas de actuación y control avanzados.",
  },
  {
    id: 39,
    title: "Escaneo de Válvulas con Actuadores",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.32%20PM-p0p17NdasZhW3VbF3lKVzTUINg1Njv.jpeg",
    description:
      "Digitalización de válvulas industriales con volantes de control y sistemas de actuación para análisis técnico.",
  },
  {
    id: 40,
    title: "Digitalización de Instalaciones Industriales",
    category: "diseno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ndp1a-530x310-jvvdBRj6YBpK7sX3zCJoDwrLzp0sDq.png",
    description:
      "Escaneo 3D completo de instalaciones industriales interiores con estructuras metálicas y equipos especializados.",
  },
  {
    id: 41,
    title: "Escaneo de Planta Industrial Compleja",
    category: "diseno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1729818088356-VBgysWXUt1VEOoedyUdOWQjeWoZ6wK.jpeg",
    description:
      "Digitalización integral de planta industrial con múltiples niveles, tuberías y equipos para documentación as-built.",
  },
  {
    id: 42,
    title: "Captura 3D de Componentes Mecánicos",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.33%20PM-YmGi1V8HG0Xb3BoNf6FdIyEIJk6QN8.jpeg",
    description:
      "Escaneo tridimensional de componentes mecánicos con engranajes y sistemas de transmisión para análisis de precisión.",
  },
  {
    id: 43,
    title: "Escaneo Láser 3D a Color",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/62f5150985a921a30798ae0c_6268b4f1839c2fdb7b0b2344_escaneo-laser-3d-color-HN0Baihg80U0dkZZ3HPO1lbn4XowTP.jpeg",
    description:
      "Digitalización láser 3D con captura de color de instalaciones industriales para documentación visual completa.",
  },
  {
    id: 44,
    title: "Metrología Dimensional 3D",
    category: "diseno",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-22%20at%208.05.33%20PM%20%282%29-X3OJ4PhomkRqvdJfefbCR4NThXx6gn.jpeg",
    description:
      "Escaneo 3D con mediciones dimensionales precisas de válvulas industriales para control de calidad y verificación.",
  },
]

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-proyecta-dark md:text-4xl">Nuestros Proyectos</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Conoce algunos de nuestros trabajos más destacados en diferentes áreas de especialización.
          </p>
        </div>

        <Tabs defaultValue="" className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="impresion-3d">Impresión 3D</TabsTrigger>
              <TabsTrigger value="diseno">Diseño</TabsTrigger>
              <TabsTrigger value="ingenieria">Ingeniería</TabsTrigger>
              <TabsTrigger value="maestranza">Maestranza</TabsTrigger>
              <TabsTrigger value="fabricacion">Fabricación</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="" className="mt-0">
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="h-24 w-24 text-gray-300 mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Selecciona una categoría</h3>
                <p className="text-gray-500">Elige una categoría de proyectos para ver nuestros trabajos destacados</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impresion-3d" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "impresion-3d")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="diseno" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "diseno")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ingenieria" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "ingenieria")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="maestranza" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "maestranza")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="fabricacion" className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === "fabricacion")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold text-proyecta-dark">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </CardContent>
    </Card>
  )
}
