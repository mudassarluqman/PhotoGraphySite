let burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("lol");
    burger.classList.toggle("burger-color");

});