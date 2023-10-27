module.exports = (sequelize, DataTypes) => {
  //使用sequelize驱动数据库如果Post表不存在则创建Posts表
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Posts;
};
