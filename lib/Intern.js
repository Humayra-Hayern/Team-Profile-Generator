const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  getRoleImg() {
    return `<img src="./dist/images/intern.png"/>`;
  }

  render() {
    return `School: ${this.getSchool()}`;
  }
}

module.exports = Intern;
