const Intern = require("../lib/Intern");

const intern = new Intern("Humayra", "1", "humayra@humayra.com", "Birmingham");

describe("Intern name", () => {
  it("returns the intern's name", () => {
    expect(intern.getName()).toEqual("Humayra");
  });
});

describe("intern ID", () => {
  it("returns the intern's ID", () => {
    expect(intern.getId()).toEqual("1");
  });
});

describe("Intern email", () => {
  it("returns the intern's email address", () => {
    expect(intern.getEmail()).toEqual("humayra@humayra.com");
  });
});
describe("Intern github", () => {
  it("returns the intern's school", () => {
    expect(intern.getSchool()).toEqual("Birmingham");
  });
});

describe("Intern role", () => {
  it("returns the intern's role", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});
