/** @type {import('next').NextConfig} */

const useStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig = {
  ...(useStaticExport ? { output: 'export', trailingSlash: true } : {}),
  images: useStaticExport
    ? { unoptimized: true }
    : { domains: [] },
  assetPrefix: useStaticExport ? './' : '',
  basePath: ''
}

module.exports = nextConfig
