const Intern = require("../lib/intern");

test("Should set school w/constructor", () => {
  const testValue = "Schoolio";
  const e = new Intern("Boo", 1, "jedi@master.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Boo", 1, "jedi@master.com", "Schoolio");
  expect(e.getRole()).toBe(testValue);
});

test("Should get school w/getSchool()", () => {
  const testValue = "Schoolio";
  const e = new Intern("Boo", 1, "jedi@master.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});