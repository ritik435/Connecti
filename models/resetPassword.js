const mongoose = require('mongoose');
const crypto=require('crypto');


const passwordSchema = new mongoose.Schema({
    
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    token:{
        type:String,
        required:true,
        unique:true
    },
    isValid :{
        type:Boolean,
        default:true,
        required:true
    }
},{
    timestamps: true
});

const Password = mongoose.model('Password', passwordSchema);
module.exports = Password;