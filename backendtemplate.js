module.exports = {
  apps : [{
    name: "nkcyber-backend",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      PORT: {{ PORT }},
      LDAPS: {{ LDAPS }},
      LDAP_CERT_PATH: "{{ RELEASE_PATH }}/server/DC.pem",
      DB_IP: "{{ DB_IP }}",
      LDAP_BIND_IP: "{{LDAP_BIND_IP}}",
      LDAP_BIND_DN: "{{LDAP_BIND_DN}}",
      LDAP_BIND_PASSWORD: "{{LDAP_BIND_PASSWORD}}",
      LDAP_BIND_SEARCH_BASE: "{{LDAP_BIND_SEARCH_BASE}}",
      SECRET: "{{SECRET}}"
    }
  }]
}
