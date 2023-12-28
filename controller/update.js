const User=require("../models/schema");

exports.update=async(req,res) =>{
    try {

        const {id} =req.params;
        console.log(id);
        const {title,body}=req.body;

       const todo=await User.findByIdAndUpdate(
        {_id:id},
        {title,body}
        )
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Updated Successfully',
            })
        }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        });

    }

    
}