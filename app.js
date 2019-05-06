// function filterFunction(e) {
//   const filterInput = document.getElementById("filter");
//   const filter = filterInput.value.toUpperCase();

//   ul = document.getElementById("listUl");
//   li = ul.getElementsByTagName("li");

//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }

function filterFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listUl");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("b")[0];
    console.log(a.innerText);

    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//   i = 0;

//   if (localStorage.taskList) {
//     const taskList = JSON.parse(localStorage.taskList);
//     console.log(taskList);

//     taskList.forEach(element => {
//       i = i + 1;
//     });
//   } else {
//     taskList = [];
//   }

//   for (k = 0; k <= i; k++) {
//     if (taskList[k].includes) {
//     }
//   }
// }

/** INSERT FORMULARY TEXT TO LIST  */

const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const list = document.querySelector("ul");

console.log(form);
form.addEventListener("submit", runEvent);

function runEvent(e) {
  // console.log(taskInput.value);

  newTask = document.createElement("li");
  newTask.setAttribute("class", "collection-item");
  newTask.innerHTML = `<b href="#">${taskInput.value}</b>
    <a href="#" class="delete-item secondary-content">
    
    <i class="fa fa-times"></i>
    </a>`;

  list.appendChild(newTask);

  e.preventDefault();
}

addTask = document.querySelector("form");
inputTask = document.getElementById("task");

if (localStorage.taskList) {
  taskList = JSON.parse(localStorage.taskList);
  console.log(taskList);
} else {
  taskList = [];
}

function populateTable() {
  // console.log(taskList);

  taskList.forEach(function(element, i) {
    newTask = document.createElement("li");
    newTask.setAttribute("class", "collection-item");
    newTask.innerHTML = `<b href="#">${element}</b>
      <a href="#" class="delete-item secondary-content">
      <i class="fa fa-times"></i>
      </a>`;

    list.appendChild(newTask);
  });
}

populateTable();

addTask.addEventListener("submit", function(e) {
  taskList.push(inputTask.value);

  localStorage.setItem("taskList", JSON.stringify(taskList));

  e.preventDefault();
});

//** BOTON CLEAR TASK */

const clearButton = document.querySelector(".clear-task");
const msg = document.createTextNode("Lista Borrada!");
const div = document.querySelector("div.card-action");

clearButton.addEventListener("click", eventHandler);

function eventHandler(e) {
  //const list = document.querySelector("ul");
  list.parentNode.removeChild(list);

  if (confirm("Are you sure?")) {
    div.appendChild(msg);
    localStorage.clear();
    e.preventDefault();
    location.reload();
  } else {
    e.preventDefault();
  }
}

//** BOTON REMOVE */

const bodyNode = document.body;

bodyNode.addEventListener("click", handleEvent);

function handleEvent(e) {
  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log("Delete Task!");
  //   }
  // }

  // BETER WAY! (classList instead of className)

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("Delete Task!");

    e.target.parentElement.parentElement.remove();
  }
}

// const element = document.getElementById("task-title");
// console.log(element);

// console.log(element.id);
// console.log(element.innerText);

// element.innerText = "This is awesome";
// element.id = "newTask-title";
// element.className = "task";
// element.style.color = "red";
// element.style.backgroundColor = "black";

// console.log(element.innerHTML);
// console.log(element.innerText);

// const element = document.querySelector("task-title");

// const element = document.querySelector(".collection-item");
// console.log(element);
// element.style.color = "red";

// const element = document.querySelector("ul"); //select all
// console.log(element);
// element.style.color = "red";

//element =document.querySelector("li:fist-child");
// element = document.querySelector("li:last-child");
// element = document.querySelector("li:nth-child(2)").style.background;
// console.log(element);

// elements = document.getElementsByClassName("collection-item");
// console.log(elements);
// arrayElements = Array.from(elements);
// console.log(elements);
// arrayElements.forEach(function(elements, index){
//     elements.innerTect = `Hello ${index}`;
//     if(index >2){
//         elements.style.color = "red";
//     }
//     if (index ===1){
//         elements.style.backgroundColor = "blue";
//     }
// });

// const element = document.querySelectorAll("li");
// element.forEach(function(element){
//     console.log(element);
//     element.innerText = "Probando 1 2 3";
// })

//*****COLOR CHANGE ODD-EVEN */
// odd = document.querySelectorAll("li:nth-child(odd)");
// even = document.querySelectorAll("li:nth-child(even)");

// odd.forEach(function(li){
//     li.style.background = "grey";
// });
// even.forEach(function(li){
//     li.style.background = "red";
// });

// /*** AGREGAR NEW NODOS */
// const li = document.createElement("li");
// li.className = "collection-item s12";
// li.id = "new-li";
// li.setAttribute("title", "New li item");

// const newTextNode = document.createTextNode("New List Item");
// li.appendChild(newTextNode);

// ul = document.querySelector("ul");
// ul.appendChild(li);

// del = document.createElement("a");

// del.href = "#";
// del.className = "delete-item secondary-content";
// del.innerHTML = `<i class="fa fa-times"></i>`;

// li.appendChild(del);

//** REPLACE NODE */
// const newHeading = document.createElement("h2");
// const textParagraph = document.createTextNode("This is a new Title");

// newHeading.id = "task-title";
// newHeading.appendChild(textParagraph);

// const oldHeading = document.getElementById("task-title");
// const parent = oldHeading.parentNode;

// console.log(parent);

// parent.replaceChild(newHeading, oldHeading);

/** MORE EVENT EXAMPLES */

// const page = window;
// const clearBtn = document.querySelector(".clear-task");
// const heading = document.querySelector("h5");
// const card = document.querySelector(".card");

// // clearBtn.addEventListener("click", eventHandler);
// // clearBtn.addEventListener("mouseenter", eventHandler);
// // clearBtn.addEventListener("mouseleave", eventHandler);
// // clearBtn.addEventListener("dblclick", eventHandler);
// // clearBtn.addEventListener("mousedown", eventHandler);
// // clearBtn.addEventListener("mouseup", eventHandler);
// page.addEventListener("mousemove", eventHandler);

// function eventHandler(event){
//     console.log( `EVENT TYPE ${event.type}`);
//     heading.textContent = `Mouse X: ${event.offsetX} Mouse Y: ${event.offsetY}`;
//     //document.body.style.background = `rgb(${event.offsetX}, ${event.offsetY}, 40)`;

//     event.preventDefault();
// }
