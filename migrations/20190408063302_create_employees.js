
exports.up = async function(knex, Promise) {
    
    try {
        const tableExists = await knex.schema.hasTable('employes');
        if (!tableExists) {
                return knex.schema.createTable('employes', function (table) {
                    table.increments();
                    table.string('employee_id').notNullable();
                    table.string('first_name').notNullable();
                    table.string('middle_name').nullable();
                    table.string('last_name').notNullable();
                    table.enum('gender', ['male', 'female', 'binary','undefined', 'n/a']);
                    table.date('dob').nullable();
                    table.string('phone',15).notNullable();
                     table.string('email').nullable();
                     table.string('department', 250);
                    //  table.index('employee_id');
                     table.index('first_name');
                     table.index('last_name');

                    table.unique('email');
                    table.unique('employee_id');
                    
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

return knex.schema.dropTableIfExists('employes');
};
