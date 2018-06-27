var xpos = 255;
var ypos = 25;
var xspeed = 2;
var yspeed = 2;
var score = 0;
var xposmouse;

function setup() {
  createCanvas(500, 500);
  noStroke();
  fill(random(255), random(255), random(255), 100);
  rectMode(CENTER);
}

function draw() {
  background(230, 255, 255);
  ellipse(xpos, ypos, 50, 50, 50);

  //Make sure ball doesn't leave canvas
  if (mouseX >= 40 && mouseX <= width - 40) {
    xposmouse = mouseX;
  } else if (mouseX < 40) {
    xposmouse = 40;
  } else if (mouseX > width - 40) {
    xposmouse = width - 40;
  }
  rect(xposmouse, height - 2.5, 60, 5);

  //Make sure ball moves
  xpos += xspeed;
  ypos += yspeed;

  //Make sure ball bounces off of edges
  if (xpos <= 25 || xpos >= width - 25) {
    // Controls speed of the ball
    if (xspeed < 10 && xspeed > -10) {
      xspeed = xspeed * (-1.5);
    } else {
      xspeed = xspeed * (-1.01);
    }
  }
  if (ypos <= 25) {
    // Controls speed of the ball
    if (yspeed < 10 && yspeed > -10) {
      yspeed = yspeed * (-1.5);
    } else {
      yspeed = yspeed * (-1.01);
    }
  }
  //Make ball bounce off of bottom
  if (ypos >= height - 25) {
    if (xpos <= xposmouse + 65 && xpos >= xposmouse - 65) {
      if (yspeed < 10 && yspeed > -10) {
        yspeed = yspeed * (-1.5);
      } else {
        yspeed = yspeed * (-1.01);
      }
      score++;
    // Display "game over" text
    } else {
      textAlign(CENTER);
      textFont("Helvetica");
      textStyle(BOLD);
      textSize(60);
      text("GAME OVER", width / 2, height / 2);
      textSize(35);
      text("SCORE : " + score, width / 2, height / 3);
      noLoop();
    }
  }
}

//Change colors of ball when mouse pressed
function mousePressed() {
  fill(random(255), random(255), random(255), 100);
}
