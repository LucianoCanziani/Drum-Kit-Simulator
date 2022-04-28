function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

const drumkit = document.querySelector(".keys");

function playDrum(event) {
if (event.target.classList.contains("audio")) {
    event.preventDefault();
    const audio = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key="${event.target.dataset.key}"]`);
    if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  }
}
drumkit.addEventListener("click", playDrum);