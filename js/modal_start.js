var regbtn = document.getElementById("regBtn");
var regmodal = document.getElementById("registrationModal");
var regbtn2 = document.getElementById("regBtn2");
var regmodal2 = document.getElementById("registrationModal2");
window.onclick = function(event) {
    if (event.target == regmodal) {
        regmodal.style.display = "none";
    }
    //if (event.target == regmodal2) {
    //    regmodal2.style.display = "none";
    //}
}
regbtn.onclick = function() {
    regmodal.style.display = "block";
}

//regbtn2.onclick = function() {
//    regmodal2.style.display = "block";
//    regmodal.style.display = "none";
//}










/*

close_btn.onclick = function() {
  modal.style.display = "none";
}
*/