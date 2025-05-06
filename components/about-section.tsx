import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-proyecta-dark md:text-4xl">
              Sobre <span className="text-primary">Proyecta3D</span>
            </h2>
            <p className="mb-6 text-gray-600">
              Somos una empresa especializada en servicios de ingeniería mecánica, impresión 3D y diseño personalizado.
              Nuestro equipo de profesionales altamente calificados está comprometido con la excelencia y la innovación
              para ofrecer soluciones que superen las expectativas de nuestros clientes.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="text-gray-600">Más de 5 años de experiencia en el sector</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="text-gray-600">Tecnología de vanguardia en impresión 3D</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="text-gray-600">Equipo de ingenieros altamente calificados</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <p className="text-gray-600">Soluciones personalizadas para cada cliente</p>
              </div>
            </div>

            <p className="text-gray-600">
              En Proyecta3D, combinamos conocimiento técnico, creatividad y pasión por la ingeniería para desarrollar
              proyectos que marcan la diferencia. Nuestro compromiso es ofrecer servicios de alta calidad que
              contribuyan al éxito de nuestros clientes.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20IMP-vkiMNF0JKc4Exian7iDk7yoIkORfPR.png"
                alt="Impresora 3D Proyecta3D"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
