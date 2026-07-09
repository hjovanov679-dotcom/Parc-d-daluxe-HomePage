const menuButton = document.querySelector("#MenuButton");
const dropdown = document.querySelector(".dropdown");

if (menuButton && dropdown) {
    menuButton.addEventListener("click", function () {
        const isOpen = dropdown.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
    });
}
