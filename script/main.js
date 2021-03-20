/* global console, alert, prompet */

var search = document.querySelector(".search-bar"),

    account = document.querySelector(".account"),

    shopping = document.querySelector(".shop-bag"),

    x = document.querySelector(".clickable-search"),

    y = document.querySelector(".clickable-account"),
    
    z = document.querySelector(".clickable-bag");


search.onclick = function() {

    if (x.style.transform === "scale(0)") {

        x.style.transform = "scale(1)";

    } else {

        x.style.transform = "scale(0)";

    }

}

account.onclick = function() {

    if (y.style.transform === "scale(1, 0)") {

        y.style.transform = "scale(1, 1)";

    } else {

        y.style.transform = "scale(1, 0)";

    }

}

shopping.onclick = function() {

    if (z.style.transform === "scale(1, 0)") {

        z.style.transform = "scale(1, 1)";

    } else {

        z.style.transform = "scale(1, 0)";

    }

}

/* light Box */

function openLightBox() {
    document.getElementById("myLightBox").style.display = "block";
}

function closeLightBox() {
    document.getElementById("myLightBox").style.display = "none";
}