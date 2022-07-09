const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getFourthInput() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  render() {
    return "Github Username:";
  }
}

module.exports = Engineer;
