let t = 0;
let pos = 0;

function setup() {
    createCanvas(700, 700);
    noStroke();
    fill(370,100,140);
    recMode(CENTER);
    let movingX = 25;
    let movingY = 15;
  }
  
  function draw() {
    background(25,104, 154);

    
    //translate(350,350);
    for(let x = 0; x <= width; x +=30){

      // rotate(radians(frameCount/2));
       //fill(30, 15);
       //rect(0,0,x,x);

      for(let y = 0; y <height; y+= 30){

        const xAngle = map(mouseX, 0, width, -5 * PI, 6 * PI, true);
        const yAngle = map(mouseX, 0, height, -8 * PI, 6 * PI, true);
        const angle = xAngle * (x/width) + yAngle *(y/height);
        const myX = x + 40 * cos(2 * PI * t + angle);
        const myY = x + 35 * sin(2 * PI * t + angle);
       // fill(random(255), random(255), random(255));
        ellipse(myX, myY, 10);

      }
      fill(random(255), random(255), random(255));
    }
    t = t +0.01;
    pos += radians(2);
  }
