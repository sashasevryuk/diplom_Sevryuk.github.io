var regbtn = document.getElementById("regBtn");
var regmodal = document.getElementById("registrationModal");

var avtbtn = document.getElementById("avtBtn");
var avtmodal = document.getElementById("avtorizationModal");

var avt_help = document.getElementById("avt_help");
var avt_help_modal = document.getElementById("avt_help_modal");

window.onclick = function (event) {
    if (event.target == regmodal) {
        regmodal.style.display = "none";
    }
    if (event.target == avtmodal) {
        avtmodal.style.display = "none";
    }
    if (event.target == avt_help_modal) {
        avt_help_modal.style.display = "none";
    }
}

regbtn.onclick = function () {
    regmodal.style.display = "block";
}

avtbtn.onclick = function () {
    avtmodal.style.display = "block";
}

avt_help.onclick = function() {
    avt_help_modal.style.display = "block";
}