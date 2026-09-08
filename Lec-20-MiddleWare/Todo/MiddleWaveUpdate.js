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
module.exports = {updateTodoMiddleWare};