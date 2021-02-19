const Engineer = require("../lib/engineer");

test("Should set GitHub account w/constructor", () => {
  const testValue = "GitHub";
  const e = new Engineer("Boo", 1, "jedi@master.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Boo", 1, "jedi@master.com", "GitHub");
  expect(e.getRole()).toBe(testValue);
});

test("Should get GitHub username w/getGit()", () => {
  const testValue = "GitHub";
  const e = new Engineer("Boo", 1, "jedi@master.com", testValue);
  expect(e.getGit()).toBe(testValue);
});