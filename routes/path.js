const express=require("express");

const router=express.Router();

const {post,getpost,deletelike}=require("../controller/post");
const {likes}=require("../controller/like");
const {update}=require("../controller/update");
const {commentonp}=require("../controller/comment");
//const likes = require("../models/likes");
router.post("/post",post);
router.post("/like",likes);
router.post("/commentonp",commentonp);
router.get("/getpost",getpost);
router.delete("/deletelike/:id",deletelike);
router.put("/update/:id",update);

module.exports=router;