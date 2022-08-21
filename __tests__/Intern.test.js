import Intern from "../lib/Intern";

test("Create School", () => {
  const testSchool = "School Name";
  const emp = new Intern("Mario", 2, "mario90gm@icloud.com", testSchool);
  expect(emp.school).toBe(testSchool);
});

test("get School", () => {
  const testSchool = "School Name";
  const emp = new Intern("Mario", 2, "mario90gm@icloud.com", testSchool);
  expect(emp.getSchool()).toBe(testSchool);
});

test("test role", () => {
  const returnValue = "Intern";
  const emp = new Intern("Mario", 2, "mario90gm@icloud.com", "School Name");
  expect(emp.getRole()).toBe(returnValue);
});
