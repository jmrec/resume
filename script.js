function switchBackgrounds() {
    elementsToChangeAppearance.forEach(function(element) {
        let backgroundColor = element.style.backgroundColor;

        if (backgroundColor === "rgb(54, 69, 79)") {
            element.style.backgroundColor = "#e6e6e6";
            element.style.color = "black";
        } else {
            element.style.backgroundColor = "#36454F";
            element.style.color = "white";
        }
    });
    // let sideBarBackgroundColor = sideBar.style.backgroundColor;
    // if (sideBarBackgroundColor === "black") {
    //     sideBar.style.backgroundColor = "#e6e6e6";
    //     sideBar.style.color = "black";
    // } else {
    //     sideBar.style.backgroundColor = "black";
    //     sideBar.style.color = "white";
    // }
}

let imgProfile = document.querySelector("#imgProfile");
let sideBar = document.querySelector("#divSidebar")
let elementsToChangeAppearance = document.querySelectorAll(".toFlip");

imgProfile.addEventListener("click", switchBackgrounds);
