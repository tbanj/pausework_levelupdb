
exports.up = async function(knex, Promise) {
    
    try {
        const tableExists = await knex.schema.hasTable('pausework_users');
        if (!tableExists) {
                return knex.schema.createTable('pausework_users', function (table) {
                    table.increments();
                    table.string('first_name').notNullable();
                    table.string('last_name').notNullable();
                     table.string('email').notNullable();
                     table.string('password').notNullable();
                     table.timestamps();
                    
                     table.index('first_name');
                     table.index('last_name');

                    table.unique('email');
                   
                    // for postgress you can only add new field to the
                    // bottom of the createTable code but for
                    // mysql you can specified where you want to add new column field



                    
                });
        } else {
            console.log('Table already exist');
            
        }
    } catch (error) {
        console.log(error);
        
    }
   
  
};

exports.down = function(knex, Promise) {

return knex.schema.dropTableIfExists('pausework_users');
};
