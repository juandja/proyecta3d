import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: 1,
    title: "Prototipo Industrial",
    category: "impresion-3d",
    image: "/placeholder.svg?height=400&width=600",
    description: "Desarrollo de prototipo para maquinaria industrial utilizando impresión 3D con fibra de carbono.",
  },
  {
    id: 2,
    title: "Componentes Automotrices",
    category: "impresion-3d",
    image: "/placeholder.svg?height=400&width=600",
    description: "Fabricación de piezas personalizadas para el sector automotriz con alta resistencia.",
  },
  {
    id: 3,
    title: "Sistema de Ventilación",
    category: "diseno",
    image: "/placeholder.svg?height=400&width=600",
    description: "Diseño e implementación de sistema de ventilación optimizado para entornos industriales.",
  },
  {
    id: 4,
    title: "Estructura Metálica",
    category: "ingenieria",
    image: "/placeholder.svg?height=400&width=600",
    description: "Cálculo y diseño de estructura metálica para soporte de equipos pesados.",
  },
  {
    id: 5,
    title: "Mecanizado de Precisión",
    category: "maestranza",
    image: "/placeholder.svg?height=400&width=600",
    description: "Fabricación de componentes de precisión para maquinaria especializada.",
  },
  {
    id: 6,
    title: "Moldes Industriales",
    category: "diseno",
    image: "/placeholder.svg?height=400&width=600",
    description: "Diseño y fabricación de moldes industriales para producción en serie.",
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
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold text-proyecta-dark">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </CardContent>
    </Card>
  )
}
