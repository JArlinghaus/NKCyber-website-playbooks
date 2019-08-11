module.exports = {
  apps : [{
    name: "nkcyber-backend",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      DB_IP: {{ DB_IP }}
    }
  }]
}
