// MUSIC SCRIPT 
let musicLog = 1;
let hip = new Audio('/audio/hip.mp3');

function playMusic() {
    hip.volume = .02;
    hip.play();
    hip.loop = true;
}
playMusic();

function musicSwitch() {
    if (musicLog == 1) {
        document.getElementById('switch-text').value = "Off";
        hip.pause();
        musicLog = 0;
        return musicLog;
    } else if (musicLog == 0) {
        document.getElementById('switch-text').value = "On";
        musicLog = 1;
        hip.play();
        return musicLog;
    }
}

// SOCIAL MEDIA SCRIPT

function socialBtn(num) {
    if (num == 1) {
        window.location.assign("https://github.com/Michael-07Y");
    } else if (num == 2) {
        window.location.assign("https://www.instagram.com/skyzerbefr/");
    } else if (num == 3) {
        window.location.assign("https://twitter.com/SkyzerNetworks");
    } else if (num == 4) {
        window.location.assign("https://www.tiktok.com/@skyzerbefr");
    } else {
        console.log("Error 404 | Redirect Issue!");
    }
}