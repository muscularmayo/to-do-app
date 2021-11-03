import {container} from './app.js'

const logic = function() {
  const createProjectsHeader = function() {
    //upper left: "Projects"
    /*<div id="projectsHeader">
        <h3>Projects</h3>
      </div>
    */
    const projects = document.createElement('div')
    projects.id = 'projectsHeader'
    projects.setAttribute('class', 'upperLeft')

    const h3 = document.createElement('h3')
    h3.innerHTML = 'Projects'
    projects.appendChild(h3)

    return projects;
  }

  const createProjectTitle = function() {
    //upper right: this will be set based on the current project we're looking at
    //when we click on the project name on bottom left, its innerHTML matches directly with the keys in our storage
  }

  const createProjectList = function() {
    //bottom left: a list of all our projects
    //all the keys on storage object represent our project list
    //all of the keys will be put in separate divs .project and appended to #projectList
  }

  const createTaskList = function() {
    //bottom right: a list of all the tasks associated with this specific project of ours
    //we will pull specificProject.tasks.forEach(title and date on a div .task and append to #taskList)
  }

  const createTask = function (title, description, date, prioritiy) {
    const task = {
      title,
      description,
      date,
      priority,
    }
  }

  return {createProjectsHeader, createProjectTitle, createProjectList, createTaskList, createTask}
}

export {logic}