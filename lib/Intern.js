import Employee from "./Employee.js";

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email)
      this.role = "Intern";
      this.school = school;
    }
    getSchool(){
        return this.school;
    }
  }
  
  
export default Intern;