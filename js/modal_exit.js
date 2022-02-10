var modal = document.getElementById("exitModal");
var btn = document.getElementById("exitBtn");
var btn2 = document.getElementById("exitBtn2");

btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
