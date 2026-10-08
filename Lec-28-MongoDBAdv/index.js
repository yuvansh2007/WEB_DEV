const express = require("express");
const { connectWithMongo } = require("./models/config");
const Router = require("./routes/user.routes");
const PostRouter = require("./routes/post_routes");
const CommentRouter = require("./routes/comment_routes");
const app = express();
app.use(express.json());

(async () => {
  await connectWithMongo();
})();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/user", Router);
app.use("/user/login", Router);
app.use("/post", PostRouter);
app.use("/post", PostRouter);
app.use("/comment", CommentRouter);
app.use("/comment", CommentRouter);

app.listen(3000, () => {
  console.log("app started on http://localhost:3000");
});
