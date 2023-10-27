const express = require('express');
const app = express();
const cors = require('cors');
//解析json数据
app.use(express.json());
//add cors support
app.use(cors());

// 导入数据库支持驱动sequelize
const db = require('./models')
//Post路由
const postRouter = require('./routes/Posts')
//Post路由入口 http://localhost/posts
app.use("/posts",postRouter)
db.sequelize.sync().then(()=>{
    
    //服务器监听端口3001
    app.listen(3001,()=>{
        console.log("server is live in 3001")
    })

})