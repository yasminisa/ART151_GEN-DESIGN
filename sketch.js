// **********************************************************************************
// NAME:     HAJARA-YASMIN ISA
// DATE:     FEBUARY 7 2021
// FILE:     PROJECT 1 GENERATIVE DESIGN
// COURSE:   ART 151 UIC
// **********************************************************************************
//
// ***********************************************************************************
//                             Write up portion
//                      -----------------------------
//  For this project my generative art focuses on the backround. The user
//  can use their mouse to control how the drawing is created my either moving
//  their cursor up or down the screen or left or right. The fading rings
//  ultimately becomes the final product. I also use the concept of symmetry.
//  The symmetry I used is embedded in the rings that make up the drawings. 
//  As the user moves their mouse to create different types of ring configurations
//  all the rings on the screen are also converted to the same configuration. 
//  I have also included a directory with screenshots of some of the different images
//  a user can create with my generative art program. Inorder to create a distinctive
//  image I used an array of colors for the rings to display on a dark backbroung. 
// ************************************************************************************

let t = 0;
let pos = 0;

function setup() {

  alert("  For this project my generative art focuses on the backround. The user\n " + 
   "can use their mouse to control how the drawing is created my either moving \n" + 
   "their cursor up or down the screen or left or right. The fading rings\n" +
    "ultimately becomes the final product. I also use the concept of symmetry\n."+
    "The symmetry I used is embedded in the rings that make up the drawings.\n" + 
    "As the user moves their mouse to create different types of ring configurations\n" +
    "all the rings on the screen are also converted to the same configuration.\n" + 
    "I have also included a directory with screenshots of some of the different images\n" +
    "a user can create with my generative art program. Inorder to create a distinctive\n" +
    "image I used an array of colors for the rings to display on a dark backbroung. ");
    
    createCanvas(700, 700);
    noStroke();
    fill(370,100,140);
    recMode(CENTER);
    let movingX = 25;
    let movingY = 15;
  }
  
  function draw() {
   
    background(25,1);

    
    //translate(350,350);
    for(let x = 0; x <= width; x +=30){

      rotate(radians(frameCount/24));
       //fill(30, 15);
       //rect(0,0,x,x);

      for(let y = 0; y <height; y+= 30){

        const xAngle = map(mouseX, 0, width, -5 * PI, 6 * PI, true);
        const yAngle = map(mouseX, 0, height, -8 * PI, 6 * PI, true);
        const angle = xAngle * (x/width) + yAngle *(y/height);
        const myX = x + 40 * cos(2 * PI * t + angle);
        const myY = x + 35 * sin(2 * PI * t + angle);
       //fill(random(255), random(255), random(255));
        ellipse(myX, myY, 10);

      }
      fill(random(255), random(255), random(255));
    }
    t = t +0.01;
    pos += radians(2);
  }
