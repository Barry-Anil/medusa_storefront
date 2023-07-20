/** @type {import('next').NextConfig} */

const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-backend.s3.ap-south-1.amazonaws.com", "localhost", "instagram.fhyd12-1.fna.fbcdn.net"],
  },

})
