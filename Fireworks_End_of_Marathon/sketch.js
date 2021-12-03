// RESPECTED SOURCE CODE // Daniel's website: http://codingtrain

// Video coding of the fireworks: https://youtu.be/6z7GQewK-Ks

var fireworks = [];
var gravity;
var launch = [];
var sound;

function preload() {
    xplosionSound = loadSound("xplosion.mp3");
    launchSound = loadSound("launch.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(50);
    xplosionSound.setVolume(0.5);
    launchSound.setVolume(0.05);
    gravity = createVector(0, 0.08);
    stroke(255);
    strokeWeight(4);
    var sparkColor;
    for (i = 0; i < 100; i++) {
        launch[i] = false;
    }

    position = 0;
    launchTime = 100;
    ora = color(255, 165, 0);
    blu = color(0, 100, 255);
    pin = color(255, 105, 180);
}

function draw() {
    background(0, 64, 128);

    // SPEED FROM -6 TO -9

    sparkColor = ora;
    speed = -7.5;
    if (millis() > launchTime && launch[0] == false) {
        for (i = width / 5; i < width; i += width / 5) {
            fireworks.push(new Firework(sparkColor, i, speed));
            launch[0] = true;
            launchTime += 600;
        }
    }


    speed = -8;
    sparkColor = ora;
    if (millis() > launchTime && launch[1] == false) {
        for (i = width / 4; i < width; i += width / 4) {
            fireworks.push(new Firework(sparkColor, i, speed));
            launch[1] = true;
            launchTime += 200;
        }
    }


    speed = -8.5;
    if (millis() > launchTime && launch[2] == false) {
        for (i = width / 6; i < width; i += width / 6) {
            fireworks.push(new Firework(sparkColor, i, speed));
            launch[2] = true;
            launchTime += 500;
        }
    }

    sparkColor = blu;
    speed = -7.5;
    if (millis() > launchTime && launch[3] == false) {
        for (i = width / 10; i < width; i += width / 10) {
            fireworks.push(new Firework(sparkColor, i, speed));
            launch[3] = true;
            launchTime += 500;
        }
    }

    sparkColor = blu;
    speed = -7.5;
    if (millis() > launchTime && launch[3] == false) {
        for (i = 50; i < width - 100; i += 50) {
            fireworks.push(new Firework(sparkColor, i, speed));
            launch[3] = true;
            launchTime += 200;
        }
    }


    sparkColor = pin;
    speed = -8;
    if (millis() > launchTime && launch[4] == false) {
        fireworks.push(new Firework(sparkColor, width / 10, speed));
        launch[4] = true;
        launchTime += 300;
    }


    if (millis() > launchTime && launch[5] == false) {
        fireworks.push(new Firework(sparkColor, 2 * width / 10, speed));
        launch[5] = true;
        launchTime += 400;
    }


    if (millis() > launchTime && launch[6] == false) {
        fireworks.push(new Firework(sparkColor, 3 * width / 10, speed));
        launch[6] = true;
        launchTime += 100;
    }

    if (millis() > launchTime && launch[7] == false) {
        fireworks.push(new Firework(sparkColor, 4 * width / 10, speed));
        launch[7] = true;
        launchTime += 500;
    }

    if (millis() > launchTime && launch[8] == false) {
        fireworks.push(new Firework(sparkColor, 5 * width / 10, speed));
        launch[8] = true;
        launchTime += 500;
    }

    if (millis() > launchTime && launch[9] == false) {
        fireworks.push(new Firework(sparkColor, 6 * width / 10, speed));
        launch[9] = true;
        launchTime += 200;
    }

    if (millis() > launchTime && launch[10] == false) {
        fireworks.push(new Firework(sparkColor, 7 * width / 10, speed));
        launch[10] = true;
        launchTime += 100;
    }

    if (millis() > launchTime && launch[11] == false) {
        fireworks.push(new Firework(sparkColor, 8 * width / 10, speed));
        launch[11] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[12] == false) {
        fireworks.push(new Firework(sparkColor, 9 * width / 10, speed));
        launch[12] = true;
        launchTime += 1000;
    }

    sparkColor = color(124, 252, 0);
    if (millis() > launchTime && launch[13] == false) {
        fireworks.push(new Firework(sparkColor, 9 * width / 10, speed));
        launch[13] = true;
        launchTime += 300;
    }


    if (millis() > launchTime && launch[14] == false) {
        fireworks.push(new Firework(sparkColor, 8 * width / 10, speed));
        launch[14] = true;
        launchTime += 300;
    }


    if (millis() > launchTime && launch[15] == false) {
        fireworks.push(new Firework(sparkColor, 7 * width / 10, speed));
        launch[15] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[16] == false) {
        fireworks.push(new Firework(sparkColor, 6 * width / 10, speed));
        launch[16] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[17] == false) {
        fireworks.push(new Firework(sparkColor, 5 * width / 10, speed));
        launch[17] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[18] == false) {
        fireworks.push(new Firework(sparkColor, 4 * width / 10, speed));
        launch[18] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[19] == false) {
        fireworks.push(new Firework(sparkColor, 3 * width / 10, speed));
        launch[19] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[20] == false) {
        fireworks.push(new Firework(sparkColor, 2 * width / 10, speed));
        launch[20] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[21] == false) {
        fireworks.push(new Firework(sparkColor, width / 10, speed));
        launch[21] = true;
        launchTime += 2000;
    }
    if (millis() > launchTime && launch[22] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 10 * width / 11, speed));
        launch[22] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[23] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 2 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 9 * width / 11, speed));
        launch[23] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[24] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 3 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 8 * width / 11, speed));
        launch[24] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[25] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 4 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 7 * width / 11, speed));
        launch[25] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[26] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 5 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 6 * width / 11, speed));
        launch[26] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[27] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 6 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 5 * width / 11, speed));
        launch[27] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[28] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 7 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 4 * width / 11, speed));
        launch[28] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[29] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 8 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 3 * width / 11, speed));
        launch[29] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[30] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 9 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, 2 * width / 11, speed));
        launch[30] = true;
        launchTime += 300;
    }

    if (millis() > launchTime && launch[31] == false) {
        sparkColor = color(255, 0, 0);
        fireworks.push(new Firework(sparkColor, 10 * width / 11, speed));
        sparkColor = color(0, 0, 255);
        fireworks.push(new Firework(sparkColor, width / 11, speed));
        launch[31] = true;
        launchTime += 300;
    }

    for (i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}
