class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  renderEmailMailtoStart() {
    return `<a href="mailto:${this.email}">`;
  }
  getEmail() {
    return this.email;
  }
  renderEmailMailtoEnd() {
    return `</a>`;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
