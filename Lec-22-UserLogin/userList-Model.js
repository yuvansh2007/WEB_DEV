const { comparePass } = require("./helper");

class UserList {
  userMap = {};

  add(user) {
    const username = user.username;
    this.userMap[username] = user;
  }

  async get(username, password) {
    const user = this.userMap[username];
    const isValid = await comparePass(password, user.password);
    if (!isValid) {
      return {};
    }
    return user;
  }
}

module.exports = UserList;
