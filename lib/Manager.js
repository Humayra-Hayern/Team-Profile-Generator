const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getRoleImg() {
    return `<img src="./dist/images/manager.png"/>`;
  }
  render() {
    return `Office Number: ${this.getOfficeNumber()}`;
  }
}

module.exports = Manager;
