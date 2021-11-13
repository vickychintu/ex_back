const express = require("express");
const router = express.Router();
const UserSchema = require("../../model/User");

//@route /api/timestamp
//@desc test route
//@acess public

router.get("/",async (req, res) => {
  //res.send("get value route");
  console.log(req.body)
  try{
    const times=await UserSchema.find({date:req.body.user.date,month:req.body.user.month});
    if(!times){
      return res.status(400).json({msg:"there is no data available"});
    }
    res.json(times);
  }
  catch(err){
    console.log(err.message);
    res.status(500).send("error server");
  }
});

module.exports = router;
