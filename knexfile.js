const config = {
  client: 'postgresql',
  connection: process.env.PG_CONNECTION_STRING,
  migrations: {
    tableName: 'knex_migrations',
  },
}
module.exports = {
  development: config,
  production: config,
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
  },
}
