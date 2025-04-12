let music = 0;
function toggleMusic() {
    music = !music;
    if (music) {
        document.getElementById("music-guy").src = "music_on.svg";
        document.getElementById("music-status").innerHTML = "PLAYING";
        document.getElementById("music").play();
    } 
    else {
        document.getElementById("music-guy").src = "music_off.svg";
        document.getElementById("music-status").innerHTML = "PAUSED";
        document.getElementById("music").pause();
    }
}