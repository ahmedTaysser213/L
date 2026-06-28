let yescount = 0;

document.getElementById("dateInput").style.display = "none";
document.getElementById("yes").addEventListener("click", function() {
    const dateInput = document.getElementById("dateInput");

    // Check if the date input is visible and empty
    if (dateInput.style.display === "block" && !dateInput.value) {
        alert("Nigga choose a date first");
        return; // Stops the rest of the code from firing
    }

    document.getElementById("head").textContent = "REALLY???!";
    document.getElementById("kiss").src = "yes!.gif";
    yescount++;
    document.getElementById("no").textContent = "Nah i was joking";
    document.getElementById("yes").textContent = "u sure?";
    document.getElementById("dateInput").style.display = "none";
    
    if (yescount >= 2) {
        document.getElementById("head").textContent = "Aww u love me :3";
        document.getElementById("kiss").src = "cute.gif";
        document.getElementById("yes").textContent = "heh yes i do";
        document.getElementById("dateInput").style.display = "none";
        
    } if (yescount >= 3) {
        document.getElementById("head").textContent = "So WHEN ARE WE GOING OUT!!";
        document.getElementById("kiss").src = "ow.gif";
        document.getElementById("yes").textContent = "Let me think";
        document.getElementById("dateInput").style.display = "none";
    } if (yescount >= 4) {
        document.getElementById("head").textContent = "CHOSE A DATE";
        document.getElementById("kiss").src = "wait.gif";
        document.getElementById("yes").textContent = "Done";
        document.getElementById("no").style.display = "none";
        document.getElementById("dateInput").style.display = "block";
    } if (yescount >= 5) {
        document.getElementById("head").textContent = "DATE SET! i am too lazy to finish everything else.";
        document.getElementById("yes").style.display = "none";
        document.getElementById("dateInput").style.display = "none";
    }
});

const noBtn = document.getElementById("no");

// This function handles the teleportation logic
function flyAway() {
    // Converts layout mode to fixed ONLY when they try to touch/hover it
    if (noBtn.style.position !== "fixed") {
        noBtn.style.position = "fixed";
    }

    // Using window limits ensures it bounds completely across mobile screen sizes
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// 1. For Desktop: Runs away when hovered
noBtn.addEventListener("mouseover", flyAway);

// 2. For Mobile: Runs away the split second a finger touches the screen
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault(); // Prevents accidental double-triggering or zooming on mobile
    flyAway();
});

// 3. Backup for Mobile: If they manage to click/tap it, it still flies away
noBtn.addEventListener("click", function(e) {
    e.preventDefault();
    flyAway();
});