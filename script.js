const startScreen = document.getElementById("startScreen");
const videoScreen = document.getElementById("videoScreen");
const finalScreen = document.getElementById("finalScreen");
const openButton = document.getElementById("openButton");
const openingVideo = document.getElementById("openingVideo");

let opened = false;

openButton.addEventListener("click", async () => {
  if (opened) return;

  opened = true;

  startScreen.classList.remove("active");
  videoScreen.classList.add("active");

  openingVideo.currentTime = 0;

  try {
    await openingVideo.play();
  } catch (error) {
    showFinalScreen();
  }
});

openingVideo.addEventListener("ended", () => {
  showFinalScreen();
});

function showFinalScreen() {
  videoScreen.classList.remove("active");
  finalScreen.classList.add("active");
}