const Manager = require("../lib/manager");

test("Can set office number via constructor argument", () => {
  const testValue = 50;
  const e = new Manager("Boo", 1, "jedi@master.com", testValue);
  expect(e.officeNum).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Boo", 1, "jedi@master.com", 50);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNum()", () => {
  const testValue = 50;
  const e = new Manager("Boo", 1, "jedi@master.com", testValue);
  expect(e.getOfficeNum()).toBe(testValue);
});