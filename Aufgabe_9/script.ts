/* 
window.addEventListener("load", function (): void  {
var toDo: string [] = ["selbstmord", " erhängen", " überdosis"];

//if (toDo.length == 3 ) console.log (toDo [0]);

for (var index: number = 0; index < toDo.length; index++)

this.document.querySelector("#toDo").innerHTML += "<p>" + toDo[index] + "</p>";
*/
var taskcounter: number = 0;

window.addEventListener("load", function(): void {
    document.querySelector(".addbut").addEventListener("click", addTask);
    document.querySelector(".number").addEventListener("click", addTask);
});

function addTask (): void {
    var task: string = (<HTMLInputElement>document.querySelector(".task")).value;
    console.log(task);
    addTaskToList(task); // Aufruf der Funktion drunter
    // Counter:
    var element = document.querySelector(".frame");
    var numberofTasks = element.children.length;
    taskcounter = numberofTasks;
    console.log("Die Anzahl der To-Dos lautet:" + numberofTasks);
    document.querySelector(".number").innerHTML = numberofTasks + " in total";
}

//number of tasks statt taskcounter
function addTaskToList (newTaskValue: string): void {
    var addElement: any = document.createElement("div");
    addElement.setAttribute("class", "Template");
    var element = document.querySelector(".frame");
    var numberofTasks = element.children.length;
    addElement.setAttribute("id", "TaskId" + numberofTasks); 
    var myHtmlTemplate: string =  "";
    myHtmlTemplate += "<button onclick=\"checkedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + numberofTasks + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + numberofTasks + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"deleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + numberofTasks + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".frame").appendChild (addElement);
    console.log ("addNew:" + newTaskValue);
}


function deleteTaskText (clickedTrash): void {
    clickedTrash.parentElement.remove();
    var element: any = document.querySelector(".frame"); 
    var numberofTasks: number = element.children.length;
    numberofTasks --;
    document.querySelector(".number").innerHTML = numberofTasks + " in total";
}

function checkedButton (clickedButton): void {
   if ( clickedButton.classList.contains("fa-circle") ) {
        clickedButton.classList.remove("fa-circle");
        clickedButton.classList.add("fa-check-circle");
    } else {
        clickedButton.classList.remove("fa-check-circle");
        clickedButton.classList.add("fa-circle");
}}

var color = ["#ffbae5", "#bdccd4", "#0dccd4", "#87cefa"];
var i1: number = 0;
document.querySelector(".co1").addEventListener("click", function (): void {
i1 = i1 < color.length ? ++i1 : 0;
document.querySelector("body").style.backgroundColor = color[i1];
});
