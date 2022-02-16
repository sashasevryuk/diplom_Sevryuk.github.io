var modal_support = document.getElementById("supportModal");
var btn_support = document.getElementById("supportBtn");
var close_btn_support = document.getElementsByClassName("modal_support_close_btn")[0];
var modal = document.getElementById("exitModal");
var btn = document.getElementById("exitBtn");
var btn2 = document.getElementById("exitBtn2");
var close_btn = document.getElementsByClassName("modal_exit_close_btn")[0];

btn_support.onclick = function () {
    modal_support.style.display = "block";
}

close_btn_support.onclick = function () {
    modal_support.style.display = "none";
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
    if (event.target == modal_support) {
        modal_support.style.display = "none";
    }
}
