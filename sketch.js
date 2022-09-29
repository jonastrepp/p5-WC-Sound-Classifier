// The video
let video;
// For displaying the label
let label = "warten...";
// The classifier
let classifier;

let img_Viega;
let img_microphone;
let img_poop;
let img_urine;
let img_wave;

let img_dimensions = 300

// STEP 1: Load the model!
function preload() {
  img_Viega       = loadImage('Images/Viega_Logo.png');
  img_microphone  = loadImage('Images/microphone.png');
  img_poop        = loadImage('Images/poop.png');
  img_urine       = loadImage('Images/dark-urine.png');
  img_wave        = loadImage('Images/wave.png');

  classifier      = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0hIAYnqaF/model.json');
}


function setup() {
  createCanvas(840, 520);
  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify the videeo!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(255);
 
  // Drwa rectangle
  fill(255, 255, 255)
  strokeWeight(4)
  rect(2, 2, width - 4, height - 4, 10)
  image(img_Viega, 15, 15, 100, 80)

  textSize(10);
  fill(0);
  text("Version 0.4", 40, height - 16);

  // STEP 4: Draw the label
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(0);
  text(label, width / 2, height - 48);

  // Pick an emoji, the "default" is train
  let drwan_img = img_microphone //"🎤";
  if (label == "Dick") {
    drwan_img = img_poop //"💩";
  } else if (label == "Dünn") {
    drwan_img = img_urine //"💧";
  } else if (label == "Spülung") {
    drwan_img = img_wave //"🌊";
  }

  // Draw the emoji
  image(drwan_img, width / 2 - img_dimensions / 2 , height / 2 - img_dimensions / 2, img_dimensions, img_dimensions);
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
