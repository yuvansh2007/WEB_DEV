const { ValidateTask, ValidateId, ValidateStatus } = require("./Validate");

const updateTodoMiddleWare = (req,res,next) =>{
    const task = req.body.task;
    const status = req.body.status;
    const id = req.params.id;
    if(!ValidateTask(task,false)){
        return res.json({
            message:"Invalid todo input",
        });
    }
    if(!ValidateStatus(status,false)){
        return res.json({
            message:"Invalid status input",
        });
    }
    if(!ValidateId(id,false)){
        return res.json({
            message:"Invalid Id input"
        });
    }
    next();
};

const MiddlewavePut = (req, res, next) => {
  const task = req.body.task;
  const status = req.body.status;
  const id = req.params.id;
  if (!ValidateTask(task)) {
    return res.json({
      message: "Invalid todo input",
    });
  }
  if (!ValidateStatus(status)) {
    return res.json({
      message: "Invalid status input",
    });
  }
  if (!ValidateId(id)) {
    return res.json({
      message: "Invalid Id input",
    });
  }
  next();
};

const MiddlewavePost = (req, res, next) => {
  const task = req.body.task;
  if (!ValidateTask(task)) {
    return res.json({
      message: "Invalid todo input",
    });
  }
  next();
};

const MiddleWareID = (req, res, next) => {
  const id = req.params.id;
  if (!ValidateId(id)) {
    return res.json({
      message: "Invalid Id input",
    });
  }
  next();
};

const LogRequestMiddleware = (req,res,next)=>{
    console.log(`[${req.method}] - ${req.url} : Query Params : ${JSON.stringify(req.query)} : Body : ${req.body != undefined && JSON.stringify(req.body)} `);
    next();
}

module.exports = {
  updateTodoMiddleWare,
  MiddlewavePut,
  MiddlewavePost,
  MiddleWareID,
  LogRequestMiddleware
};