const video = document.getElementById('triangleVideo');
const button = document.getElementById('playPauseButton');

button.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        button.innerHTML = '<svg viewBox="0 0 253 290"><path d="M156.667 0.555176H252.5V289.444H156.667V0.555176Z" fill="white"/><path d="M0.368164 0.555176H96.2012V289.444H0.368164V0.555176Z" fill="white"/></svg>';
    } else {
        video.pause();
        button.innerHTML = '<svg viewBox="0 0 263 304"><path d="M262.732 151.83L0.368164 303.306V0.354492L262.732 151.83Z" fill="white"/></svg>';
    }
});