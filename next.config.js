/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './', // rutas relativas para CSS/JS/images
  basePath: '', // deja vacío para que Next no agregue /AlejandroSanchezJimenez
  trailingSlash: true, // importante para rutas de páginas
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
