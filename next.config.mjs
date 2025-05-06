/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['v0.blob.com'], // Permitir imágenes desde v0.blob.com
      unoptimized: true, // Opcional: desactiva la optimización de imágenes para URLs externas
    },
  };
  
  export default nextConfig;
  