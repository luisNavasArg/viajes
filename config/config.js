const mongoose = require('mongoose');
// const uriClient = "mongodb://127.0.0.1:27017/admin"//mongo local
//Conectamos a el servicio
const uriNube = 
"mongodb+srv://sersenlinea:sersenlinea@cluster0.amioq.mongodb.net/test"
mongoose.connect(uriNube)
.then(db=>console.log('Conectamos la base de datos '))
.catch(err=>console.log(err));

module.exports=mongoose;



