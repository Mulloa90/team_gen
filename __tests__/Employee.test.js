import Employee from "../lib/Employee";

test("Create new employee.", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});
test("testing name.", () => {
  const name = "Mario";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});
test("testing ID.", () => {
  const id = 2;
  const emp = new Employee("Mario", id);
  expect(emp.id).toBe(id);
});
test("testing email.", () => {
  const email = "mario90gm@icloud.com";
  const emp = new Employee("Mario", 2, email);
  expect(emp.email).toBe(email);
});

test("getName method.", () => {
  const testName = "Mario";
  const emp = new Employee(testName);
  expect(emp.getName()).toBe(testName);
});
test("getId method.", () => {
  const testId = 2;
  const emp = new Employee("Mario", testId);
  expect(emp.getId()).toBe(testId);
});
test("getEmail method.", () => {
  const testEmail = "mario90gm@icloud.com";
  const emp = new Employee("Mario", 2, testEmail);
  expect(emp.getEmail()).toBe(testEmail);
});
test("test role", () => {
  const returnValue = "Employee";
  const emp = new Employee("Mario", 2, "mario90gm@icloud.com");
  expect(emp.getRole()).toBe(returnValue);
});
