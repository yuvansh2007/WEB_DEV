const { ValidateTask } = require("./Validate");

const MiddlewavePost = (req, res, next) => {
  const task = req.body.task;
  if (!ValidateTask(task)) {
        return res.json({
         message: "Invalid todo input",
        });
    }
    next();
};
const MiddleWareID = (req,res,next) =>{
    const id = req.params.id;
    if (!ValidateId(id)) {
      return res.json({
        message: "Invalid Id input",
      });
    }
    next();
}
module.exports = {MiddlewavePost,MiddleWareID};