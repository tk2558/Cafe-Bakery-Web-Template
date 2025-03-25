document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("interface-menu");
    hamburger.addEventListener("click", function () {
        const hiddenMenu = document.getElementById("hidden-menu");
        if (hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") {
            hiddenMenu.style.display = "flex";
        } else {
            hiddenMenu.style.display = "none";
        }
     });
});
