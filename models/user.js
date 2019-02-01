'use strict';
module.exports = (sequelize, DataTypes) => {
	const Op = sequelize.Op;
	const User = sequelize.define('User', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		city: DataTypes.STRING
	}, {});
	// User.associate = function(models) {
	//   // associations can be defined here
	// };

	User.insert = (fName,lName,email,city)=>{
		return User.create({firstName: fName,lastName: lName, email: email,city: city}); //We have to add return statement else compiler knows this will return undefined so 
	};//it will substitute undefined and continue execution. Hence it will execute asynchronously without return statment. With return statement compiler
	// has to wait for the promise to be returned which ensure synchronous execution.

	User.retreiveAnyMatch = (fName,lName,email,city)=>{
		return User.findAll({ where: {[Op.or]: [{ firstName: fName}, {lastName: lName}, {email },{city }] }});
	};

	User.displayAll = ()=>{
		return User.findAll();
	};

	User.updateEmailAndCity = (fName,lName,email,city)=>{
		return User.update({email: email, city: city},
			{
				returning: true,
				where: {
					firstName: fName,
					lastName: lName
				}
			});
	};

	User.deleteAll = ()=>{
		return User.truncate();
	};
	return User;
};