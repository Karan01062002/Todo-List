var ul = document.getElementById("list-container")
var input = document.getElementById("input")

function add() {
    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var listitem = document.createElement("li")
    listitem.innerHTML = input.value + "<button onclick='deleteitem(event)'>Delete</button>"
    listitem.style.animation = "fadeIn 1s ease-in-out"
    ul.append(listitem)
    input.value = "";
}

function deleteitem(event) {
    var item = event.target.parentElement;
    item.style.animation = "fadeOut 0.5s ease-in-out";
    item.addEventListener('animationend', function () {
        item.remove();
    });
}