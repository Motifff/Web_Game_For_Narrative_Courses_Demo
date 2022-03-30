PImage img0;
PImage img1;
PImage img2;
PImage img3;
PImage img4;
PImage img5;
PImage img6;
PImage img7;
PImage Cloud;

void setup() {

size(1920, 1080);

img0 = loadImage("01.png");
img1 = loadImage("01line.png");
img2 = loadImage("04.png");
img3 = loadImage("04line.png");
img4 = loadImage("02.png");
img5 = loadImage("02line.png");
img6 = loadImage("03.png");
img7 = loadImage("03line.png");
Cloud = loadImage("cloud.png");

}

void draw() {
float mousexslow = map(mouseX,0,1920,-400,0);
float mousexfront = map(mouseX,0,1920,-2000,0);
float mousexmiddle = map(mouseX,0,1920,-1000,0);
float mousexback = map(mouseX,0,1920,-500,0);
float mousexCloud = map(mouseX,0,1920,-3000,0);

  
image(img2, mousexslow, 0);
image(img3, mousexslow, 0);

image(img6, mousexback, 0);
image(img7, mousexback, 0);

image(img4, mousexmiddle, 0);
image(img5, mousexmiddle, 0);

image(img0, mousexfront, 0);
image(img1, mousexfront, 0);

image(Cloud, mousexCloud, 0);
}
