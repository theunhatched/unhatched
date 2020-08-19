exports.up = function up(knex) {
  return knex.schema.createTable('bepis', (table) => {
    table.increments('id')
    table.string('name', 255).notNullable()
    table.string('description', 255).notNullable()
  })
}

exports.down = function down(knex) {
  return knex.schema.dropTable('bepis')
}
