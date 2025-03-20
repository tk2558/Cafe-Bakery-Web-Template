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

document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const circles = document.querySelectorAll(".gallery-circle, .gallery-circle-grey");
    const gallery = document.getElementById("gallery");
    const totalCircles = circles.length;
    const galleryImgs = [
        "./imgs/g1.jpg",
        "./imgs/g2.jpg",
        "./imgs/g3.jpg",
        "./imgs/g4.jpg",
        "./imgs/g5.jpg"
    ];
    
    document.getElementById("next").addEventListener("click", () => {
        circles[currentIndex].classList.remove("gallery-circle");
        circles[currentIndex].classList.add("gallery-circle-grey");
        
        currentIndex = (currentIndex + 1) % totalCircles;
        
        circles[currentIndex].classList.remove("gallery-circle-grey");
        circles[currentIndex].classList.add("gallery-circle");
        gallery.src = `${galleryImgs[currentIndex]}`;
    });
    
    document.getElementById("prev").addEventListener("click", () => {
        circles[currentIndex].classList.remove("gallery-circle");
        circles[currentIndex].classList.add("gallery-circle-grey");
        
        currentIndex = (currentIndex - 1 + totalCircles) % totalCircles;
        
        circles[currentIndex].classList.remove("gallery-circle-grey");
        circles[currentIndex].classList.add("gallery-circle");
        gallery.src = `${galleryImgs[currentIndex]}`;
    });
});