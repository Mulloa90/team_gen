import Engineer from "../lib/Engineer";

test("github", () => {
  const testGithub = "mulloa90";
  const emp = new Engineer("Mario", 2, "mario90gm@icloud.com", testGithub);
  expect(emp.github).toBe(testGithub);
});
test("test github", () => {
  const testGithub = "Mulloa90";
  const emp = new Engineer("Mario", 2, "mario90gm@icloud.com", testGithub);
  expect(emp.getGithub()).toBe(testGithub);
});

test("test role", () => {
  const returnValue = "Employee";
  const emp = new Engineer("Mario", 2, "mario90gm@icloud.com", "Mulloa90");
  expect(emp.getRole()).toBe(returnValue);
});
