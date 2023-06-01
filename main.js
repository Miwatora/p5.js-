function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(255,192,203);
    stroke(255,192,203);
    circle(50, 50, 90);

    fill(255,192,203);
    stroke(255,192,203);
    circle(590, 50, 90);

    fill(255,192,203);
    stroke(255,192,203);
    circle(50, 430, 90);

    fill(255,192,203);
    stroke(255,192,20);
    circle(590, 430, 90);
}

function take_snapshot(){
    save('Miwa_Suzuki.png');
}