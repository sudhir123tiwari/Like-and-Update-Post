const User=require("../models/schema");
const Like=require("../models/likes");
exports.likes=async(req,res)=>{
    try{
        const{post,user}=req.body;
        const like=new Like({
            post,user
        });

        const savedLike=await like.save();
       // const {likes,dislike}=req.body;
       const updateLike = await User.findByIdAndUpdate( post,{$push : {likes:savedLike._id} },{new:true})
                        .populate("likes")
                        .exec();

        //console.log(likes, dislike);

        res.json ({
            post:updateLike,
            //message:"Entry deleted succesfully"
        });

    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            error,
        });

    }
}