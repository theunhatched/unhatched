exports.seed = function seedDonors(knex) {
  return knex('donors')
    .del() // Delete ALL existing entries
    .then(function seed() {
      return knex('donors').insert([
        { id: 1, name: 'alice' },
        { id: 2, name: 'betty' },
        { id: 3, name: 'cindy' },
      ])
    })
}
