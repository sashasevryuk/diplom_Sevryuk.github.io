var regbtn = document.getElementById("regBtn");
var regmodal = document.getElementById("registrationModal");
regbtn.onclick = function() {
    regmodal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == regmodal) {
        regmodal.style.display = "none";
    }
}







/*

close_btn.onclick = function() {
  modal.style.display = "none";
}
*/