import { defaultStorage } from './storage.js'
import {renderProjectList, setProjectTitle, renderTaskList} from './DOMlogic.js'
import {storage} from './app.js'


export const initialization = function() {
  if (window.localStorage.length === 0) {
    defaultStorage();
    renderProjectList();
    const title = Object.keys(storage)[0]
    setProjectTitle(title)
    renderTaskList(title)
  } else {
    Object.keys(window.localStorage).forEach(function(key){
      storage[key] = JSON.parse(window.localStorage.getItem(key))
    })
    renderProjectList();
    const title = Object.keys(storage)[0]
    setProjectTitle(title)
    renderTaskList(title)

    // for (const key of localStorage) {
    //   storage[key] = JSON.parse(localStorage[key]);

    // }
  }
}