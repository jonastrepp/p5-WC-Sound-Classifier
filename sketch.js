// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0hIAYnqaF/model.json');
}


function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify the videeo!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = "🎤";
  if (label == "Dick") {
    emoji = "💩";
  } else if (label == "Dünn") {
    emoji = "💧";
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
}


// Open up your console - if everything loaded properly you should see the version number 
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
console.log('ml5 version:', ml5.version);
