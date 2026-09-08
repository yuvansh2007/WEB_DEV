/**
 * User Details
 *
 * username
 * password
 *
 * username,password
 *
 */

class User {
  username = "";
  password = "";
  roles = [];

  constructor(username, password, roles = ["user"]) {
    this.username = username;
    this.password = password;
    this.roles = roles;
  }

  updateRoles(role) {
    this.roles.push(role);
  }
}

module.exports = User;
