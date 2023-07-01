
let apple = document.getElementsByClassName("apple")
let pear = document.getElementsByClassName("pear")


for(i of apple){
    i.setAttribute("draggable", "true"); // чтобы передвигалось
    i.ondragstart = start
}
for(i of pear){
    i.setAttribute("draggable", "true"); // чтобы передвигалось
    i.ondragstart = start1
}

let fordrop = document.getElementsByClassName("fordrop")
for(i of fordrop){
    i.ondragenter = f1
    i.ondragleave = f2
    i.ondragover = f3
    i.ondrop = f4
}

let kvadrat
function start(){
    let id = this.id
    console.log(id)
    kvadrat = document.getElementById(id)
}
function start1(){
    let id = this.id
    console.log(id)
    kvadrat = document.getElementById(id)
}


function f1 () {
    console.log("dragenter")
}
function f2 () {
    console.log("dragleave")
}
function f3 (event) {
    console.log("dragover")
    event.preventDefault()
}
function f4 () {
    console.log("dragdrop")
    this.appendChild(kvadrat)

    let parentDiv = document.getElementById("area");
    let parentDiv1 = document.getElementById("area1");


    let childDiv = document.getElementById("a1");
    let childDiv1 = document.getElementById("a2");
    let childDiv2 = document.getElementById("a3");
    let childDiv3 = document.getElementById("p1");
    let childDiv4 = document.getElementById("p2");

        if (parentDiv.contains(childDiv && childDiv1 && childDiv2 && childDiv3) , parentDiv1.contains(childDiv3 && childDiv4)) {
            alert("Молодец!")
        }
}

