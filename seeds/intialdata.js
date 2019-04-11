
const industries = require('./source/industries');
const organizations = require('./source/organizations');
const employes = require('./source/employes');

const createOrganization = (knex, org, industry) => {
  return knex('industries').where('name', industry).first()
    .then(industryRecord => {
      delete org.industry;
      org['industry_id'] = industryRecord.id;
      return knex('organizations').pluck('id').insert(org);
    });
}

const createEmployes = (knex, employes) => knex('employes').insert(employes);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('industries').del()
    .then(function () {
      return knex('organizations').del();
    })
    .then(function () {
      return knex('employes').del();
    })
    .then(function () {
      return knex('industries').insert(industries);
    })
    .then(function () {
      let orgPromises = [];
      const orgs = organizations.gen(10);

      orgs
        .forEach(org => {
           const industry = org.industry;
           orgPromises.push(createOrganization(knex, org, industry));
        });

      return Promise.all(orgPromises);
    })
    .then(function(organizations) {
      const employeePromises = [];
      organizations
        .map(orgID => {
          return {
            employes: employes.gen(10, orgID)
          }
        })
        .forEach(orgEmployes => {
          employeePromises.push(createEmployes(knex, orgEmployes.employes));
        });

      return Promise.all(employeePromises);
    });
};

