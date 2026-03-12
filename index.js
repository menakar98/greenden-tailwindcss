var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closeicon = document.getElementById("closeicon")

menuicon.addEventListener("click", function () {
    sidenav.classList.remove("hidden")
})

closeicon.addEventListener("click", function () {
    sidenav.classList.add("hidden")
})