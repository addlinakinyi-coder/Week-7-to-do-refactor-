// 1. SELECTORS
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskListUI = document.querySelector('#taskList');

// 2. STATE (Memory)
// This loads saved tasks from the browser or starts with an empty list []
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

// 3. THE RENDER FUNCTION (The "Painter")
function render() {
    taskListUI.innerHTML = ''; // Clear the screen first
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span> 
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListUI.appendChild(li);
    });

    // Save the updated list to the browser's storage
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

// 4. LOGIC FUNCTIONS
function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = ''; // Clear the box
        render(); // Update the screen and storage
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render(); // Update the screen and storage
}

// 5. INITIALIZE
addBtn.addEventListener('click', addTask);

// Run render immediately so saved tasks show up on page load
render();
