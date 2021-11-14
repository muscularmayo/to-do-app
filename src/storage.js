//all logic relating to storage goes here
import {createProjectObject, createTask} from './logic.js'
import {storage} from './app.js'

const localStorage = window.localStorage;

export const defaultStorage = function () {
  storage['default project'] = {
    'tasks': [],
    'description': ''
  };
  storage["today's tasks"] = {
    'tasks': [],
    'description': ''
  };
  localStorage.setItem("today's tasks", JSON.stringify(storage["today's tasks"]))
  storage['default project'].tasks.push(createTask('default task', '', '', 'Low'))
  localStorage.setItem('default project', JSON.stringify(storage['default project']))
}

export const saveProjectToStorage = function(projectName) {
  storage[projectName] = createProjectObject();
  localStorage.setItem(projectName, JSON.stringify(createProjectObject()));

}

export const saveTaskToStorage = function(projectName) {
  const project = storage[projectName]
  localStorage.removeItem(projectName)
  localStorage.setItem(projectName, JSON.stringify(project))
}