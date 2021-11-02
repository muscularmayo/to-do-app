//here we will set up our page layout and then everything will be based on that!

class pageLayout {
  /*constructor() {
    not necessary, just included to test - perhaps i'll find a use for this
  }*/
  constructor() {
    this.container = document.querySelector('container')
  }


  createProjectsHeader() {
    //upper left: "Projects"
    /* <div id="projectsHeader" class="upperLeft">
        <h3>Projects</h3>
      </div>
    */
   const projects = document.createElement('div')
   projects.id = 'projectsHeader'
   projects.setAttribute('class', 'upperLeft')

   const h3 = document.createElement('h3')
   h3.innerHTML = 'Projects'

   projects.appendChild(h3)

   return projects;
   //return this whole thing we will append using appendProjectsHeader()
  }

  createProjectTitle() {
    //upper right: this will be set based on the current project we're looking at
    //when we click on the project name on bottom left, its innerHTML matches directly with the keys in our storage
  }

  createProjectList() {
    //bottom left: a list of all our projects
    //all the keys on storage object represent our project list
    //all of the keys will be put in separate divs .project and appended to #projectList
  }

  createTaskList() {
    //bottom right: a list of all the tasks associated with this specific project of ours
    //we will pull specificProject.tasks.forEach(title and date on a div .task and append to #taskList)

  }

  appendProjectsHeader() {
    //upper left: "Projects"
    this.container.appendChild(createProjectsHeader())


  }

  appendProjectTitle() {
    //upper right: current Project Title
    this.container.appendChild(createProjectTitle())
  }

  appendProjectList() {
    //bottom left: a list of all our projects
    this.container.appendChild(createProjectList())

  }

  appendTaskList() {
    //bottom right: a list of all the tasks associated with this specific project of ours
    this.container.appendChild(createTaskList())
  }

  appendTodaysTasks() {
    //the tasks with an associated
  }

  pageInitialization() {
    this.appendProjectsHeader();
    this.appendProjectTitle();
    this.appendProjectList();
    this.appendTaskList();
  }




}

//we have our storage object
//we want the tasks to be rearrangeable in terms of divs being able to slide up nd

let pageInit = new pageLayout();

export default pageInit