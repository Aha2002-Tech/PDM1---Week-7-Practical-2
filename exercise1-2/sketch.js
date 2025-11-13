
let sky;
let plane ;
let x1=25;
let y1=100;


let x2=50;
let y2=200;
function preload() {
sky =loadImage("assets/blue-sky.jpg");
plane =loadImage("assets/plane.png")
   
}

function setup() {
    createCanvas(sky.width, sky.height);
}

function draw() {
    image(sky, 0, 0);
    image (plane,x1,y1);
    image(plane,x2,y2)
    if  (x1<820){
    x1+=1
    y2+=1
    }

    
}