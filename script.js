function toSignup() {
    var x = document.getElementById("signupCard");
    x.style.display = "block";
    console.log(x.style.display);
    var y = document.getElementById("loginCard");
    y.style.display = "none";
}
function toLogin() {
    var x = document.getElementById("signupCard");
    x.style.display = "none";
    var y = document.getElementById("loginCard");
    y.style.display = "block";
}