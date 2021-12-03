// Inspired by Generative Design right source via http://www.generative-gestaltung.de/2/ //

/**
 * moving corners of rectangles in a grid
 *
 * MOUSE
 * position x          : corner position offset x
 * position y          : corner position offset y
 * left click          : random position
 *
 * KEYS
 * s                   : save png
 */
'use strict';

var tileCount = 21;
var actRandomSeed = 5;
var rectSize = 15;

function setup() {
    createCanvas(740, 160);
    colorMode(HSB, 360, 100);
    noStroke(230, 179, 255);
    fill(20, 79, 255);
}

function draw() {
    clear();

    randomSeed(actRandomSeed);

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            var shiftX1 = mouseX / 20 * random(-1, 1);
            var shiftY1 = mouseY / 20 * random(-1, 1);
            var shiftX2 = mouseX / 20 * random(-1, 1);
            var shiftY2 = mouseY / 20 * random(-1, 1);
            var shiftX3 = mouseX / 20 * random(-1, 1);
            var shiftY3 = mouseY / 20 * random(-1, 1);
            var shiftX4 = mouseX / 20 * random(-1, 1);
            var shiftY4 = mouseY / 20 * random(-1, 1);

            push();
            translate(posX, posY);
            beginShape();
            vertex(shiftX1, shiftY1);
            vertex(rectSize + shiftX2, shiftY2);
            vertex(rectSize + shiftX3, rectSize + shiftY3);
            vertex(shiftX4, rectSize + shiftY4);
            endShape();
            pop();
        }
    }
}

function mousePressed() {
    actRandomSeed = random(1000);
}

function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
