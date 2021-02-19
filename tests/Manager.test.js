const Manager = require("../lib/manager");

test("Should set office number w/constructor argument", () => {
  const testValue = 50;
  const e = new Manager("Boo", 1, "jedi@master.com", testValue);
  expect(e.number).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Boo", 1, "jedi@master.com", 50);
  expect(e.getRole()).toBe(testValue);
});

test("Should get office number w/getNum()", () => {
  const testValue = 50;
  const e = new Manager("Boo", 1, "jedi@master.com", testValue);
  expect(e.getNum()).toBe(testValue);
});