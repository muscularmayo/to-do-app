//front end DOM Manipulation shall go here
import {container} from './app.js'
import {logic} from './logic.js'
const log = logic();



const view = function() {

  const appendProjectsHeader = function() {
    //upper left: "Projects"
    const projects = log.createProjectsHeader();
    container.appendChild(projects)


  }
  const appendProjectTitle = function() {
    //upper right: title of project,

  }
  const appendProjectList = function() {
    //bottom left: a list of all our projects, aka list of all the keys on our Window.localStorage


  }
  const appendTaskList = function() {
    //bottom right: a list of all the tasks associated with this specific project of ours
  }
  const appendTodaysTasks = function() {

  }

  return {appendProjectsHeader, appendProjectTitle, appendProjectList, appendTaskList, appendTodaysTasks}

}

export {view}