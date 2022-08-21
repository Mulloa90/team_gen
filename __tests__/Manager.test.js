import Manager from "../lib/Manager";


test("test office number.", () => {
    const testOfficeNumber = "2";
    const emp = new Manager("Mario", 2, "mario90gm@icloud.com", testOfficeNumber);
    expect(emp.officeNumber).toBe(testOfficeNumber)
});
test("test get office number.", () => {
    const testOfficeNumber = "2";
    const emp = new Manager("Mario", 2, "mario90gm@icloud.com", testOfficeNumber);
    expect(emp.getOfficeNumber()).toBe(testOfficeNumber)
});

test("test role", () => {
    const returnValue = "Employee";
    const emp = new Engineer("Mario", 2, "mario90gm@icloud.com", "Mulloa90");
    expect(emp.getRole()).toBe(returnValue)
});