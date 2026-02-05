/* LOGIN FUNCTION */
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "ritikkalal2408@gmail.com" && password === "ritikklltyuiopsfcm") {
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

/* FATHER PHOTO → DOWNLOAD PDF WHEN CLICKING BOTTOM-CENTER AREA */
function checkDownload(e) {
    // Click position as percentage of viewport
    let xPerc = e.clientX / window.innerWidth;
    let yPerc = e.clientY / window.innerHeight;

    // Bottom-center clickable area (adjust percentages for perfect alignment)
    const leftPerc = 0.50;   // 50% of screen width
    const rightPerc = 0.74;  // 74% of screen width
    const topPerc = 0.75;     // 75% from top of screen
    const bottomPerc = 0.80;  // 80% from top of screen
    cursor: pointer;
    if (xPerc >= leftPerc && xPerc <= rightPerc && yPerc >= topPerc && yPerc <= bottomPerc) {
        // Trigger PDF download
        const link = document.createElement("a");
        link.href = "myfile.pdf";       // path to PDF
        link.download = "myfile.pdf";   // filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
