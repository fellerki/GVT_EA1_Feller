const disk = document.getElementById("rotating-disk");
let currentFrame = 0;
const totalFrames = 23; // Anzahl Frames im Sprite-Sheet

function updateFrame() {
  const frameWidth = 683; // Breite Scheibe
  const frameHeight = 683; // Höhe Scheibe
  const row = Math.floor(currentFrame / 6); // Reihen im Sprite Sheet
  const col = currentFrame % 6; // Spalten im Sprite Sheet

  disk.style.transform = `translate(-${col * frameWidth}px, -${row * frameHeight}px)`;
}

document.getElementById("left").addEventListener("click", moveLeft);
document.getElementById("right").addEventListener("click", moveRight);

function moveLeft() {
  currentFrame = (currentFrame - 1 + totalFrames) % totalFrames;
  updateFrame();
}

function moveRight() {
  currentFrame = (currentFrame + 1) % totalFrames;
  updateFrame();
}

// Automatische Animation bei Taste "a", dreht nach rechts
let animating = false;
let animationInterval;

function toggleAnimation() {
  if (animating) {
    clearInterval(animationInterval);
  } else {
    animationInterval = setInterval(moveRight, 80); // Geschwindigkeit der Animation
  }
  animating = !animating;
}

document.getElementById("toggle-animation").addEventListener("click", toggleAnimation);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case 'l':
      moveLeft();
      break;
    case 'r':
      moveRight();
      break;
    case 'a':
      toggleAnimation();
      break;
    default:
      break;
  }
})

const partyHat = document.getElementById("party-hat");
let currentFrameHat = 0;
const totalFramesHat = 7; // Anzahl Frames Partyhut
const frameWidthHat = 292; // Breite Partyhut

function updateFrameHat() {
  const row = 0; // Sprite Sheet hat nur eine Reihe
  partyHat.style.transform = `translate(-${currentFrameHat * frameWidthHat}px, -${row * 512}px)`;
}

function moveRightHat() {
  currentFrameHat = (currentFrameHat + 1) % totalFramesHat;
  updateFrameHat();
}

document.getElementById("toggle-partyhat").addEventListener("click", toggleAnimationHat);

let animatingHat = false;
let animationIntervalHat;

function toggleAnimationHat() {
  if (animatingHat) {
    clearInterval(animationIntervalHat);
  } else {
    animationIntervalHat = setInterval(moveRightHat, 80); // Geschwindigkeit der Animation
  }
  animatingHat = !animatingHat;
}
