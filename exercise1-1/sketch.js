let cat;
let catW;
let catH;
function preload() {
    cat= loadImage("assets/pallas_cat.jpg");
}

function setup() {
    createCanvas(512,410);
    catW = width
    catH=height
   
}

function draw() {
    image(cat, 0, 0,catW,catH);
    
    if (catH<820){
    catW+=1
    catH+=1

    }


}