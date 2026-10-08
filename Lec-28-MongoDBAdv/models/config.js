const mongoose = require("mongoose");

const connectWithMongo = async () => {
  await mongoose.connect(
    "mongodb://jainyuvansh2007_db_user:1ZPHyO9Yh8EIuPtE@ac-dzxirra-shard-00-00.g2ta0tm.mongodb.net:27017,ac-dzxirra-shard-00-01.g2ta0tm.mongodb.net:27017,ac-dzxirra-shard-00-02.g2ta0tm.mongodb.net:27017/blog_post?ssl=true&replicaSet=atlas-7mftco-shard-0&authSource=admin&appName=Cluster0",
  );
};

module.exports = { connectWithMongo };
