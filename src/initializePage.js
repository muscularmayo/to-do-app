import {container} from './app.js'
import {logic} from './logic.js'
import {view} from './view.js'
const log = logic();
//here we will set up our page layout and then everything will be based on that!

const initializePage = function() {
  view.appendProjectsHeader();
  view.appendProjectTitle();
  dom.appendProjectList();
  dom.appendTaskList();
}


export default {initializePage};