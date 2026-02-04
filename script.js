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
/* FATHER PHOTO → DOWNLOAD PDF WHEN CLICKING SPECIFIC AREA */
function checkDownload(e) {
    let x = e.clientX;
    let y = e.clientY;

    // Define the clickable area at bottom center
    // For 360px width and 800px height
    // You can adjust width/height of the clickable area to match menu image
    const areaWidth = 80;   // clickable width
    const areaHeight = 50;  // clickable height
    const centerX = 180;    // center X of the screen (360 / 2)
    const bottomY = 750;    // bottom center Y (adjust to fit your image)

    const leftX = centerX - areaWidth / 2;
    const rightX = centerX + areaWidth / 2;
    const topY = bottomY - areaHeight / 2;
    const bottomYArea = bottomY + areaHeight / 2;

    if (x >= leftX && x <= rightX && y >= topY && y <= bottomYArea) {
        // Trigger download
        const link = document.createElement("a");
        link.href = "myfile.pdf";       // path to PDF
        link.download = "myfile.pdf";   // filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
