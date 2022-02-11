var regbtn = document.getElementById("regBtn");
var regmodal = document.getElementById("registrationModal");
//var regbtn2 = document.getElementById("regBtn2");
//var regmodal2 = document.getElementById("registrationModal2");
//var form = document.getElementById("form");
var avtbtn = document.getElementById("avtBtn");
var avtmodal = document.getElementById("avtorizationModal");

window.onclick = function (event) {
    if (event.target == regmodal) {
        regmodal.style.display = "none";
    }
    //if (event.target == regmodal2) {
    //    regmodal2.style.display = "none";
    //}
    if (event.target == avtmodal) {
        avtmodal.style.display = "none";
    }
}
regbtn.onclick = function () {
    regmodal.style.display = "block";
}


avtbtn.onclick = function () {
    avtmodal.style.display = "block";
}
/*
regbtn2.onclick = function() {
    regmodal.style.display = "none";
    regmodal2.style.display = "block";
    
}
*/
/*
form.onsubmit = function() {
    //regmodal.style.display = "none";
    regmodal2.style.display = "block";
}
*/









/*

close_btn.onclick = function() {
  modal.style.display = "none";
}
*/