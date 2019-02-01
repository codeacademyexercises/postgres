const program = require('../../models/');
const sequelize = require('Sequelize');

describe('Testing if user.js ',()=>{
    it('insertion function works',async () => {
        await program.User.insert('manish','S B','mani@gmail.com','bangalore');
        const allUsers = await program.User.retreiveAnyMatch('manish','S B');
        // console.log(allUsers);
        expect(allUsers.length).toEqual(1);
    });
});