// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
        host : "pontoon.cwtgj6dm8djy.ap-southeast-2.rds.amazonaws.com",
        user : 'pontoon',
        password : '8Kf8CWDvU8Gwf9z',
        database : 'pontoon'
    }
    // useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
        host : "pontoon.cwtgj6dm8djy.ap-southeast-2.rds.amazonaws.com",
        user : 'pontoon',
        password : '8Kf8CWDvU8Gwf9z',
        database : 'pontoon'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host : "pontoon.cwtgj6dm8djy.ap-southeast-2.rds.amazonaws.com",
      user : 'pontoon',
      password : '8Kf8CWDvU8Gwf9z',
      database : 'pontoon'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
