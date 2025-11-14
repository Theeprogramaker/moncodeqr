// ---- COMPTE À REBOURS ----

const playButton = document.getElementById("playBtn");
const targetDate = new Date("2025-11-14T15:00:00").getTime();

const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const music = document.getElementById("music");

// ---- BOUTON ACTIVER LE SON ----
playButton.addEventListener("click", () => {
    music.play();
    playButton.classList.add("hidden");
});

// ---- COMPTE À REBOURS ----
const timer = setInterval(function () {
    let now = new Date().getTime();
    let distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "🎉 C’est l’heure 🎉";

        // Affiche le message
        messageElement.classList.add("show");

        // Affiche le bouton son
        playButton.classList.remove("hidden");

        return;
    }

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

}, 1000);


// ---- ANIMATION CŒURS ----
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💕";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
