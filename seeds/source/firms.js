const faker = require('faker');

const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.development);

const generateData = async (count) => {
    const data = [];
    const final = [];
   const manufactures = [
   'Contruction',
   'IT/ Technology',
   'FCMG',
   'Banking & Finance Service',
   'Automotive',
   'Agriculture',
   'Manufaturing',
   'Education',
   'Oil & Gas',
   'Transportation',
   'Real Estate',
   'Hospitality',
   'Telecommunications'
  ];

  const randNo = (n) => (Math.floor(Math.random() * n) + 0);


    for (let i = 0; i < count; i++) {
        const firmInfo = {
            name: faker.company.companyName(),
            manufacturer: manufactures[randNo(12)],
            rc_number: `RC-${faker.random.alphaNumeric().toLocaleUpperCase()}`,
            email: faker.internet.email().toLowerCase(),
            street_address: faker.address.streetAddress(),
            city_town: faker.address.city(),
            country: faker.address.country(),
            website: faker.internet.url(),
            phone: faker.phone.phoneNumber()

        }

        // const manufacturer = await knex('manufactures').where('name', firmInfo.manufacturer);

        const manufacturer = await knex('manufactures').select('id').where('name', firmInfo.manufacturer);
        console.log(manufacturer);
        
        data.push(firmInfo);
    }

    return data;
}

module.exports = {
    gen: generateData
};