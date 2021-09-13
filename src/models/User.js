const { Schema, model } = require("mongoose");
const bycript = require('bcryptjs');

const UserSchema = new Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    password:{
        type:String, 
        required:true
    },
},{
    timestamps:true
})

UserSchema.methods.encrypPassword = async password => {
    const salt = await bycript.genSalt(10);
    return await bycript.hash(password, salt);
}

UserSchema.methods.matchPassword = function(password) {
    return await  bycript.compare(password, this.password);
}

module.export = model('User', UserSchema)