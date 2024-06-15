let sideBar = document.querySelector(".side-bar")
function showSideBar() {
    sideBar.style.display = "flex";
}
function hideSideBar() {
    sideBar.style.display = "none";
}

ScrollReveal({
    reset : true,
    distance : "80px",
    duration : 2000,
    delay : 200
});

ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});
ScrollReveal().reveal('.home-img, .about p, .about .btn3', {origin : 'right'});
ScrollReveal().reveal('.about-img', {origin : 'left'});
ScrollReveal().reveal('.card-container, .team-container, form', {origin : 'bottom'});