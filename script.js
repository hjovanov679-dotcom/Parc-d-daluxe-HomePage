// Your JavaScript code here

const sbu = getElementById("sbu");
sbu.addEventListener("Click"); {
    text.style.display = "block"
}
sbu.addEventListener("Click"); {
    element.style.scale(1.2, 1.2)
}
function toggle(knop) {
    const dropdown = knop.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
document.querySelectorAll(".dropdown.open").forEach(d => {
    if (d !== dropdown) d.classList.remove("open");
});
dropdown.classList.toggle("open");

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-button")) {
        document.querySelectorAll(".dropdown.open").forEach(d => {
            d.classList.remove("open");
        });
    }
});