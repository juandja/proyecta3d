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
  {
    id: 11,
    title: "Sistema de Ventilación",
    category: "diseno",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
    description: "Diseño e implementación de sistema de ventilación optimizado para entornos industriales.",
  },
  {
    id: 12,
    title: "Estructura Metálica",
    category: "ingenieria",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    description: "Cálculo y diseño de estructura metálica para soporte de equipos pesados.",
  },
  {
    id: 13,
    title: "Mecanizado de Precisión",
    category: "maestranza",
    image: "https://images.unsplash.com/photo-1612887726773-e64e20cf8410?q=80&w=2070&auto=format&fit=crop",
    description: "Fabricación de componentes de precisión para maquinaria especializada.",
  },
  {
    id: 14,
    title: "Moldes Industriales",
    category: "diseno",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop",
    description: "Diseño y fabricación de moldes industriales para producción en serie.",
  },
  {
    id: 15,
    title: "Análisis de Elementos Finitos",
    category: "diseno",
    image: "https://images.unsplash.com/photo-1581093198693-b22e7a622cd5?q=80&w=2070&auto=format&fit=crop",
    description: "Simulación y análisis estructural para validar la integridad de componentes críticos.",
  },
  {
    id: 16,
    title: "Diseño Mecánico 3D",
    category: "diseno",
    image: "https://images.unsplash.com/photo-1581093458791-9d2b88c00e2f?q=80&w=2070&auto=format&fit=crop",
    description: "Modelado 3D de componentes mecánicos con alta precisión para fabricación.",
  },
  {
    id: 17,
    title: "Piezas Industriales Personalizadas",
    category: "diseno",
    image: "https://images.unsplash.com/photo-1581093458791-9d2b88c00e2f?q=80&w=2070&auto=format&fit=crop",
    description: "Diseño de piezas a medida para aplicaciones industriales específicas.",
  },
  // PROYECTOS DE FABRICACIÓN (mantenidos)
  {
    id: 18,
    title: "Fabricación de Tolvas Industriales",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lerman-tolva-jpg-POzX6CTY1Rq3IH77Ovq1vsq5201VTq.jpeg",
    description: "Diseño y fabricación de tolvas metálicas para manejo de materiales a granel en la industria minera.",
  },
  {
    id: 19,
    title: "Tuberías de Gran Diámetro",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-08%20a%20las%2017.03.18_93d5b40e.jpg-FrDwiORePVBjwvFLs6WSlN6P1HmjEz.jpeg",
    description: "Fabricación e instalación de tuberías industriales de gran diámetro con bridas especializadas.",
  },
  {
    id: 20,
    title: "Estructuras de Manejo de Materiales",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen_de_WhatsApp_2025-03-07_a_las_18.21.40_b6b49257-removebg-preview-gJBVJ5TwdcNTY20TLslwxDeQXXDF1d.png",
    description:
      "Fabricación de estructuras móviles especializadas para el transporte y manejo de materiales industriales.",
  },
  {
    id: 21,
    title: "Tolvas para Sector Energético",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sector-energetico.-Fabricacion-de-tolvas-I-1024x677.jpg-W4ZULrY78NnnL5iVFtKgYiBSdb9fx5.jpeg",
    description: "Fabricación de tolvas industriales de alta capacidad para aplicaciones en el sector energético.",
  },
  {
    id: 22,
    title: "Infraestructura de Tuberías",
    category: "fabricacion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-05-08%20a%20las%2017.03.18_7c4a3ec6.jpg-1r6HntDPGrDICu1UcrX2DmCpZShbjX.jpeg",
    description: "Proyectos de gran envergadura para instalación de infraestructura de tuberías industriales.",
  },
  {
    id: 23,
    title: "Impulsores de Turbina de Precisión",
    category: "fabricacion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turbo-uVkJFPiVqWbQfcCgUM6rGb9omSQu1O.png",
    description: "Mecanizado de alta precisión de impulsores para turbinas industriales con acabados especializados.",
  },
  {
    id: 24,
    title: "Procesos de Soldadura Especializada",
    category: "fabricacion",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soldador-lTVfezZIcMjFuZFt3tSGxE7DKKH4FE.png",
    description: "Soldadura especializada para estructuras críticas con certificaciones de calidad industrial.",
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

        <Tabs defaultValue="todos" className="w-full">
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
