 const bcrypt = require('bcrypt');

// task1   that i need to hash this password frist 
const hashcode = async()=>{
 const password = 'ajay@123';
 const hash = await bcrypt.hash(password , 10)
 console.log(password);
 console.log(hash);
}
hashcode()