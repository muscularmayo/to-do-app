//all logic relating to storage goes here
import {createProjectObject, createTask} from './logic.js'
import {storage} from './app.js'
import {initialization} from './initialization.js'

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
  storage['default project'].tasks.push(createTask('default task', 'and a description', 'add a date', 'a priority', 'default project'))
  storage['default project'].tasks.push(createTask('new features', 'editing and deleting tasks', 'coming soon', 'high', 'default project'))

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

export const deleteProject = function(projectName) {
  const project = storage[projectName]

  storage["today's tasks"].tasks.forEach((element, index, object) => {
    if(element.project === projectName) {
      object.splice(index,1)
    }
  })
  saveTaskToTodaysTasks();

  localStorage.removeItem(projectName)
  delete storage[projectName];


}

export const saveTaskToTodaysTasks = function() {
  const todaysTasks = storage["today's tasks"];
  localStorage.removeItem(todaysTasks)
  localStorage.setItem("today's tasks", JSON.stringify(todaysTasks))
}

export const editProjectName = function(currentName, newName) {
  const currentProject = storage[currentName];
  storage[newName] = currentProject
  localStorage.removeItem(currentName);
  localStorage.setItem(newName, JSON.stringify(currentProject))
  delete storage[currentName]

}

export const clearStorage = function() {
  localStorage.clear();
  window.location.reload();
}