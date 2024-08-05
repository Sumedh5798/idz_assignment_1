const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    birthDate:{
        type:String,
        required:true,
    },

    emailId:{
        type:String,
        required:true,
        unique:true,
    }
})

const User=mongoose.model('user',UserSchema);

module.exports=User;