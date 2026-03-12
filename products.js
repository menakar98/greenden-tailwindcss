var productscontainer = document.getElementById("productslist")
var search = document.getElementById("search")
var productslist = productscontainer.querySelectorAll("div")

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()

    for (var count = 0; count < productslist.length; count++) {
        var productname = productslist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productslist[count].style.display = "none"
        } else {
            productslist[count].style.display = "block"
        }
    }
})