import './style.css';
import {initialization} from './initialization.js'

export const addTaskButton = document.querySelector('#addTask');
export const container = document.querySelector('#container');
export const projects = document.querySelectorAll('.project');
export const tasks = document.querySelectorAll('.task');
export const localStorage = window.localStorage;

export let storage = {};


initialization();

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

//needs to be organized lmao





































//addTaskButton.addEventListener('click', 'appendInputForm')



//taskInputForm











































