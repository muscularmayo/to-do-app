import './style.css';

const addTaskButton = document.querySelector('#addTask');
const container = document.querySelector('#container');
const projects = document.querySelectorAll('.project');
const tasks = document.querySelectorAll('.task');
const localStorage = window.localStorage;
/* storage structure will look like:

{project1: {tasks: [{title , date , details , priority}, {title , date , details , priority}]
            description: 'a short description of our project here'                          },
 project2: {tasks: [{array of objects, each object describing a single task}]
            description: 'a short description of our project here'                          }
}


const storage = {}
storage['default project'] =
{'tasks' : [{'title': 'placeholder', 'date': '03/03/03', 'details': 'some deets here', 'priority': 'high'}],
'description': 'a brief description of the project at hand'};
*/
const handleAddTaskButton = function() {
  if(!document.querySelector('#taskForm')) {
    removeAddTaskButton();
    appendInputForm();
  }

}

const createAddTaskButton = function() {
  //<button id='addTask' onClick='appendInputForm'>Add Task</button>
  const button = document.createElement('button');
  button.setAttribute('id', 'addTask')
  button.addEventListener('click', handleAddTaskButton)

  button.innerHTML = 'Add Task'

  return button;
}

const appendAddTaskButton = function() {
  document.querySelector('#taskList').appendChild(createAddTaskButton())
}

const createTaskElement = function (taskTitle) {
  const div = document.createElement('div');
  div.setAttribute('class','tasks')
  div.innerHTML = taskTitle;

  return div;
}

const appendTaskElement = function(taskTitle){
  const taskElement = createTaskElement(taskTitle);
  document.querySelector('#taskList').appendChild(taskElement)
}

const clearTaskList = function() {
  const parent = document.querySelector('#taskList')
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const renderTaskList = function(projectName) {
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

const setProjectTitle = function(title) {
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

const handleProjectClick = function() {
  const currentProject = document.querySelector
  const title = this.innerHTML;
  setProjectTitle(title)
  renderTaskList(title)
  //renderTaskList()
}

const createProjectElementFromInput = function(projectName) {
  const projectElement = document.createElement('div');
  projectElement.innerHTML = projectName;
  projectElement.setAttribute('class','project')
  projectElement.addEventListener('click',handleProjectClick)

  return projectElement;
}

const appendProjectElement = function(projectName) {
  const projectList = document.querySelector('#projectList');
  projectList.appendChild(createProjectElementFromInput(projectName))
}

const handleAddProjectSubmitButton = function() {
  const projectName = document.querySelector('#addProjectInput').value
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

const createProjectObject = function() {
  return {
    'tasks': [],
    'description':''
  }
}

const saveProjectToStorage = function(projectName) {
  storage[projectName] = createProjectObject();
  localStorage.setItem(projectName, JSON.stringify(createProjectObject()));

}

const createTaskFromInput = function() {
  const task = {}
  task.title = document.querySelector('#title').value  ||'default task'
  task.description = document.querySelector('#description').value || ''
  task.date = document.querySelector('#date').value || ''
  task.priority = document.querySelector('#priority').value || ''

  return task;
}

const createTask = function(title, description, date, priority) {
  const task = {}
  task.title = title
  task.description = description
  task.date = date
  task.priority = priority

  return task;
}

const renderProjectList = function() {

  Object.keys(storage).forEach(function(key){
    appendProjectElement(key)
  })

  document.querySelector('#projectList')
}

let storage = {};


const defaultStorage = function () {
  storage['default project'] = {
    'tasks': [],
    'description': ''
  };

  storage['default project'].tasks.push(createTask('default task', '', '', 'Low'))
  localStorage.setItem('default project', JSON.stringify(storage['default project']))
}

if (localStorage.length === 0) {
  defaultStorage();
  renderProjectList();
  const title = Object.keys(storage)[0]
  setProjectTitle(title)
  renderTaskList(title)
} else {
  Object.keys(localStorage).forEach(function(key){
    storage[key] = JSON.parse(localStorage.getItem(key))
  })
  renderProjectList();
  const title = Object.keys(storage)[0]
  setProjectTitle(title)
  renderTaskList(title)

  // for (const key of localStorage) {
  //   storage[key] = JSON.parse(localStorage[key]);

  // }
}








console.log(storage)




//addTaskButton.addEventListener('click', 'appendInputForm')



//taskInputForm
const removeTaskInputForm = function() {
  if(document.querySelector('#taskList').lastElementChild.id === 'taskForm') {
    document.querySelector('#taskList').lastElementChild.remove()
    return true;
  };
  return false;

}

const handleAddProject = function() {
  //take what's in #addProjectInput
  //put it in a div with class "projects"
  //save it to storage
  //remove the input form
  //append the div to #projectsList

}





const handleCancelAddProjectButton = function() {
  const projectInputForm = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  projectList.removeChild(projectInputForm)
  projectList.appendChild(createAddProjectButton())
}

const createAddProjectInput = function() {
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
  return main;


}

const appendAddProjectInput = function() {
  const addButton = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  projectList.removeChild(addButton)
  projectList.appendChild(createAddProjectInput())
}

const createAddProjectButton = function () {
  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('id', 'addProject')
  addProjectButton.innerHTML = 'Add Project'
  addProjectButton.addEventListener('click', appendAddProjectInput)
  return addProjectButton;
}


const appendAddProjectButton = function() {
  const addProjectButton = document.querySelector('#addProject')
  const projectList = document.querySelector('#projectList')
  if(!addProjectButton) {
    projectList.appendChild(createAddProjectButton())
  }
}
appendAddProjectButton();






const storeTaskFromInput = function() {

}





const removeAddTaskButton = function() {
  if (document.querySelector('#addTask')) {
    const taskList = document.querySelector('#taskList')
    const addButton = document.querySelector('#addTask')
    taskList.removeChild(addButton)
  }

}



const handleCancelAddTaskButton = function() {
  console.log(this)
  removeTaskInputForm();
  appendAddTaskButton();
}

const createInputForm = function() {
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


  return main;
}

const appendInputForm = function() {
    //remove addTask button and then append Input form, after input form is submitted we will...
    //create a task from that input form, remove the input form, append the task, slap the button back on
    document.querySelector('#taskList').appendChild(createInputForm())


}








const saveTaskToStorage = function(projectName) {
  const project = storage[projectName]
  localStorage.removeItem(projectName)
  localStorage.setItem(projectName, JSON.stringify(project))
}

const handleAddTaskSubmitButton = function () {
  //create task from input, save it to storage, render page from storage (using storage/state to append things)
  //remove input form, return addTask button
  const task = createTaskFromInput();
  const projectName = document.querySelector('#projectTitle').firstElementChild.innerHTML
  console.log(task)
  const currentProject = storage[projectName]; //{tasks: [], description: ''}
  currentProject.tasks.push(task)
  const taskElement = createTaskElement(task.title)
  saveTaskToStorage(projectName)
  removeTaskInputForm();
  appendTaskElement(task.title)
  appendAddTaskButton();
}
console.log(createTaskElement('111111'))

const handleProjectInputSubmit = function () {

}


//console.log(createInputForm())

//<div id="taskList">
  //<tasks all over the place>
/*  <div id='taskForm'>
          <label for='title'>Task Name</label>
          <input type='text' id='title'>

          <input type='date' id='date'>

          <label for='priority'>Priority</label>
          <select id='priority' name='priority'>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>

          <label for='description'>Task Description</label>

          <input type='text' id='description'>
          <div>
            <input type='submit' value='Submit' onsubmit='createTaskfromInput()'>
          </div>
        </div>
*/

console.log(createInputForm())

projects.forEach(project => {
  project.addEventListener('click', handleProjectClick)
})

addTaskButton.addEventListener('click', handleAddTaskButton)




export {container as container}