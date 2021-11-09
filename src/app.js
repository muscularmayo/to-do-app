import './style.css';


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

const storage = {};
storage['default project'] = {
  'tasks': [],
  'description': ''
};




console.log(storage)


const addTaskButton = document.querySelector('#addTask');
const container = document.querySelector('#container');
const projects = document.querySelectorAll('.project');
const tasks = document.querySelectorAll('.task');

//addTaskButton.addEventListener('click', 'appendInputForm')



const addProjectToStorage = function () {

}

//taskInputForm
const removeInputForm = function() {
  if(document.querySelector('#taskList').lastElementChild.id === 'taskForm') {
    document.querySelector('#taskList').lastElementChild.remove()
    return true;
  };
  return false;

}

const handleAddProject = function() {

}



const handleProjectClick = function() {
  const currentProject = document.querySelector
  const title = this.innerHTML;
  setProjectTitle(title)
  //renderTaskList()
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

console.log(createAddProjectInput())

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



const renderTaskList = function(title) {
  //remove the current task list and bring in all the associated tasks from the storage compartment of our shit
}

const createTaskFromInput = function() {
  const task = {}
  task.title = document.querySelector('#title') || 'default task'
  task.description = document.querySelector('#description') || ''
  task.date = document.querySelector('#date')
  task.priority = document.querySelector('#priority')

  return task;
}

const storeTaskFromInput = function() {

}

const handleInputSubmit = function () {
  //create task from input, save it to storage, render page from storage (using storage/state to append things)
  //remove input form, return addTask button
}

const createAddTaskButton = function() {
  //<button id='addTask' onClick='appendInputForm'>Add Task</button>
  const button = document.createElement('button');
  button.setAttribute('id', 'addTask')
  button.addEventListener('click', handleAddTaskButton)

  button.innerHTML = 'Add Task'

  return button;
}

const removeAddTaskButton = function() {
  if (document.querySelector('#addTask')) {
    const taskList = document.querySelector('#taskList')
    const addButton = document.querySelector('#addTask')
    taskList.removeChild(addButton)
  }

}

const appendAddTaskButton = function() {
  document.querySelector('#taskList').appendChild(createAddTaskButton())
}

const handleCancelAddTaskButton = function() {
  console.log(this)
  removeInputForm();
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

const handleAddTaskButton = function() {
  if(!document.querySelector('#taskForm')) {
    removeAddTaskButton();
    appendInputForm();
  }

}

const handleAddTaskSubmitButton = function () {
  createTaskFromInput();

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