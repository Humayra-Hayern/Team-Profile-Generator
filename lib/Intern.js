const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getFourthInput() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  render() {
    return "School:";
  }
}

module.exports = Intern;
