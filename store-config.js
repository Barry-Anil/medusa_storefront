// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || 
  "https://medusabackend-production-c032.up.railway.app/"

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = 
  process.env.STORE_CORS || "http://localhost:3000" 

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
  
