
exports.up = function(knex) {
  return knex.schema.createTable('job_table', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('region')
    table.string('town')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('job_table')
};
