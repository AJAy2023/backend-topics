 const bcrypt = require('bcrypt');

// task1   that i need to hash this password frist 
// const hashcode = async()=>{
//  const password = 'ajay@123';
//  const hash = await bcrypt.hash(password , 10)
//  console.log(password);
//  console.log(hash);
// }
// hashcode()
// const pass = 'vijay@1243'
// const salt = 10;
// const userdata = async()=>{
//     try
//     {
//         const hash =  await bcrypt.hash(pass, salt);
//         console.log("original pass : " + pass);
//         console.log ("hashvalue : " + hash)
//     }catch(error)
//     {
//         console.error("hashing code error"+ error.message );
//     }
// }
// userdata()

// next task 3 
// i need to write the function that checks the passwords form the user input and make it as  hash string 


const password = ''; // User's input password
const saltRounds = 10; // Salt rounds for hashing

const hashFunc = async () => {
    try {
        const hashString = await bcrypt.hash(password, saltRounds);
        console.log(hashString);
    } catch (error) {
        console.error('Hashing error: ' + error.message);
    }
};

hashFunc();






