
exports.up = function(knex) {
  return knex.schema.createTable("vagas", table => {
      table.string("id").primary();
      table.string('time').notNullable();
      table.string("empresa").notNullable();
      table.string("uf").notNullable();
      table.string("cidade").notNullable();
      table.string("vaga").notNullable();
      table.string("resumo").notNullable();
      table.string("link").notNullable();
      table.string("contato").notNullable();
      table.string("descricao").notNullable();

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("vagas")
};
