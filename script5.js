
    window.onload = function () {
        alert("Welcome to Anugrah's Portfolio!");
    };

    const callButton = document.querySelector(".call-btn");

    callButton.addEventListener("click", function () {
        alert("Thank you for contacting me!");
    });

    const projectButtons = document.querySelectorAll(".project-btn");

    projectButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Opening project website...");
        });
    });

    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");

        if (window.scrollY > 50) {
            nav.style.background = "#240046";
        } else {
            nav.style.background = "rgb(74, 24, 139)";
        }
    });
