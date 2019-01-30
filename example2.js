const sequelize = require('sequelize');
const table = new Sequelize('mck','Chirag_Ramachandraiah','sdf',{
    host: 'localhost',
    dialect: 'postgres',

    pool:{
        max: 5,
        min: 0,

    }
});