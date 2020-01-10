/*
window.addEventListener("load", function (): void  {
var toDo: string [] = ["selbstmord", " erhängen", " überdosis"];

//if (toDo.length == 3 ) console.log (toDo [0]);

for (var index: number = 0; index < toDo.length; index++)

this.document.querySelector("#toDo").innerHTML += "<p>" + toDo[index] + "</p>";
*/
var taskcounter = 0;
window.addEventListener("load", function () {
    document.querySelector(".addbut").addEventListener("click", addTask);
    document.querySelector(".number").addEventListener("click", addTask);
});
function addTask() {
    var task = document.querySelector(".task").value;
    console.log(task);
    addTaskToList(task); // Aufruf der Funktion drunter
    // Counter:
    var element = document.querySelector(".frame");
    var numberofTasks = element.children.length;
    taskcounter = numberofTasks;
    console.log("du hast:" + numberofTasks + "todos");
    document.querySelector(".number").innerHTML = numberofTasks + " in total";
}
//number of tasks statt taskcounter
function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    var element = document.querySelector(".frame");
    var numberofTasks = element.children.length;
    addElement.setAttribute("id", "TaskId" + numberofTasks);
    var myHtmlTemplate = "";
    myHtmlTemplate += "<button onclick=\"checkedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + numberofTasks + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + numberofTasks + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"deleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + numberofTasks + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".frame").appendChild(addElement);
    console.log("addNew:" + newTaskValue);
}
function deleteTaskText(clickedTrash) {
    clickedTrash.parentElement.remove();
    var element = document.querySelector(".frame");
    var numberofTasks = element.children.length;
    numberofTasks--;
    document.querySelector(".number").innerHTML = numberofTasks + " in total";
}
function checkedButton(clickedButton) {
    if (clickedButton.classList.contains("fa-circle")) {
        clickedButton.classList.remove("fa-circle");
        clickedButton.classList.add("fa-check-circle");
    }
    else {
        clickedButton.classList.remove("fa-check-circle");
        clickedButton.classList.add("fa-circle");
    }
}
var color = ["#ffbae5", "#bdccd4", "#0dccd4", "#87cefa"];
var i1 = 0;
document.querySelector(".co1").addEventListener("click", function () {
    i1 = i1 < color.length ? ++i1 : 0;
    document.querySelector("body").style.background = color[i1];
});
//# sourceMappingURL=script.js.map