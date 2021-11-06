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

const addTaskButton = document.querySelector('#addTask');
const container = document.querySelector('#container');
const projects = document.querySelectorAll('.project');
const tasks = document.querySelectorAll('.task');

//addTaskButton.addEventListener('click', 'appendInputForm')





const createTaskFromInput = function() {
  const task = {}
  task.title = document.querySelector('#title')
  task.description = document.querySelector('#description')
  task.date = document.querySelector('#date')
  task.priority = document.querySelector('#priority')

  return task;
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
  const mediumOption = document.createElement('option')
  mediumOption.setAttribute('value', 'medium')
  const lowOption = document.createElement('option')
  lowOption.setAttribute('value','low')

  prioritySelect.appendChild(highOption)
  prioritySelect.appendChild(mediumOption)
  prioritySelect.appendChild(lowOption)

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
  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('value', 'Submit')
  div.appendChild(submit)

  main.appendChild(div);
  //submit.setAttribute('onsubmit', 'createTaskFromInput')


  return main;
}

console.log(createInputForm())


/*<div id='taskForm'>
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






export {container}