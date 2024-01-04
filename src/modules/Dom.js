import Storage from "./Storage";
import TodoList from "./TodoList.js"
import Project from "./Project";
import Task from "./Task";

export default class Dom {
    static loadHome() {
        Storage.addProject(new Project("Tom"));
        Storage.addProject(new Project("Jerry"));
        Storage.addTask("Jerry", new Task("sun"));
        Storage.addTask("Jerry", new Task("moon"));
        Storage.addTask("Jerry", new Task("stars"));
        Storage.addTask("Tom", new Task("pirateKing"))
        Storage.addTask("Tom", new Task("pirateHunter"));
        Storage.addTask("Tom", new Task("starBoy"));

        // if(Storage.getTodoList().contains("Tom")){
        //     Storage.renameProject("Tom","Sam")
        //     return;
        // }
        // Storage.renameProject("Tom","Sam")
        // Storage.deleteProject("Jerry")
        // Storage.deleteProject("Tom")
        // Storage.renameTask("Jerry","moon","Earth")
        // Storage.renameTask("Jerry","sun","nika")
        Storage.deleteTask("Tom","starBoy")
    
        // Dom.loadProjects()
        // Dom.openProject()
        // Dom.openTask()
        // Dom.loadProjects()
        Dom.initAddProjectBtn()
        Dom.loadProjects()
    }

    static loadProjects(){
        Storage.getTodoList()
        .getProjects()
        .forEach((project)=> Dom.createProject(project.name))
    }

    static createProject(name){
        const userProject = document.getElementById("added-project-section")
        userProject.innerHTML+=`
        <button class="added-project-btn">
                            <div class="project-name">
                                <i class="fa-solid fa-hashtag"></i>
                                <span>${name}</span>  
                            </div>
                            <div class="project-option">
                                <i class="fa-regular fa-pen-to-square"></i>
                                <i class="fa-regular fa-trash-can"></i>
                            </div>
        </button>
        `
    }

    static initAddProjectBtn(){
        const addProjectBtn = document.querySelector('.add-project-btn');
        const addProjectPopupBtn= document.querySelector('.add-btn');;
        const cancelProjectPopupBtn = document.querySelector('.cancel-btn');

        addProjectBtn.addEventListener('click', Dom.openPopupForm)
        addProjectPopupBtn.addEventListener('click',Dom.addProject)
        cancelProjectPopupBtn.addEventListener('click', Dom.closePopupForm)
    }

    static openPopupForm(){
        const addProjectForm = document.getElementById('add-projectForm');
        const addProjectBtnOverlay = document.getElementById('add-project-overlay')

        addProjectForm.style.display = (addProjectForm.style.display === 'block') ? 'none' : 'block';
        addProjectBtnOverlay.style.display = (addProjectBtnOverlay.style.display === 'block') ? 'none' : 'block';
    }

    static addProject(){
        const projectInput = document.getElementById('projectName');
        let projectValue = projectInput.value
        Storage.addProject(new Project(projectValue))
        Dom.createProject(projectValue)
        Dom.closePopupForm()

    }

    static closePopupForm(){
        const addProjectForm = document.getElementById('add-projectForm');
        const addProjectBtnOverlay = document.getElementById('add-project-overlay')
        addProjectForm.style.display = (addProjectForm.style.display === 'block') ? 'none' : 'block';
        addProjectBtnOverlay.style.display = (addProjectBtnOverlay.style.display === 'block') ? 'none' : 'block';
        const projectInput = document.getElementById('projectName').value = '';
    }

   

    
    // static openTask(){
    //     document.querySelector('.add-task-btn').addEventListener('click', toggleForm);

    //     function toggleForm() {
    //         var projectForm = document.getElementById('taskForm');
    //         projectForm.style.display = (projectForm.style.display === 'block') ? 'none' : 'block';
    //     }
    //     document.querySelector('.add-taskForm-btn').addEventListener('click', addProject)
    //     function addProject() {
    //         console.log('Project added');
    //         cancelForm();
    //     }

    //     document.querySelector('.cancel-taskForm-btn').addEventListener('click',cancelForm)
        
    //     function cancelForm() {
    //         document.getElementById('taskForm').style.display = 'none';
    //         console.log("cancel form")
    //     }
    // }

  

    // static handleProject(e) {
    //     const projectName =this.children[0].innerHTML 
    //     Dom.loadProjectContent(projectName)
    // }

    // static loadProjectContent(projectName){
    //     const projectPreview = document.getElementById("project-task-list")
    //     projectPreview.innerHTML =`
    //     <h1>${projectName}</h1>
    //     <div class="task-list" id="task-list"></div>`
    //     Dom.loadTasks(projectName)
    // }

    // static loadTasks(projectName){
    //     Storage.getTodoList()
    //     .getProject(projectName)
    //     .getTasks()
    //     .forEach((task)=> Dom.createTasks(task.name,task.dueDate))
    // }

    // static createTasks(name,dueDate){
    //     const taskList = document.getElementById("task-list")
    //     taskList.innerHTML+=`
    //     <div class="taskComplete">
    //     <div class="task-name">
    //         <p>${name}</p>
    //     </div>
    //     <div class="task-date">
    //        <p>${dueDate} </p>
    //     </div>
    //     </div>`
    // }

}