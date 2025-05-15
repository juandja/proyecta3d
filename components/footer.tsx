import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/soldador-WFv6QiwvfO82McQDwThEcjwLBFvWcI.png"
          alt="Soldador trabajando"
          fill
          className="object-cover opacity-50"
          unoptimized
        />

        {/* Overlay oscuro principal - aumentado la opacidad */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Degradados blancos mejorados */}
        <div className="absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-white/40 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-white/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center md:items-start">
            <Link href="/" className="flex items-center justify-center md:items-start">
              <div className="relative h-40 w-[400px] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                <Image src="/logo.png" alt="Proyecta3D Logo" fill className="object-contain" priority />
              </div>
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-extrabold text-[#ff8c00] drop-shadow-xl">Enlaces</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-extrabold text-[#ff8c00] drop-shadow-xl">Servicios</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link
                  href="/servicios/impresion-3d-fibra-de-carbono"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Impresión 3D
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/ingenieria-y-diseno"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Ingeniería y Diseño
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/maestranza-mecanizado"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Maestranza y Mecanizado
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/fabricacion"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Fabricación
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/reparacion-arrendo-equipos-hidraulicos"
                  className="font-bold text-white transition-colors hover:text-[#ff8c00] drop-shadow-xl"
                >
                  Reparación y Arrendo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-extrabold text-[#ff8c00] drop-shadow-xl">Contacto</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#ff8c00]" />
                <span className="font-bold text-white drop-shadow-xl">Santiago, Chile</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#ff8c00]" />
                <span className="font-bold text-white drop-shadow-xl">+56 9 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#ff8c00]" />
                <span className="font-bold text-white drop-shadow-xl">contacto@proyecta3d.cl</span>
              </li>
              <li className="flex space-x-3 pt-2">
                <Link href="#" className="text-white transition-colors hover:text-[#ff8c00]">
                  <Facebook className="h-5 w-5 drop-shadow-xl" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white transition-colors hover:text-[#ff8c00]">
                  <Instagram className="h-5 w-5 drop-shadow-xl" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white transition-colors hover:text-[#ff8c00]">
                  <Linkedin className="h-5 w-5 drop-shadow-xl" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-sm font-bold text-white drop-shadow-xl">
            © {new Date().getFullYear()} Proyecta3D. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
