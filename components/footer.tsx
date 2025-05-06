import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-proyecta-dark text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-start">
              <Image src="/logo.png" alt="Proyecta3D Logo" width={180} height={50} className="h-auto w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-300">
              Soluciones de ingeniería mecánica, impresión 3D y diseño personalizado para tus proyectos.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#ff8c00]">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#ff8c00]">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Impresión 3D
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Diseño a Medida
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Ingeniería y Diseño
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Maestranza y Mecanizado
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  Memoria de Cálculo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#ff8c00]">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#ff8c00]" />
                <span className="text-gray-300">Santiago, Chile</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#ff8c00]" />
                <span className="text-gray-300">+56 9 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#ff8c00]" />
                <span className="text-gray-300">contacto@proyecta3d.cl</span>
              </li>
              <li className="flex space-x-3 pt-2">
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-300 transition-colors hover:text-[#ff8c00]">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Proyecta3D. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
