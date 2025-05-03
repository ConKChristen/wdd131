let selectElem = document.querySelector("select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current_theme = selectElem.value;
    if (current_theme == "Dark"){
        document.body.className="dark";
        logo.src = "byui-logo_white.png";
        logo.alt = "New dark more image";
        document.body.appendChild(logo);
    } else {
        document.body.className="white";
        logo.src = "byui-logo_blue.webp";
        logo.alt = "Light Mode logo";
        document.body.appendChild(logo); 
    }
}