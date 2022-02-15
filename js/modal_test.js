var modal_test = document.getElementById("testModal");
var btn_test = document.getElementById("testBtn");
var close_btn_test = document.getElementsByClassName("modal_test_close_btn")[0];

btn_test.onclick = function() {
    modal_test.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal_test) {
        modal_test.style.display = "none";
    }
}

close_btn_test.onclick = function() {
    modal_test.style.display = "none";
}