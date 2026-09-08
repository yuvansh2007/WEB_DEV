const bcrypt = require("bcrypt");

const hashPass = async (pass) => {
  const hashedPassword = await bcrypt.hash(pass, 10);
  return hashedPassword;
};

const comparePass = async (pass, hashedPass) => {
  const isValid = await bcrypt.compare(pass, hashedPass);
  return isValid;
};

module.exports = {
  hashPass,
  comparePass,
};
