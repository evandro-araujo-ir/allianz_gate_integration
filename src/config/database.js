const connection = require('knex')({
    client : 'mssql',
    connection: {
      server : 'srvap-siport01',
      user : 'ingresso.rapido',
      password : 'kiss@Azp2022',
      options: {
          port: 1433,
          database : 'SIPORTNTACC',
          trustServerCertificate: true,
          encrypt: false
      }
    }
  });


  module.exports = connection;