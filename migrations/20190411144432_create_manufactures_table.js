
exports.up = function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('manufactures');
    if (tableExists) {
        console.log('Here');
        return knex.schema.table('manufactures', function (table) {
            table.increments();
            table.string('name').notNullable('id');
        });
    } else {
        console.log('Table already exist');
        
    }
    } catch (error) {
        console.log(error);
        
    }
};

exports.down = function(knex, Promise) {
  
};
