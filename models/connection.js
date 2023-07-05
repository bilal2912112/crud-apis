require ('dotenv').config();
const { builtinModules } = require('module');
const mongoose = require('mongoose');
const db_url = "mongodb+srv://bilaliqbal2912112:abcd123@db.wb9hmq3.mongodb.net/";

const connect = function(){
    console.log(db_url);
   mongoose.connect(db_url).then((val)=>{
    console.log('Database has connected');
   }).catch((err)=>{
    console.log("Error on connecting database");
   })
}

module.exports=connect;