let bluesky;
let nightsky;
let fadeAmount = 0;

function preload() {
   bluesky = loadImage("assets/blue-sky.jpg");
   nightsky = loadImage("assets/night-sky.jpg");
}

function setup() {
    createCanvas(600,600);
}

function draw() {
    image(bluesky, 0, 0);
    image(nightsky,0,0);

bluesky.loadPixels();
nightsky.loadPixels();
let totalPixels = bluesky.width * bluesky.height * 4;

}
  for (let i = 0; i < totalPixels; i += 4) {
bluesky.pixels[i]   = lerp(bluesky.pixels[i],   nightsky.pixels[i],   fadeAmount);
bluesky.pixels[i+1] = lerp(bluesky.pixels[i+1], nightsky.pixels[i+1], fadeAmount);
bluesky.pixels[i+2] = lerp(bluesky.pixels[i+2], nightsky.pixels[i+2], fadeAmount);
bluesky.pixels[i+3]=lerp(bluesky.pixels[i+3],nightsky.pixels[i+3],fadeAmount);
img.updatePixels();
img.pixels[index] = newValue;
img.updatePixels();

  }


  bluesky.updatePixels();
  image(bluesky, 0, 0);
  fadeAmount += 0.01;
  if (fadeAmount > 1) fadeAmount = 1

img.loadPixels();

img.pixels[index] = newValue;

