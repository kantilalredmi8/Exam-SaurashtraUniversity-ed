/* LOGIN FUNCTION */
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "karitik47@gmail.com" && password === "ritikkll") {
        window.location.href = "profile.html";
    } else {
        alert("Wrong email or password");
    }
}

/* PROFILE → MENU */
function goMenu() {
    window.location.href = "menu.html";
}

/* MENU → YOUR PHOTO */
function openMyPhoto() {
    window.location.href = "me.html";
}

/* YOUR PHOTO → FATHER PHOTO */
function openFatherPhoto() {
    window.location.href = "father.html";
}

/* FATHER PHOTO → DOWNLOAD PDF ON ANY CLICK */
function downloadPDF() {
    const link = document.createElement("a");
    link.href = "myfile.pdf";       // Make sure myfile.pdf is in the same folder as father.html
    link.download = "myfile.pdf";   // The filename it will save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
