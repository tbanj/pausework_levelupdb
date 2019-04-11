
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('employes');
    if (tableExists) {
        console.log('Here');
        return knex.schema.table('employes', function (table) {
            table.integer('firm_id').after('id');
        });
    } else {
        console.log('Employes table does not exist');
        process.exit(1);
    }
    } catch (error) {
        console.log(error);
        
    }
    
};

exports.down = async function(knex, Promise) {
    // to rollback a particular column which was just added
    const tableExists = await knex.schema.hasTable('employes');
   try {
    if (tableExists) {
        
        return knex.schema.table('employes', function (table) {
            table.dropColumn('firm_id');
        });
        
    } else {
        console.log('Employes table does not exist');
        process.exit(1);
    }
   } catch (error) {
       console.log(error);
       
   }
};
