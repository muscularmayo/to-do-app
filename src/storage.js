import Task from './tasks.js'


class Storage {
  constructor(projectName, description) {
    this.projectName = new Project (description)
  }
}

class Project extends Storage{
  constructor(description) {
    this.tasks = []
    this.description = description || '';
  }

  deleteTask() {

  }

  addTask(title, details, priority, date) {
    this.tasks.push(createTask(title, details, priority, date))
  }

  editTask() {

  }

  createTask(title,details, priority, date) {
    let task = new Task (title, details, priority, date)
    return task;
  }


}


class Task extends Project {
  constructor(title, details, priority, date) {
    this.title = title;
    this.details = details || '';
    this.priority = priority;
    this.date = date;
  }

  editTask(title, details, priority, date) {
    this.title = title || this.title;
    this.details = details || this.details;
    this.priority = priority || this.priority;
    this.date = date || this.date
  }






}


const defaultStorage = new Storage('default Project')
console.log(defaultStorage);

const Storage = function(projectName) {
  return {projectName}
}