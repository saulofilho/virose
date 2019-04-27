var blobs = []
var slider;
var slider2;
var slider3;
var mask;

function setup() {
    let canvas = createCanvas(550, 600);
    canvas.parent('myContainer');
    colorMode(HSB);
    for(i = 0; i < 10; i++) blobs.push(new Blob(random(0, width), random(0, height)));
    slider = createSlider(-200, 200, 0, 0.01);
    slider.parent('myInputs');
    slider.class('inputs');
    slider2 = createSlider(-100, 100, 50, 0.01);
    slider2.parent('myInputs');
    slider2.class('inputs');
    slider3 = createSlider(-100, 100, 10, 0.01);
    slider3.parent('myInputs');
    slider3.class('inputs');
}

function windowResized() {
    resizeCanvas(450, 450);
  }

function draw() {
    var val = slider.value();
    var val2 = slider2.value();
    var val3 = slider3.value();

    loadPixels();
    for(x = 0; x < width; x++) {
        for(y = 0; y < height; y++) {
            let sum = val;
            for(i = 0; i < blobs.length; i++) {
                let xdif = x - blobs[i].x;
                let ydif = y - blobs[i].y;
                let d = sqrt((xdif*xdif) + (ydif*ydif));
                sum += random(val2, val3) * blobs[i].r/d;
            }
            set(x, y, color(sum, 255, 255));
        }
    }
    updatePixels();

    for(i = 0; i < blobs.length; i++) {
        blobs[i].update();
    }

}