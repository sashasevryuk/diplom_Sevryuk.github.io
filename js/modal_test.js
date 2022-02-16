var modal_test = document.getElementById("testModal");
var btn_test = document.getElementById("testBtn");
var close_btn_test = document.getElementsByClassName("modal_test_close_btn")[0];
var modal = document.getElementById("exitModal");
var btn = document.getElementById("exitBtn");
var btn2 = document.getElementById("exitBtn2");
var close_btn = document.getElementsByClassName("modal_exit_close_btn")[0];

btn_test.onclick = function () {
    modal_test.style.display = "block";
}

close_btn_test.onclick = function () {
    modal_test.style.display = "none";
}

btn.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    modal.style.display = "block";
}

close_btn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal_test) {
        modal_test.style.display = "none";
    }
}

