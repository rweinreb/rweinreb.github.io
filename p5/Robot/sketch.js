function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
  }
  function draw() {
  background(204);
  // Neck
  stroke(102); // Set stroke to gray
  line(266, 257, mouseX, mouseY); // Left
  line(276, 257, mouseX, mouseY); // Middle
  line(286, 257, mouseX, mouseY); // Right
  // Antennae
  line(276, 155, mouseX, mouseY); // Small
  line(276, 155, mouseX, mouseY); // Tall
  line(276, 155, mouseX, mouseY); // Medium
  // Body
  noStroke(); // Disable stroke
  fill(102); // Set fill to gray
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill(0); // Set fill to black
  rect(219, 257, 90, 120); // Main body
  fill(102); // Set fill to gray
  rect(219, 274, 90, 6); // Gray stripe
  // Head
  fill(0); // Set fill to black
  ellipse(mouseX, mouseY, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(mouseX, mouseY, 14, 14); // Large eye
  fill(0); // Set fill to black
  ellipse(mouseX, mouseY, 3, 3); // Pupil
  fill(153); // Set fill to light gray
  ellipse(mouseX, mouseY, 5, 5); // Small eye 1
  ellipse(mouseX, mouseY, 4, 4); // Small eye 2
  ellipse(mouseX, mouseY, 3, 3); // Small eye 3
  }