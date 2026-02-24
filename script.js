const themeSwitch = document.getE1emetById("theme-switch");
const body = document.body;

// load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeSwitch.checked = true;
}

//Toggle theme on switch change
themeSwitch.addEventListener("change", () => {
if (themeSwitch.checked) {
    body.classList.add("dark");
    localStoreage.setItem("theme", "dark");
} else {
    body.classList.remove("dark");
    localStoreage.setItem("theme", "light");
}
});
