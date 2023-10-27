const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

//      get路由实现
router.get("/", async (req, res) => {
//  从Post数据表中查询数据
  const listAllPost = await Posts.findAll();
  res.json(listAllPost);
});
//      post路由实现
router.post("/", async (req, res) => {
  const post = req.body;
  //sequelize的语法插入数据
  await Posts.create(post);
  res.json(post);
});

module.exports = router;