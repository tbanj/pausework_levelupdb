const employes = require('./source/employes');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employes').del()
    .then(function () {
      const data = employes.gen(200)
      // Inserts seed entries
      return knex('employes').insert(data);
    })
    .catch(console.log);
    
    
};
