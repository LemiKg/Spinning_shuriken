let character = document.getElementById("character"),
  platform = document.getElementById("platform"),
  position = character.getBoundingClientRect(),
  x = position.top,
  y = position.left,
  speed = 10;

const downKeys = new Set();
const charStyle = character.style;
document.addEventListener("keydown", event => downKeys.add(event.key));
document.addEventListener("keyup", event => downKeys.delete(event.key));

function update() {
  function isDown(key) {
    return downKeys.has(key);
  }

  if (isDown("ArrowDown")) {
    charStyle.top = (y += speed) + "px";
    charStyle.animation = "rotating .05s infinite";
  }
  if (isDown("ArrowUp")) {
    charStyle.top = (y -= speed) + "px";
    charStyle.animation = "rotating .05s infinite";
  }
  if (isDown("ArrowLeft")) {
    charStyle.left = (x -= speed) + "px";
    charStyle.animation = "rotating .05s infinite";
  }
  if (isDown("ArrowRight")) {
    charStyle.left = (x += speed) + "px";
    charStyle.animation = "rotating .05s infinite";
  }
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
