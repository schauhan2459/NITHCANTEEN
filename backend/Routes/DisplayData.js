const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
        console.log(global.food_items)
        res.send([global.food_items,global.categoryCollectiony])
    }catch(error){
         console.error(error.message);
         res.send("Server Error")
    }
})

module.exports=router;