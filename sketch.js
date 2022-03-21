let butterflies = [];

function setup() {
    createCanvas(displayWidth, displayHeight);
}

function mouseDragged() {
    let r = random(40, 60);
    let b = new Butterfly(mouseX, mouseY, r);
    butterflies.push(b);
}

function draw() {
    background(0);
    butterflies.forEach(butterfly => {
        if ((butterfly.y > height || butterfly.y < 0) || (butterfly.x > width || butterfly.x < 0)) {
            butterflies.splice(butterflies.indexOf(butterfly), 1)
            console.log(butterflies.length + " butterflies")
        } else {
            butterfly.move();
            butterfly.show();
        }
    });
}

class Butterfly {
    constructor(tempX, tempY, tempRadius) {
        this.x = tempX;
        this.y = tempY;
        this.radius = tempRadius;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y - random(7, 13);
    }

    show() {
        stroke(random(1, 255), random(1, 255), random(1, 255)); // Zufalls-Rahmenfarben
        strokeWeight(4);
        fill(255, 160);
        textSize(this.radius)
        text("🦋", this.x, this.y);
    }
}