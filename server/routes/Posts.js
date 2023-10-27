const express = require('express')
const router = express.Router()

//      路由实现
router.get('/',(req,res)=>{
    res.send("Hello World!")
});

router.post('/')

module.exports = router