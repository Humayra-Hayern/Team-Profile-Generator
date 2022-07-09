const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }

  render() {
    return `Github Username: <a href="https://www.github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a>`;
  }
}

module.exports = Engineer;
