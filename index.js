const express=require("express");
const app=express();

require("dotenv").config();

PORT=process.env.PORT ||6000;
app.use(express.json());

const user=require("./routes/path");
app.use("/api/v1",user);

const Dbconnect=require("./config/database");
Dbconnect();


app.listen(PORT,()=>{
    console.log(`app is running successfully at: ${PORT}`);
})