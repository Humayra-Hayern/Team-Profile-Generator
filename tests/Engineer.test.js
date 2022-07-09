const Engineer = require("../lib/Engineer");

const engineer = new Engineer(
  "Humayra",
  "1",
  "humayra@humayra.com",
  "Humayra-Hayern"
);

describe("Engineer name", () => {
  it("returns the engineer's name", () => {
    expect(engineer.getName()).toEqual("Humayra");
  });
});

describe("Engineer ID", () => {
  it("returns the engineer's ID", () => {
    expect(engineer.getId()).toEqual("1");
  });
});

describe("Engineer email", () => {
  it("returns the engineer's email address", () => {
    expect(engineer.getEmail()).toEqual("humayra@humayra.com");
  });
});
describe("Engineer github", () => {
  it("returns the engineer's github name", () => {
    expect(engineer.getGithub()).toEqual("Humayra-Hayern");
  });
});

describe("engineer role", () => {
  it("returns the engineer's role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
