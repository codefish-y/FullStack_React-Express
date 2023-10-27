const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

//      get路由实现
router.get("/", (req, res) => {
  res.json("Hello World!");
});
//      post路由实现
router.post("/", async (req, res) => {
  const post = req.body;
  //sequelize的语法插入数据
  await Posts.create(post);
  res.json(post);
});

module.exports = router;