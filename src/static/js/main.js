//NAVBAR
function myFunc() {
    const x = document.getElementById("myUl");
    const n = document.getElementById("navbar");
    const b = document.getElementById("myBar").classList.toggle("bar2");
    console.log(x);
    if (x.style.display === "flex") {
        x.classList.add("show");
        n.classList.toggle("navback");
        x.style.transition = "all ease-in-out";
        x.style.display = "none";
    }
    else {
        x.classList.add("show");
        n.classList.toggle("navback");
        x.style.display = "flex";
    }
}



//TEXT ANIMATION
var typed = new Typed(".auto-input", {
    strings: ["Web Developer ", "Back-End Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});




//OPEN CLOSE FEEDBACK
document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.querySelector(".feedback_chat");
    const feedbackPopup = document.querySelector("#feedback_popup");
    const closeButton = document.querySelector("#close_popup");

    chatIcon.addEventListener("click", function () {
        feedbackPopup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        feedbackPopup.style.display = "none";
    });

    // Optionally, you can add form submission logic here.
});
