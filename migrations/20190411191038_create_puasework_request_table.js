
exports.up = async function(knex, Promise) {
    
    try {
        const tableExists = await knex.schema.hasTable('pausework_request');
        if (!tableExists) {
                return knex.schema.createTable('pausework_request', function (table) {
                    table.increments();
                    table.enum('request_type', ['sick', 'materninity', 'family time','stress', 'n/a']);
                    table.date('startDate').notNullable();
                    table.date('endDate').notNullable();
                    table.enum('status', ['pending', 'accepted', 'rejected']);
                    table.timestamps();
                    
                    //  table.index('employee_id');
                    
                    
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

return knex.schema.dropTableIfExists('pausework_request');
};
