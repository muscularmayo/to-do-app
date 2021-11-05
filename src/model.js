//storage related stuff goes here
const Storage = function() {
  const saveProject = function() {

  }

  const saveTask = function() {

  }

  const

  const storage = {};

  storage.prototype.createProject = function(name) {
    storage[name] = {
      'tasks': [],
      'description': ''
    }

    Array.prototype.addTask = function(title, details, date, priority) {

    }
  }


  /*{
    'default project':
      {'tasks': [{'title': 'default title', 'priority': 'high', 'details': 'do the thing!', 'date': 'soon'}],
       'description': 'this is the default storage project baby'}
    'default project number dos':
    {'tasks': [{'title': 'default title', 'priority': 'high', 'details': 'do the thing!', 'date': 'soon'}],
    'description': 'this is the default storage project baby'}
  }*/
}

