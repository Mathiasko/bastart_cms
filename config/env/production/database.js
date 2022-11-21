const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
  connection: {
    client: 'postgress',
    connection: {
      host: config.host,
      port: config.port,
      datebase: config.database,
      use: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false 
  }
})