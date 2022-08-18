/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "stashhappstorage.blob.core.windows.net"]
  },
  experimental: { images: { allowFutureImage: true } }
}