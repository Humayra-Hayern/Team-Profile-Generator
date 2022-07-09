const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getFourthInput() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  render() {
    return "Office Number:";
  }
}

module.exports = Manager;
