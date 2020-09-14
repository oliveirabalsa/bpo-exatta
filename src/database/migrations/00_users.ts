exports.up = async function(knex) {
    await knex.schema.createTable('user', table => {
      table.increments('id').primary();
      table.string('name').notNull();
      table.string('email').notNull();
      table.string('password').notNull();
    });
  };
  
  exports.down = knex => knex.schema.dropTableIfExists('user');
  