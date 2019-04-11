const firms = require('./source/firms');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('firms').del()
    .then(function () {
      const data = firms.gen(10)
      // Inserts seed entries
      return knex('firms').insert(data);
    })
    .catch(console.log);
    
    
};
