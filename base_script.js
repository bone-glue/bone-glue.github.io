let music = 0;
function toggleMusic() {
    music = !music;
    if (music) {
        document.getElementById("music-guy").src = "music_on.svg";
    } 
    else {
        document.getElementById("music-guy").src = "music_off.svg";
    }
}