module.exports = {
  apps : [{
    name: "nkcyber-frontend",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 80
    }
  }]
}
