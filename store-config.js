// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || 
  "http://localhost:7000,http://localhost:7001, http://localhost:9000, https://medusabackend-production-c032.up.railway.app"

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = 
  process.env.STORE_CORS || "https://medusa-storefront-teal.vercel.app/" 

  function withStoreConfig(nextConfig = {}) {
    const features = nextConfig.features || {}
    delete nextConfig.features
  
    nextConfig.env = nextConfig.env || {}
  
    Object.entries(features).forEach(([key, value]) => {
      if (value) {
        nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = true
      }
    })
  
    return nextConfig
  }
  
  module.exports = { withStoreConfig }
  
