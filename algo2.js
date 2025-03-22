const argon2 = require('argon2');
const pass2 = 'ajay@123';
console.log(pass2)
const usersalt = 10;
const Argofun = async()=>{
    const hash_value = await argon2.hash_value(pass2 , usersalt );
    console.log( " hash_value : "+ hash_value)
}
Argofun()