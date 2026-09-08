const { ValidateTask, ValidateId, ValidateStatus } = require("./Validate");

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
module.exports = {
  MiddlewavePut,
};
