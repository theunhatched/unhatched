exports.up = function up(knex) {
  return knex.schema.createTable('donors', (table) => {
    table.increments('id')
    table.string('name', 255).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function down(knex) {
  return knex.schema.dropTable('donors')
}
