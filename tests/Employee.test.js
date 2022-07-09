const Employee = require("../lib/Employee");

const employee = new Employee("Humayra", "1", "humayra@humayra.com");

describe("Employee's name", () => {
  it("returns the employee's name", () => {
    expect(employee.getName()).toEqual("Humayra");
  });
});

describe("Employee ID", () => {
  it("returns the employee's ID", () => {
    expect(employee.getId()).toEqual("1");
  });
});

describe("Employee email", () => {
  it("returns the employee's email address", () => {
    expect(employee.getEmail()).toEqual("humayra@humayra.com");
  });
});

describe("Employee role", () => {
  it("returns the employee's role", () => {
    expect(employee.getRole()).toEqual("Employee");
  });
});
