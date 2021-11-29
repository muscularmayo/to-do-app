//logic for how we handle different events shall go in here
import {appendAddProjectInput, removeProject, setProjectTitle, renderTaskList, removeAddTaskButton, removeTaskInputForm, appendInputForm, appendTaskElement, appendProjectElement, appendAddTaskButton} from './DOMlogic.js'
import { saveTaskToTodaysTasks, defaultStorage, saveProjectToStorage, saveTaskToStorage, deleteProject, editProjectName} from './storage.js'
import {storage} from './app.js'
import EditIcon from '../edit.png'
import DeleteIcon from '../delete.png'

export const createAddTaskButton = function() {
  //<button id='addTask' onClick='appendInputForm'>Add Task</button>
  const button = document.createElement('button');
  button.setAttribute('id', 'addTask')
  button.addEventListener('click', handleAddTaskButton)

  button.innerHTML = 'Add Task'

  return button;
}

export const createProjectElementFromInput = function(projectName) {
  const projectElement = document.createElement('div');
  projectElement.innerHTML = projectName;
  projectElement.setAttribute('class','project')
  projectElement.addEventListener('click',handleProjectClick)



  // const buttons = document.createElement('span')

  // const edit = new Image();
  // edit.src = EditIcon;
  // edit.classList.add('edit')
  // edit.classList.add('icon')
  // edit.addEventListener('click', handleEditProjectClick)

  // buttons.appendChild(edit);

  // const deleteIcon = new Image();
  // deleteIcon.src = DeleteIcon;
  // deleteIcon.classList.add('delete')
  // deleteIcon.classList.add('icon')
  // deleteIcon.addEventListener('click',handleDeleteProjectClick)

  // buttons.appendChild(deleteIcon);

  projectElement.appendChild(createProjectElementButtons());




  return projectElement;
}

export const createProjectElementButtons = function() {
  const buttons = document.createElement('span')

  const edit = new Image();
  edit.src = EditIcon;
  edit.classList.add('edit')
  edit.classList.add('icon')
  edit.addEventListener('click', handleEditProjectClick)

  buttons.appendChild(edit);

  const deleteIcon = new Image();
  deleteIcon.src = DeleteIcon;
  deleteIcon.classList.add('delete')
  deleteIcon.classList.add('icon')
  deleteIcon.addEventListener('click',handleDeleteProjectClick)

  buttons.appendChild(deleteIcon);

  return buttons;
}

export const createProjectObject = function() {
  return {
    'tasks': [],
    'description':''
  }
}

export const createTaskFromInput = function() {
  const task = {}
  task.title = document.querySelector('#title').value  ||'default task'
  task.description = document.querySelector('#description').value || ''
  task.date = document.querySelector('#date').value || ''
  task.priority = document.querySelector('#priority').value || ''
  task.project = document.querySelector('#projectTitle').firstChild.innerText
  return task;
}

export const createTask = function(title, description, date, priority) {
  const task = {}
  task.title = title
  task.description = description
  task.date = date
  task.priority = priority

  return task;
}

export const createAddProjectInput = function() {
  const main = document.createElement('div')
  main.setAttribute('id', 'addProject')

  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id','addProjectInput')

  const div = document.createElement('div')


  const add = document.createElement('button')
  const cancel = document.createElement('button')
  add.innerHTML = 'Add'
  cancel.innerHTML = 'Cancel'
  cancel.addEventListener('click', handleCancelAddProjectButton)
  add.addEventListener('click', handleAddProjectSubmitButton)
  div.appendChild(add)
  div.appendChild(cancel)
  main.appendChild(input);
  main.appendChild(div);

  input.setAttribute('autofocus','true')

  input.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddProjectSubmitButton();
    }
  });

  return main;


}

export const createAddProjectButton = function () {
  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('id', 'addProject')
  addProjectButton.innerHTML = 'Add Project'
  addProjectButton.addEventListener('click', appendAddProjectInput)
  return addProjectButton;
}

export const createInputForm = function() {
  const main = document.createElement('div')
  main.id = 'taskForm'

  const titleLabel = document.createElement('label')
  titleLabel.setAttribute('for','title')
  titleLabel.innerHTML = 'Task Name'

  const titleInput = document.createElement('input')
  titleInput.setAttribute('type','text')
  titleInput.setAttribute('id','title')

  main.appendChild(titleLabel);
  main.appendChild(titleInput);

  const dateInput = document.createElement('input')
  dateInput.setAttribute('type','date')
  dateInput.setAttribute('id','date')
  main.appendChild(dateInput);

  const priorityLabel = document.createElement('label')
  priorityLabel.setAttribute('for','priority')
  priorityLabel.innerHTML = 'Priority'
  const prioritySelect = document.createElement('select')
  prioritySelect.setAttribute('id','priority')
  prioritySelect.setAttribute('name', 'priority')

  const highOption = document.createElement('option');
  highOption.setAttribute('value','high')
  highOption.innerHTML = 'High'

  const mediumOption = document.createElement('option')
  mediumOption.setAttribute('value', 'medium')
  mediumOption.innerHTML = 'Medium'

  const lowOption = document.createElement('option')
  lowOption.setAttribute('value','low')
  lowOption.innerHTML = 'Low';

  prioritySelect.appendChild(highOption)
  prioritySelect.appendChild(mediumOption)
  prioritySelect.appendChild(lowOption)
  main.appendChild(priorityLabel)
  main.appendChild(prioritySelect)

  const descriptionLabel = document.createElement('label')
  descriptionLabel.setAttribute('for','description')
  descriptionLabel.innerHTML = 'Task Description'
  const descriptionInput = document.createElement('input')
  descriptionInput.setAttribute('type','text')
  descriptionInput.setAttribute('id', 'description')

  main.appendChild(descriptionLabel)
  main.appendChild(descriptionInput)

  const div = document.createElement('div');

  const submit = document.createElement('button')
  const cancel = document.createElement('button')
  submit.innerHTML = 'Submit'
  cancel.innerHTML = 'Cancel'
  cancel.addEventListener('click', handleCancelAddTaskButton)
  submit.addEventListener('click', handleAddTaskSubmitButton)
  div.appendChild(submit)
  div.appendChild(cancel)

  main.appendChild(div);
  //submit.setAttribute('onsubmit', 'createTaskFromInput')


  descriptionInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddTaskSubmitButton();
    }
  });

  titleInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddTaskSubmitButton();
    }
  });

  dateInput.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      handleAddTaskSubmitButton();
    }
  });



  return main;
}

export const createTaskElement = function (taskTitle) {
  const div = document.createElement('div');
  div.setAttribute('class','tasks')
  div.innerHTML = taskTitle;
  div.addEventListener('click', function(event) {
    console.log(this)
  })
  const otherInfo = document.createElement('div')
  const spanDescription = document.createElement('span')
  const spanDate = document.createElement('span')
  const spanPriority = document.createElement('span')



  return div;
}

export const createTodaysTasksElement = function() {
  const div = document.createElement('div');
  div.setAttribute('id', 'todaysTasks')

  const todaysTask = document.createElement('div')
  todaysTask.setAttribute('class', 'project')
  todaysTask.innerHTML = "today's tasks"

  div.appendChild(todaysTask);
  todaysTask.addEventListener('click',handleProjectClick)

  return div;
}

export const handleCancelAddProjectButton = function() {
  const projectInputForm = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  projectList.removeChild(projectInputForm)
  projectList.appendChild(createAddProjectButton())
}

export const handleCancelAddTaskButton = function() {
  console.log(this)
  removeTaskInputForm();
  appendAddTaskButton();
}

const todaysDate = function() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

return today;
}

export const handleAddTaskSubmitButton = function () {
  //create task from input, save it to storage, render page from storage (using storage/state to append things)
  //remove input form, return addTask button
  const task = createTaskFromInput();
  const projectName = document.querySelector('#projectTitle').firstElementChild.innerHTML
  console.log(task)

  if(task.date === todaysDate()) {
    storage["today's tasks"].tasks.push(task)
    saveTaskToTodaysTasks()

  }

  const currentProject = storage[projectName]; //{tasks: [], description: ''}
  currentProject.tasks.push(task)
  const taskElement = createTaskElement(task.title)

  saveTaskToStorage(projectName)
  removeTaskInputForm();
  appendTaskElement(task.title)
  appendAddTaskButton();
}

export const handleAddTaskButton = function() {
  if(!document.querySelector('#taskForm')) {
    removeAddTaskButton();
    appendInputForm();
  }
  document.querySelector('#title').focus();

}

export const handleAddProjectSubmitButton = function() {
  const projectName = document.querySelector('#addProjectInput').value
  if (projectName === '') {
    alert('please name your project!')
    return;
  }
  const projectList = document.querySelector('#projectList');
  const projectInputForm = document.querySelector('#addProject')
  if(!storage[projectName]) {

  projectList.removeChild(projectInputForm)
  appendProjectElement(projectName);
  saveProjectToStorage(projectName)
  projectList.appendChild(createAddProjectButton())
  } else {
    alert('projects must be a different name!')
  }
}





export const handleProjectClick = function() {
  console.log(this)
  if(this.firstElementChild && this.firstElementChild.tagName === 'INPUT') {

    return;
  }
  const title = this.innerText;
  console.log(title);
  setProjectTitle(title)
  renderTaskList(title)
  //renderTaskList()
}

export const handleDeleteProjectClick = function (event) {
  const projectElement = this.parentNode.parentNode;
  console.log(projectElement)
  deleteProject(projectElement.innerText)
  removeProject(projectElement)
  event.stopPropagation();
}


export const handleEditProjectSubmit = function(currentName, newName) {
  editProjectName(currentName, newName)




}

export const handleEditProjectClick = function(event) {
  let projectElement = this.parentNode.parentNode;
  const projectName = projectElement.innerText;
  console.log(projectElement, projectName)
  setProjectTitle(projectName);
  renderTaskList(projectName)
  const inputForm = document.createElement('input');
  inputForm.setAttribute('autofocus','true')
  inputForm.setAttribute('type','text')
  inputForm.setAttribute('id','editProjectInput')

  projectElement.innerText = ''
  inputForm.value = projectName;

  inputForm.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode ===13) {
      const newName = inputForm.value
      handleEditProjectSubmit(projectName, newName);
      projectElement.innerText = newName
      projectElement.appendChild(createProjectElementButtons())
      setProjectTitle(newName);
      renderTaskList(newName)
    }
  });

  projectElement.appendChild(inputForm);
  document.querySelector('#editProjectInput').focus();









  event.stopPropagation();

}


