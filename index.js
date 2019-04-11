const config = require('./knexfile');
const knex = require('knex')(config.development);

// knex.on('connected', () =>{
//     console.log('Connected to DB');
    
// })
// knex.on('error',)

// query 
(async () =>{
    try {
        // this is a query to display database info with table name
        // const version = await knex.raw('SELECT VERSION()')
        // console.log(version);

// const employee = {
//         employee_id: 'LU-001',
//         first_name: 'Patrick',
//         last_name: 'Foh',
//         gender: 'male',
//         department: 'Software Engineering',
//         email: 'patrickfoh@gmail.com',
//         dob: '2019-05-11',
//         phone: '+2347031017543'
// }

const employee = {
    employee_id: 'LU-002',
    first_name: 'Owonikoko',
    last_name: 'Ajenifuja',
    middle_name: 'O',
    gender: 'male',
    department: 'Software Engineering',
    email: 'orbarcade@gmail.com',
    dob: '2019-05-10',
    phone: '+2348074551280'
}
        
    const result = await knex('employes').insert(employee);
    console.log(result);
    
    } catch (error) {
        console.log(error);
        // below is use to exit the scripts when it run into errors
        // so that it can terminate the programme
        process.exit(1);
        
    }
}
)();

// query DB version by populating infor about the database created
// knex.raw('SELECT VERSION()')
// .then( version => {
//     console.log('DB version', version);
    
// }, error=> {console.log(error);
// } );

