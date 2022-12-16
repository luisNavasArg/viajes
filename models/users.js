import mongoose from 'mongoose';
const users = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    last:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    img:{
        type:String,
        trim:true
    }
});

export default mongoose.models.users || mongoose.model('users',users);
