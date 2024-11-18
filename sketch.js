
//Variables for Song
let song;
let isPlaying = false; 
let startTime;

var mic;
var amp;
var scale = 1;
//Variables for Drawing
var angle = 0.0;
var offset = 10;
var scalar = 20;
var speed = 0.05;
var fade;
var fadeAmount = 0.01;


function preload() {
    song = loadSound('DANDADAN.mp3');
    
}

function setup() {
    
    let cvn = createCanvas(300, 500);
    background(200);

    mic = new p5.AudioIn();
    mic.start();
    amp = new p5.Amplitude();
    amp.setInput(mic);


    cvn.mousePressed(canvasPressed);

    textAlign(CENTER);
    textWrap(WORD);
    textLeading(50);
    textSize(16);
    fill(250);
    text('Otonoke by Creepy Nuts', 50, 50, 200);
    textSize(10);
    fill(100);
    text('click to start', 100, 75, 100)

    fade = 0;

}

function canvasPressed() {
    if(!isPlaying){
        song.play(0, 0, 1);
    
        isPlaying = true;
    }


}


function draw(){
    rectMode(CORNER);
    //trying to get squares to fade with amp
    fill(0, 0, 0, fade);
    if (fade < 0){
        fadeAmount = 0.03;
    }
    if (fade > 255){
        fadeAmount = -10;
    }
    fade += fadeAmount;

    rect(0, 0, width, height);
    scale = map(amp.getLevel(), 0, 1.0, 10, width);

    //moving squares using sin()
    var y1 = offset + sin(angle) * (scalar + scale);
    var y2 = offset + sin(angle + 0.4) * (scalar + scale);
    var y3 = offset + sin(angle + 0.8) * (scalar + scale);
    var y4 = offset + sin(angle + 1.2) * (scalar + scale);
    var y5 = offset + sin(angle + 1.6) * (scalar + scale);

    rectMode(CENTER);
    noStroke();
    let red = map(amp.getLevel(), 0, 1, 0, 255);
    fill(red, 47, 47, fade);


    rect(50, y1 + 280, scale - 5, scale - 5);
    rect(75, y1 + 280, scale - 5, scale - 5);
    rect(100, y2 + 280, scale - 2.5, scale - 2.5);
    rect(125, y2 + 280, scale - 2.5, scale - 2.5);
    rect(150, y3 + 280, scale, scale);
    rect(175, y4 + 280, scale - 2.5, scale - 2.5);
    rect(200, y4 + 280, scale - 2.5, scale - 2.5);
    rect(225, y5 + 280, scale - 5, scale - 5);
    rect(250, y5 + 280, scale - 5, scale - 5);
 
    angle += speed;
  
}
