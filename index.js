const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { type } = require('os');

const mySchema = new mongoose.conect({
    name:{
        type:String,
        require:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        require:true
    },
    password:{
        type:String,
        lowercase:true,
        trim:true,
        require:true
    }
});

mySchema.pre('save', async function(next)
{
    if(!this.ismodified("password")) return next();
    const hash  =   await bcrypt.hash(this.password,10);
    next()
})

// i need to write the  function which is comapre the bcrpt pass and existing pass in the data base
// why we use this here because  this referece to the myschema  db which means this.mychema  (here this shema )
mySchema.methods.ispasscorrect = async (pass ) =>
{
   return  await bcrypt.compare(pass, this.password);
}
 
const user = user.model("user" , mySchema);
module.exports = user;
 

 