const User=require("../models/schema");
const Likest=require("../models/likes");


exports.post=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const user=new User({
            title,body,
        });
        //console.log(likes, dislike);
        const SavePost=await  user.save();


        res.json ({
            post:SavePost,
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Post is not Created"
        });

    }
}
exports.getpost=async(req,res)=>{
    try{
        const posts=await User.find().populate("likes").populate("comment").exec();
        res.json({
            posts,
        });

    }
    catch(error){
        console.log(error);
        res.status(501).json({
            success:false,
            message:"post is not updated"
        })
    }
};
exports.deletelike=async(req,res)=>{
    try {
        const { id } = req.params;
        console.log(id);

        await Likest.findByIdAndDelete({_id : id});
        console.log(Likest);

        res.json({
            success: true,
            message: 'Deleted Successfully'
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Not Deleted"
        });
    }
}