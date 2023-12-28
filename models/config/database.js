const mongoose=require("mongoose");
require("dotenv").config();
const Dbconnect=() =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( () => console.log("Db is connected"))
    .catch((error) =>{
        console.log(error);
        console.log("Essue in Db connection");
        process.exit(1);
    })
}

module.exports=Dbconnect;