
exports.up = function(knex) {
  return knex.schema.createTable("talentos", table => {
    table.string("id").primary();
    table.string('time').notNullable();
    table.string("nome").notNullable();
    table.string("cidade").notNullable();
    table.string("telefone").notNullable();
    table.string("email").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("talentos")
  
};
