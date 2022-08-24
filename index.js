import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import { generateHtml } from "./src/team.js";
import fs from "fs";
import path from "path";

//const inquirer = require('inquirer');
//const Manager = require('./lib/Manager');
//onst Engineer = require('./lib/Engineer');
//const Intern = require('./lib/Intern');
//const generateHtml = require('./src/team')
//const fs = require("fs");
var teamArray = [];

function init() {
  inquirer
    .prompt({
      type: "list",
      name: "member",
      message: "What type of employee would you like to add",
      choices: ["Engineer", "Intern", "Manager"],
    })
    .then((response) => {
      if (response.member === "Manager") askManagerQuestions();
      else if (response.member === "Engineer") askEngineerQuestions();
      else if (response.member === "Intern") askInternQuestions();
    })
  
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
  inquirer.prompt(managerQuestions).then((response) => {
    teamArray.push(
      new Manager(
        response["manager name"],
        response["manager ID"],
        response["manager Email"],
        response["manager Office number"]
      )
    );
    askTeamQuestion();
  });
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
];
function askEngineerQuestions() {
  inquirer.prompt(engineerQuestions).then((response) => {
    teamArray.push(
      new Engineer(
        response["Engineer name"],
        response["Engineer ID"],
        response["Engineer Email"],
        response["Engineer Github"]
      )
    );
    askTeamQuestion();
  });
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
  inquirer.prompt(internQuestions).then((response) => {
    teamArray.push(
      new Intern(
        response["Intern name"],
        response["Intern ID"],
        response["Intern Email"],
        response["Intern's School"]
      )
    );
    askTeamQuestion();
  });
}
function askTeamQuestion() {
  inquirer
    .prompt({
      type: "confirm",
      name: "Team questions",
      message: "Would you like to add another employee?",
    })
    .then((response) => {
      if (response["Team questions"]) init();
      else createHtml(teamArray);
    });
}
//function writeToFile(fileName, data) {
  //return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//}

function writeToFile() {
  return fs.writeFileSync(path.join(process.cwd()));
}



function createHtml(team) {
  console.log("Creating Team...")
writeToFile("index.html",generateHtml(team));

}
