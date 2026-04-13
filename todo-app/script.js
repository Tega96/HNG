
const modal = document.getElementById("todoModal")
const addTaskBtn = document.getElementById("addTaskBtn")
const closeBtn = document.getElementsByClassName("close")[0]

// Open modal when button is clicked. 
addTaskBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}