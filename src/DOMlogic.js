//all dom related things goes in here
import {defaultStorage, saveProjectToStorage, saveTaskToStorage} from './storage.js'
import {createProjectElement, createProjectElementFromInput, createAddProjectButton, createAddTaskButton, createTaskElement, createInputForm, createAddProjectInput, createTodaysTasksElement} from './logic.js'
import {storage} from './app.js'

export const renderProjectList = function() {

  Object.keys(storage).forEach(function(key){
    if(key !== "today's tasks") {
      appendProjectElement(key)
    }
  })
  appendAddProjectButton();
  appendTodaysTasksElement();

  //document.querySelector('#projectList')
}

export const appendTodaysTasksElement = function() {
  document.querySelector('#projectList').appendChild(createTodaysTasksElement());
}

export const appendProjectElement = function(projectName) {
  const projectList = document.querySelector('#projectList');
  projectList.appendChild(createProjectElementFromInput(projectName))
}

export const appendAddTaskButton = function() {
  document.querySelector('#taskList').appendChild(createAddTaskButton())
}

export const appendTaskElement = function(taskTitle){
  const taskElement = createTaskElement(taskTitle);
  document.querySelector('#taskList').appendChild(taskElement)
}

export const appendAddProjectInput = function() {
  const addButton = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  projectList.removeChild(addButton)
  projectList.appendChild(createAddProjectInput())
  document.querySelector('#addProjectInput').focus();
}

export const appendAddProjectButton = function() {
  const addProjectButton = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  if(!addProjectButton) {
    projectList.appendChild(createAddProjectButton())
  }
}

export const clearTaskList = function() {
  const parent = document.querySelector('#taskList')
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

export const renderTaskList = function(projectName) {
  //remove the current task list and bring in all the associated tasks from the storage compartment of our shit
  //projectName is going to be a string that is a key in my storage
  clearTaskList();
  console.log(storage)
  storage[projectName].tasks.forEach(element => {
    appendTaskElement(element.title)
  })
  appendAddTaskButton()

  /*for (let i = 0; i < storage.tasks.length; i++) {
    appendTaskElement(storage.tasks[i].title)
  }

  */
}

export const setProjectTitle = function(title) {
  const h3 = document.createElement('h3')
  h3.innerHTML = title;
  const projectTitle = document.querySelector('#projectTitle')
  const projectName = projectTitle.firstElementChild;

  console.log(h3);
  if(projectName) {
    projectTitle.removeChild(projectName);

  }
  projectTitle.appendChild(h3);
}

export const removeTaskInputForm = function() {
  if(document.querySelector('#taskList').lastElementChild.id === 'taskForm') {
    document.querySelector('#taskList').lastElementChild.remove()
    return true;
  };
  return false;

}

export const removeAddTaskButton = function() {
  if (document.querySelector('#addTask')) {
    const taskList = document.querySelector('#taskList')
    const addButton = document.querySelector('#addTask')
    taskList.removeChild(addButton)
  }

}



export const appendInputForm = function() {
  //remove addTask button and then append Input form, after input form is submitted we will...
  //create a task from that input form, remove the input form, append the task, slap the button back on
  document.querySelector('#taskList').appendChild(createInputForm())


}
