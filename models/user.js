'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  // User.associate = function(models) {
  //   // associations can be defined here
  // };

  User.generate = (fName,lName,email)=>{
    User.create({firstName: fName,lastName: lName, email});
  };

  User.retreive = (fName,lName,email)=>{
    User.findAll({ where: { firstName: fName, lastName: lName, email: email } }).then(projects => {
    projects.forEach((element)=>{
      console.log(element);
    })
    });
  };
  return User;
};