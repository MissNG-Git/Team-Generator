const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "Schoolio";
  const e = new Intern("Boo", 1, "jedi@master.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Boo", 1, "jedi@master.com", "Schoolio");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Schoolio";
  const e = new Intern("Boo", 1, "jedi@master.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});