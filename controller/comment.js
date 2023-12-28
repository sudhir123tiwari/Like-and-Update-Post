const User=require("../models/schema");
const Comment=require("../models/comments");


exports.commentonp=async(req,res) => {
    try {
        const {post,user,body}=req.body;

        const comment=new Comment({
            post,user,body
        });
        const savedComment=await comment.save();
        const updatePost = await User.findByIdAndUpdate( post,{$push : {comment:savedComment._id} },{new:true})
                        .populate("comment")
                        .exec();
        res.json ({
           // success:true,

            post:updatePost,
            //message:"Entry created succesfully"
        });
    }
    catch(error){
        return res.status(500).json({
            error:"error while creating",
        });
        
        }

    };
