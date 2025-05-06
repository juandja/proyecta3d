import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-[#ff8c00]">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Página no encontrada</h2>
      <p className="mb-8 max-w-md text-gray-600">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/" className="rounded-md bg-[#ff8c00] px-6 py-3 text-white transition-colors hover:bg-[#e67e00]">
        Volver al inicio
      </Link>
    </div>
  )
}
