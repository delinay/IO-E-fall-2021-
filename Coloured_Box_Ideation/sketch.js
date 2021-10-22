let song;

function setup() {
    song = loadSound('assets/assets_sounds_clay.mp3');
    createCanvas(900, 1000);
    background(218, 179, 255);
}

function mousePressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        background(115, 3, 252);
    } else {
        song.play();
        background(218, 179, 255);
    }
}
