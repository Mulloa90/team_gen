import Engineer from "../lib/Engineer.js";
import Intern from "../lib/Intern.js";
import Manager from "../lib/Manager.js";

function generateHtml(team) {
    const teamHtml = [];
  for (let i = 0; i < team.length; i++) {
    if (team[i] instanceof Manager) {
    teamHtml.push();managerHtml(team[i]);
    } else if (team[i] instanceof Engineer) {
    teamHtml.push();engineerHtml(team[i]);
    } else if (team[i] instanceof Intern) {
    teamHtml.push();internHtml(team[i]);
    }
  }
}
export { generateHtml };

function managerHtml(manager) {
  return `
    <div class="employee-card">
        <div class="card-hdr">
            <h2 class="title">${manager.getName()}</h2>
            <h3 class="title">${manager.getRole()}</h3>
        </div>
        <div class="card body">
            <ul>
                <li class="list-item">ID: ${manager.getId()}</li>
                <li class="list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
                <li class="list-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
}
function engineerHtml(engineer) {
  return `
      <div class="employee-card">
          <div class="card-hdr">
              <h2 class="title">${engineer.getName()}</h2>
              <h3 class="title">${engineer.getRole()}</h3>
          </div>
          <div class="card body">
              <ul>
                  <li class="list-item">ID: ${engineer.getId()}</li>
                  <li class="list-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
                  <li class="list-item">Github: ${engineer.getGithub()}</li>
              </ul>
          </div>
      </div>`;
}
function internHtml(intern) {
  return `
      <div class="employee-card">
          <div class="card-hdr">
              <h2 class="title">${intern.getName()}</h2>
              <h3 class="title">${intern.getRole()}</h3>
          </div>
          <div class="card body">
              <ul>
                  <li class="list-item">ID: ${intern.getId()}</li>
                  <li class="list-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
                  <li class="list-item">School Name: ${intern.getSchool()}</li>
              </ul>
          </div>
      </div>`;
}
