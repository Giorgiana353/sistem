function setup() {
    createCanvas(800, 600);
}
function draw() {
    background("darkblue");
    sistemsolar();
}
function sistemsolar() {

    //orbite
    stroke("white");
    noFill();
    ellipse(400, 300, 180, 120);
    ellipse(400, 300, 280, 180);
    ellipse(400, 300, 380, 220);
    ellipse(400, 300, 480, 320);
    ellipse(400, 300, 580, 420);


    //soare
    fill("yellow");
    circle(400, 300, 50, 50);

    //planeta1
    fill("red");
    circle(230, 250, 50, 50);

    //planeta2
    fill("green");
    circle(635, 300, 60, 60);

    //planeta3
    fill("blue");
    circle(350, 250, 30, 30);

    //planeta4
    fill("orange");
    circle(265, 300, 50, 50);

    //planeta5
    fill("purple");
    circle(650, 400, 70, 70);
}
