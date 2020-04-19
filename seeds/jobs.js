exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('job_table')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('job_table').insert([
        {
          id: 1,
          title: 'Customer Service',
          description: 'This is an awesome job!',
          region: 'Otago',
          town: 'Queenstown',
        },
        {
          id: 2,
          title: 'Sales Person',
          description: 'Great team environment!',
          region: 'Otago',
          town: 'Queenstown',
        },
      ]);
    });
};
