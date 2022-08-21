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
      else  (response.member === "Engineer") askEngineerQuestions();
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
  inquirer.prompt(managerQuestions);
}

const engineerQuestions = [
  {
    type: "input",
    name: "Engineer name",
    message: "What is the Engineer Name",
  },
  {
    type: "input",
    name: "Engineer ID",
    message: "What is the Engineer's ID number",
  },
  {
    type: "input",
    name: "Engineer Email",
    message: "What is the Engineer's Email Address",
  },
  {
    type: "input",
    name: "Engineer Github",
    message: "What is your Github username",
  },
  {
    type: "input",
    name: "Engineer Office number",
    message: "What is the managers Office Number",
  },
];
function askEngineerQuestions() {
  inquirer.prompt(engineerQuestions);
}
const internQuestions = [
  { type: "input", name: "Intern name", message: "What is the Intern Name" },
  {
    type: "input",
    name: "Intern ID",
    message: "What is the Intern's ID number",
  },
  {
    type: "input",
    name: "Intern Email",
    message: "What is the Intern's Email Address",
  },
  {
    type: "input",
    name: "Intern's School",
    message: "What school are you attending",
  },
];
function askInternQuestions() {
  inquirer.prompt(internQuestions);
}
