import { addElement, buttonElem, divElem, imageElem, labelElem, pElem, radioElem, selectElem, textAreaElem, textFieldElem } from "../../../utils/dom-elems";
import images from "../../../utils/images";
import Option from "../../Option";
import NavItem from "../../nav-item";
import Task from "../../task";

const navItemTopList = [
    new NavItem('All'),
    new NavItem('Today'),
    new NavItem('This-Week')
];

let projectItemsList = [
//    new NavItem('Hello'),
//    new NavItem('Python')
];

let tasksList = [];

let currentTab = 'All';

function storeItems(isTask = true) {
    if(isTask) {
      const serielizedTasks = JSON.stringify(tasksList);
      localStorage.setItem('tasks', serielizedTasks);
    } else {
      const serielizedProjects = JSON.stringify(projectItemsList);
      localStorage.setItem('projects', serielizedProjects);
    }
}

function getItems(isTask = true) {
    if(isTask) {
        const getTasks = localStorage.getItem('tasks');
        if(getTasks != null) {
            const deserializedTasks = JSON.parse(getTasks);
            tasksList = deserializedTasks;
        }
    } else {
        const getProjects = localStorage.getItem('projects');
        if(getProjects != null) {
            const deserializedProjects = JSON.parse(getProjects);
            projectItemsList = deserializedProjects;
        }
    }
}

function layoutSetup(tab = 'All') {
    getItems(true);
    getItems(false);
    currentTab = tab;
    const header = divElem('header');
    const headerP = pElem('Todo-List', 'header-title');
    const logo = imageElem(images.completedTaskIcon, 'logo', 'header-logo');
    header.append(logo ,headerP);
    const wrapperDiv = divElem('wrapper');
    const navBar = divElem('nav-bar');
    const mainDiv = divElem('main');
    const heading = pElem(currentTab, 'heading');

    let allTasks = [];
    if(currentTab === 'All') {
          allTasks = tasksList.map(task => {
          const wrapper = divElem('task')
          const p = pElem(task.name);
          updateUiForCompleted(task, p);
          const checkbox = radioElem(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
          const priorityMarker = divElem('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
            priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
          }
          const left = divElem('task-left');
          left.append(priorityMarker, checkbox, p);
          //details date and delete
           const right = divElem('task-right');
          // details
          const details = buttonElem('Details','details-btn', () => {
            activatePopupForDetails(task)
          });
          //delete
          const deleteBtn = imageElem(images.deleteIcon2,'delete-icon', 'delete-icon');
          deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
          //edit
          const edit = imageElem(images.editIcon, 'edit-icon', 'edit-icon');
          edit.addEventListener('click', () => {
            editTask(task)
          });
          //duedate
          const duedate = pElem(task.duedate);
          right.append(details, deleteBtn,duedate)
          wrapper.append(left, right);
          return wrapper;
     });
   }


   const addTaskElement = addElement('Add Task', 'add-task', () => {
       activatePopupForTasks();
       const taskName  = document.querySelector('#task-name').value;
       if(taskName === '') {
         return;
       }
       const id = Math.random();
       const task = new Task(id,taskName, images.calenderTextIcon, currentTab);
       tasksList.push(task);
       storeItems(true);
   });
    const tabTasks = tasksList.filter(task => task.category == currentTab);
   let tabTasksElems = [];
   if(tabTasks.length !== 0) {
      tabTasksElems = tabTasks.map(task => {
        const wrapper = divElem('task')
          const p = pElem(task.name);
          updateUiForCompleted(task, p);
          const checkbox = radioElem(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
          const priorityMarker = divElem('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
              priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
        }
          const left = divElem('task-left');
          left.append(priorityMarker, checkbox, p);
        //details date and delete
         const right = divElem('task-right');
        // details
        const details = buttonElem('Details','details-btn');
        details.addEventListener('click', function(e){
            activatePopupForDetails(task);
        });
        //delete
        const deleteBtn = imageElem(images.deleteIcon2,'delete-icon', 'delete-icon');
        deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
        // edit
        const edit = imageElem(images.editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        //due date
        const duedate = pElem(task.duedate);
        right.append(details, deleteBtn,edit,duedate)
        wrapper.append(left, right);
        return wrapper;
   });
} 
 
  currentTab == 'All'?  mainDiv.append(heading, ...allTasks) 
                     :  mainDiv.append(heading, ...tabTasksElems,addTaskElement) ;
    wrapperDiv.append(navBar, mainDiv);
    document.querySelector('body').append(header,wrapperDiv);
}

export const run = (tab = 'All') => {
    layoutSetup(tab)
    const navBar = document.querySelector('div.wrapper div.nav-bar');
    navBar.append(navBarTop(), navBarBottom())
}

export function navBarTop() {
    const navBarTop = divElem('nav-top');

    const navItems = navItemTopList.map(items => {
         const div = divElem('nav-item');
         const p = pElem(items.name);
         const image = imageElem(images.calenderTextIcon, 'nav-item-image', 'nav-item-image');
         div.append(image,p);
         div.addEventListener('click', handleNavItemClicked)
         return div;
    });

    navBarTop.append(...navItems);
    return navBarTop;
}

export function navBarBottom() {
    const navBottom = divElem('nav-bottom');
    const title = pElem('Projects', 'nav-title');
    
    const projectItems = divElem('project-items');

    const projects = projectItemsList.map(project => {
        const div = divElem('project-item');
        const projectLeft = divElem('project-left');
        const p = pElem(project.name);
        const deleteImage = imageElem(images.deleteIcon2, 'delete-project-icon', 'delete-project-icon');
        deleteImage.addEventListener('click', () => {
           const index = projectItemsList.indexOf(project);
           projectItemsList.splice(index, 1);
           storeItems(false);
           const body = document.querySelector('body');
           body.innerHTML = null;
           currentTab = 'All';
           run();
        });
        const image = imageElem(images.project2, 'project-item-image', 'project-item-image');
        projectLeft.append(image,p);
        div.addEventListener('click', handleNavItemClicked)
        // div.append(projectLeft, deleteImage);
        div.append(projectLeft);
      
        return div;
    });  

    const addProjectElem = addElement('Add Project', 'add-project', () => {
            activatePopup()
    });

    projectItems.append(...projects);

    navBottom.append(title, projectItems, addProjectElem);
    return navBottom;
}

function handleNavItemClicked() {
   const title = this.querySelector('p').innerText;
   currentTab = title;

   const right = document.querySelector('div.wrapper > div.main');
   right.innerHTML = null;
   const heading = pElem(title, 'heading');
   const addTaskElement = addElement('Add Task', 'add-task', () => {
       activatePopupForTasks();
       const taskName  = document.querySelector('#task-name').value;
       if(taskName === '') {
         return;
       }
       const id = Math.random();
       const task = new Task(id,taskName, images.calenderTextIcon, currentTab);
       tasksList.push(task);
       storeItems(true);
   });

   const tabTasks = tasksList.filter(task => task.category == currentTab);
   let tabTasksElems = [];
   if(tabTasks.length !== 0) {
      tabTasksElems = tabTasks.map(task => {
        const wrapper = divElem('task')
          const p = pElem(task.name);
          updateUiForCompleted(task, p);
          const checkbox = radioElem(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
          const priorityMarker = divElem('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
              priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
        }
          const left = divElem('task-left');
          left.append(priorityMarker, checkbox, p);
        //details date and delete
         const right = divElem('task-right');
        // details
        const details = buttonElem('Details','details-btn');
        details.addEventListener('click', function(e){
            activatePopupForDetails(task);
        });
        //delete
        const deleteBtn = imageElem(images.deleteIcon2,'delete-icon', 'delete-icon');
        deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
        // edit
        const edit = imageElem(images.editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        //due date
        const duedate = pElem(task.duedate);
        right.append(details, deleteBtn, edit,duedate)
        wrapper.append(left, right);
        return wrapper;
   });
} 
   if(currentTab === 'All') {
      const allTasks = tasksList.map(task => {
          const wrapper = divElem('task')
          const p = pElem(task.name);
          updateUiForCompleted(task, p);
          const checkbox = radioElem(task.id, task.name);
          checkbox.checked = task.isDone;
          checkbox.addEventListener('click', () => isDone(task));
          const priorityMarker = divElem('priority-marker');
          if(task.priority == 'High') {
            priorityMarker.classList.add('priority-high-color');
          } else if(task.priority == 'Medium') {
              priorityMarker.classList.add('priority-medium-color');
          } else if (task.priority == 'Low') {
            priorityMarker.classList.add('priority-low-color');
        }
          const left = divElem('task-left');
          left.append(priorityMarker, checkbox, p);
        //details, date, edit and delete
         const right = divElem('task-right');
        // details
        const details = buttonElem('Details','details-btn');
        details.addEventListener('click', function(e){
            activatePopupForDetails(task);
        });
        // delete
        const deleteBtn = imageElem(images.deleteIcon2,'delete-icon', 'delete-icon');
        deleteBtn.addEventListener('click', (e) => handleDeleteBtn(task));
        //edit
        const edit = imageElem(images.editIcon, 'edit-icon', 'edit-icon');
        edit.addEventListener('click', () => {
            editTask(task)
        });
        // date
        const duedate = pElem(task.duedate);
        right.append(details, deleteBtn,duedate)
        wrapper.append(left, right);
        return wrapper;
    });
    right.append(heading,...allTasks)
    return;
   }

   tabTasksElems.length === 0? right.append(heading,addTaskElement)
                             : right.append(heading, ...tabTasksElems ,addTaskElement) ;
}

function activatePopup() {
    const body = document.querySelector('body');
    body.innerHTML = null;
    const form = divElem('popup-form');
    const rowgrp = divElem('row-grp');
    const label = labelElem('project-name', 'Project Name');
    const textFieldElem1 = textFieldElem('project-name', 'enter project name');
    rowgrp.append(label,textFieldElem1);
    const addBtn = buttonElem('Add', 'add-btn', () => {
        const value = document.getElementById('project-name').value;
        if(value === '') return;
        const project = new NavItem(value);
        projectItemsList.push(project);
        storeItems(false);
        body.innerHTML = null;
        run();
    });
    const cancelBtn = buttonElem('Cancel', 'cancel-btn', () => {
       body.innerHTML = null;
       run();
    });
    
    const buttons = divElem('buttons');
    buttons.append(addBtn, cancelBtn);
    
    form.append(rowgrp, buttons)
    
    body.append(form)
}

function activatePopupForTasks(task1) {
     if(task1 == undefined) {
         const main = document.querySelector('div.main');
         main.innerHTML = null;
         //title(name)
         const form = divElem('popup-form');
         const rowgrp = divElem('row-grp');
         const label = labelElem('task-name', 'Project Name');
         const textFieldElem1 = textFieldElem('task-name', 'enter task name');
         //description
         const textarea = textAreaElem('task-textarea');
         textarea.rows = 10;
         textarea.cols = 10;
         const rowgrp2 = divElem('row-grp');
         const label2 = labelElem('description', 'Description');
         rowgrp2.append(label2, textarea);
         //priority
         const select = selectElem('priority', 'priority', [
             new Option('Low'),
             new Option('Medium'),
             new Option('High'),
         ]);
         const rowgrp3 = divElem('row-grp');
         const label3 = labelElem('priority', 'Priority');
         rowgrp3.append(label3, select);
         // due date
         const rowgrp1 = divElem('row-grp');
         const label1 = labelElem('date-picker', 'Due Date');
         const datePicker = document.createElement('input');
         datePicker.type = 'date';
         datePicker.id = 'date-picker';
         rowgrp1.append(label1,datePicker)
         rowgrp.append(label,textFieldElem1,rowgrp2,rowgrp3 ,rowgrp1);
         const addBtn = buttonElem('Add', 'add-btn', () => {
                 const taskName  = document.querySelector('#task-name').value;
                 const priority = document.getElementById('priority').value;
                 const duedate = document.getElementById('date-picker').value;
                 const description = document.getElementById('task-textarea').value;
                 if(taskName == '', duedate == '') {
                     alert('date and task name are required');
                     return;
                 };
                 const id = Math.random();
                 const task = new Task(id,taskName, images.calenderTextIcon, currentTab,duedate,description,priority);
                 tasksList.push(task);
                 storeItems(true);
                 resetForTasksForm()
         });
         const cancelBtn = buttonElem('Cancel', 'cancel-btn', () => {
             resetForTasksForm();
         });
         
         const buttons = divElem('buttons');
         buttons.append(addBtn, cancelBtn);
         
         form.append(rowgrp, buttons)
         
         main.append(form)
     } else {
         const main = document.querySelector('div.main');
         main.innerHTML = null;
         //title(name)
         const form = divElem('popup-form');
         const rowgrp = divElem('row-grp');
         const label = labelElem('task-name', 'Project Name');
         const textFieldElem1 = textFieldElem('task-name', 'enter task name');
         textFieldElem1.value = task1.name;
         //description
         const textarea = textAreaElem('task-textarea');
         textarea.innerText = task1.description;
         textarea.rows = 10;
         textarea.cols = 10;
         const rowgrp2 = divElem('row-grp');
         const label2 = labelElem('description', 'Description');
         rowgrp2.append(label2, textarea);
         //priority
         const select = selectElem('priority', 'priority', [
             new Option('Low'),
             new Option('Medium'),
             new Option('High'),
         ]);
         const rowgrp3 = divElem('row-grp');
         const label3 = labelElem('priority', 'Priority');
         select.value = task1.priority;
         rowgrp3.append(label3, select);
         // due date
         const rowgrp1 = divElem('row-grp');
         const label1 = labelElem('date-picker', 'Due Date');
         const datePicker = document.createElement('input');
         datePicker.type = 'date';
         datePicker.id = 'date-picker';
         datePicker.value = task1.duedate;
         rowgrp1.append(label1,datePicker)
         rowgrp.append(label,textFieldElem1,rowgrp2,rowgrp3 ,rowgrp1);
         const addBtn = buttonElem('Update', 'add-btn', () => {
                
                //updating
                 const taskName  = document.querySelector('#task-name').value;
                 const priority = document.getElementById('priority').value;
                 const duedate = document.getElementById('date-picker').value;
                 const description = document.getElementById('task-textarea').value;
                
                 if(taskName == '', duedate == '') {
                     alert('date and task name are required');
                     return;
                 };
                  //removing current object from list
                  const index = tasksList.indexOf(task1);
                  const task = tasksList[index];
                 
                 const id = task1.id;
                 task.duedate = duedate;
                 task.description = description;
                 task.priority = priority;
                 task.name = taskName
                 resetForTasksForm()
         });
         const cancelBtn = buttonElem('Cancel', 'cancel-btn', () => {
             resetForTasksForm();
         });
         
         const buttons = divElem('buttons');
         buttons.append(addBtn, cancelBtn);
         
         form.append(rowgrp, buttons)
         
         main.append(form)
     }
}

function activatePopupForDetails(task = new Task()) {
    const main = document.querySelector('div.main');
    main.innerHTML = null;
    //title(name)
    const detailsForm = divElem('details-popup-form');
    const title = pElem(`Title: ${task.name}`);
    //description
    const description = pElem(`Description: ${task.description}`);
    //priority
    const priority = pElem(`Priority: ${task.priority}`);
    // due date
    const duedate = pElem(`DueDate: ${task.duedate}`);
    // category
    const category = pElem(`Category: ${currentTab}`);

    detailsForm.append(category,title, description, duedate, priority);
    const addBtn = buttonElem('Add', 'add-btn', () => {
            const taskName  = document.querySelector('#task-name').value;
            const priority = document.getElementById('priority').value;
            const duedate = document.getElementById('date-picker').value;
            const description = document.getElementById('task-textarea').value;
            if(taskName == '', duedate == '') {
                alert('date and task name are required');
                return;
            };
            const id = Math.random();
            const task = new Task(id,taskName, images.calenderTextIcon, currentTab,duedate,description,priority);
            tasksList.push(task);
            storeItems(true);
            resetForTasksForm()
    });
    const cancelBtn = buttonElem('Cancel', 'cancel-btn', () => {
        handleDetailsCardCancel();
    });
    
    const buttons = divElem('buttons');
    buttons.append(cancelBtn);
    detailsForm.append(description, buttons)
    main.append(detailsForm)
}

function resetForTasksForm() {
    const mainDiv = document.querySelector('div.main');
    mainDiv.innerHTML = null;
    const heading = pElem(currentTab, 'heading');
    const addTaskElement = addElement('Add Task', 'add-task', () => {
        activatePopupForTasks();
    });
 
    const tabTasks = tasksList.filter(task => task.category === currentTab);
    let tabTasksElems = [];
    if(tabTasks.length !== 0) {
        tabTasksElems = tabTasks.map(task => {
            const wrapper = divElem('task')
            const p = pElem(task.name);
            updateUiForCompleted(task, p);
            const checkbox = radioElem(task.id, task.name);
            checkbox.checked = task.isDone;
            checkbox.addEventListener('click', () => isDone(task));
            const priorityMarker = divElem('priority-marker');
            if(task.priority == 'High') {
                priorityMarker.classList.add('priority-high-color');
            } else if(task.priority == 'Medium') {
                priorityMarker.classList.add('priority-medium-color');
            } else if (task.priority == 'Low') {
                priorityMarker.classList.add('priority-low-color');
            }
            const left = divElem('task-left');
            left.append(priorityMarker, checkbox, p);
          //details date and delete
           const right = divElem('task-right');
          // details
          const details = buttonElem('Details',`details-btn#${task.id}`, (e) => {
            activatePopupForDetails(task)
          });
          details.id = `details-btn#${task.id}`;
          //delete
          const deleteBtn = imageElem(images.deleteIcon2,'delete-icon', 'delete-icon');
          deleteBtn.id = task.id;
          deleteBtn.addEventListener('click', () => handleDeleteBtn(task));
          //edit
          const edit = imageElem(images.editIcon, 'edit-icon', 'edit-icon');
          edit.addEventListener('click', () => {
              editTask(task)
          });
          //duedate
          const duedate = pElem(task.duedate);
          right.append(duedate ,details,edit ,deleteBtn)
          wrapper.append(left, right);
          return wrapper;
     });
  }
    tabTasksElems.length === 0? mainDiv.append(heading,addTaskElement)
                              : mainDiv.append(heading, ...tabTasksElems ,addTaskElement) ;
}

function editTask(task = new Task()) {
    activatePopupForTasks(task)
}
   
function handleDeleteBtn(task) {
    const item = tasksList.filter(task1 => task1.id == task.id);
    const index = tasksList.indexOf(item[0]);
    tasksList.splice(index, 1);
    storeItems(true);
    const body = document.querySelector('body');
    body.innerHTML = null;
    run();
  }

function handleDetailsCardCancel() {
    const body = document.querySelector('body');
    body.innerHTML = null;
    run(currentTab);
}

function isDone(task) {
   const index = tasksList.indexOf(task);
   tasksList[index].isDone = ! tasksList[index].isDone;
   storeItems(true);
}

function updateUiForCompleted(task, p) {
    if(task.isDone == true) {
        p.classList.add('is-done');         
    }
    p.classList.remove('is-done');
}