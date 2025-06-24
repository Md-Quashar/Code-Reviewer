const aiService=require("../services/ai.services")


module.exports.getReview=async (req,res)=>{
    const code=req.body.code
    if(!code){
        return res.status(400).send("Prompt is required")
    }
    try{

        const response= await aiService(code)
        res.status(200).send(response)
    }
    catch(err){
        console.error("Error in getReview:", err);
        return res.status(500).send("server Error")
    }
}
