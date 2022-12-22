const mongoose = require('mongoose');
const hoteles = new mongoose.Schema({
    nombre:{
        type:String,
        trim:true
    },
    email:{
        type:Number,
        trim:true
    },
    ubicacion:{
        type:String,
        trim:true
    },
    info:{
        type:String,
        trim:true
    },
    servicios:{
        type:Array,
        trim:true

    },
    title:{
        type:String,
        trim:true
    },
    src:{
        type:String,
        trim:true
    }
});

module.exports =mongoose.models.hoteles || mongoose.model('hoteles',hoteles);