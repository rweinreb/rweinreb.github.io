var input;
var analyzer;

function setup() {
  createCanvas(400, 400);
  background(255);

  input = new p5.AudioIn();

  input.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var volume = input.getLevel();
	r=random(200);
	g=random(200);
	b=random(200)

  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  var threshold = 0.001;
  if (volume > threshold) {
    stroke(r,g,b);
    fill;(r,g,b)
    ellipse(random(40, width), random(height), volume*50, volume*50);
  }

  // Graph the overall potential volume, w/ a line at the threshold
  var y = map(volume, 0.001, 1, height, 0);
  var ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle on the graph, sized according to volume
  fill(r,g,b);
  ellipse(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
}