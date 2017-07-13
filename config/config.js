module.exports = {
  mysql: {
    dev: {
      host: '127.0.0.1'
    },
    prod: {
      db: 'prod',
      host: '192.168.0.10'
    }
  },
  jwt: {
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
      session: false
    }
  }
}
