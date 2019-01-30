const Sequelize = require('sequelize');
const user = require('./example.js');
// const sequel = new Sequelize('mck','Chirag_Ramachandraiah','sdf',{
//     host: 'localhost',
//     dialect: 'postgres',

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
//     operatorsAliases: false
// });

// const user = sequel.define('user',{
//     username: Sequelize.STRING,
//     birthday: Sequelize.DATE
// });

// sequel.query('SELECT * FROM users', { type: Sequelize.QueryTypes.SELECT})
//   .then(users => {
//     console.log(users);
//   });

user.findAll({
    where: {
      username: 'janedoe',
      birthday: '1980-07-19T18:30:00.000Z'
    }
  }).then((instances)=>{
      instances.forEach((element)=>{
          console.log(element.toJSON());
      });
  });

describe('DB ',()=>{
    it('should return correct number of records having janedoe as username',(done)=>{
        user.count({
            where: { username: 'janedoe',birthday: '1980-07-19T18:30:00.000Z' }
          }).then((number)=>{
              expect(number).toEqual(4);
              expect(number).not.toEqual(3);
              done();
          });    
    });
    it('should have table with correct name',()=>{
        expect(user.getTableName()).toEqual('users');
    });
});