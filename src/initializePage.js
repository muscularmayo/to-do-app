import {container} from './app.js'
import {logic} from './logic.js'
import {domManipulation} from './domManipulation.js'
const dom = domManipulation();
const log = logic();
//here we will set up our page layout and then everything will be based on that!

const initializePage = function() {
  dom.appendProjectsHeader();
  dom.appendProjectTitle();
  dom.appendProjectList();
  dom.appendTaskList();
}


export default {initializePage};