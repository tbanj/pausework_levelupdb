
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('manufactures').del()
    .then(function () {
      // Inserts seed entries
      return knex('manufactures').insert([
        {name: 'Contruction'},
        {name: 'IT/ Technology'},
        {name: 'FCMG'},
        {name: 'Banking & Finance Service'},
        {name: 'Automotive'},
        {name: 'Agriculture'},
        {name: 'Manufaturing'},
        {name: 'Education'},
        {name: 'Oil & Gas'},
        {name: 'Transportation'},
        {name: 'Real Estate'},
        {name: 'Hospitality'},
        {name: 'Telecommunications'}
      ]);
    });
};
