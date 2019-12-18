/**
 * Requires jQuery script tag some where in HTML
 *
 * <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
 *
 * **/

//input text box element
let taskInput;
//submit button element
let taskButton;
//task list element
let tasks;
//error element
let taskError;

//setup page when ready
$(document).ready(function(){
    setupPage();
});

//adds task to list
function addTask(){
    //hides error to start each submission
    hideError();
    //gets the value that was typed into the 'task' text box
    const value = taskInput.val();
    //if there is a value in the text box create a new task and add it to the list
    //else display an error
    if(value) {
        const task = makeTask(value);
        tasks.append(task);
        taskInput.val('');
    }else{
        displayError();
    }
}
//add task to list based on provided text string
function makeTask(text){
    //get the number of tasks currently in the list
    const listSize = tasks.children().length;
    //create a new id equal to the number of tasks
    const taskId = 'task'+listSize;
    //create a remove button for the task
    // attaching the removeTask() function on click providing the element as a parameter
    const button = `<button onclick="removeTask(${taskId})">Remove</button>`;
    //return the new task DOM element
    return `<li id="${taskId}">${button} ${text}</li>`;
}
//removes task from list based on provided task DOM element ex: <li id='task1'><li>
function removeTask(taskElement){
    //delete the element that was provided
    taskElement.remove();
}
//hides input error
function hideError(){
    //hide error text
    taskError.css('display','none');
    //set the background color of the text box to default
    taskInput.css('background-color','');
}
//displays input error
function displayError(){
    //display error text
    taskError.css('display','block');
    //set the background color of the text box to pink
    taskInput.css('background-color','pink');
}
//setups page piece by piece, each function call is dependent upon the previous function call
//ex: setupButton() requires setupInput() to be called first to initialize related DOM elements
function setupPage(){
    setupInput();
    setupButton();
    setupError();
}
//initializes DOM elements related to task input
function setupInput(){
    //init textBox input
    taskInput = $('#taskInput');
    //init task list
    tasks = $('#tasks');
}
//initializes task submit button DOM element
function setupButton(){
    //init task submit button
    taskButton = $('#taskButton');
    //add on click event handler of addTask()
    taskButton.on('click',addTask);
}
//initializes and hides the task error DOM element
function setupError(){
    //init taskErr DOM element
    taskError = $('#taskErr');
    //add the error text to the element
    taskError.append('*Enter A Value');
    //set the error text color to red
    taskError.css('color','red');
    //hide the error text
    hideError();
}

