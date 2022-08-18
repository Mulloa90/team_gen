import inquirer from "inquirer";
function init() {
  inquirer
    .prompt({
      type: "list",
      name: "member",
      message: "What type of employee would you like to add",
      choices: ["Employee", "Engineer", "Intern", "Manager"],
    })
    .then((response) => {
      if (response.member === "Manager") askManagerQuestions();
    });
}
init();

const managerQuestions = [
  { type: "input", name: "manager name", message: "What is the Managers Name" },
  {
    type: "input",
    name: "manager ID",
    message: "What is the managers ID number",
  },
  {
    type: "input",
    name: "manager Email",
    message: "What is the managers Email Address",
  },
  {
    type: "input",
    name: "manager Office number",
    message: "What is the managers Office Number",
  },
];
function askManagerQuestions() {
inquirer.prompt(managerQuestions)

}

