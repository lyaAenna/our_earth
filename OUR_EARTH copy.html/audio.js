document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;

    // 1. Restore saved timestamp and play state from previous page
    const savedTime = sessionStorage.getItem("forestMusicTime");
    const isPlaying = sessionStorage.getItem("forestMusicPlaying");

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    if (isPlaying === "true") {
        audio.play().catch(() => {
            console.log("Waiting for user click to resume audio.");
        });
    }

    // 2. Save exact timestamp and play state before switching pages
    window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("forestMusicTime", audio.currentTime);
        sessionStorage.setItem("forestMusicPlaying", !audio.paused);
    });
});