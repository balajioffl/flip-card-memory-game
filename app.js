
const emojis = [
  "🐱", "🐈", "🐈‍⬛", "😺", "😸", "😻",
  "🐱", "🐈", "🐈‍⬛", "😺", "😸", "😻"
];

var shuf_emojis = emojis.sort(() => (Math.random() - 0.5));

const gameContainer = document.createElement("div");
gameContainer.className = "game";
document.querySelector(".container").appendChild(gameContainer);

let timeLeft = 120;
const timerDisplay = document.createElement("div");
timerDisplay.className = "timer";
timerDisplay.innerHTML = `Time Left: ${timeLeft}s`;
document.body.appendChild(timerDisplay);

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.innerHTML = `Time Left: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    alert("Time's up 😸 Try again.");
    location.reload();
  }
}, 1000);

for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuf_emojis[i];

  box.onclick = function () {
    if (this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
      return;
    } else {
      this.classList.add("boxOpen");
    }

    setTimeout(function () {
      let openedBoxes = document.querySelectorAll(".boxOpen");
      
      if (openedBoxes.length == 2) {
        if (openedBoxes[0].innerHTML == openedBoxes[1].innerHTML) {
          openedBoxes[0].classList.add("boxMatch");
          openedBoxes[1].classList.add("boxMatch");
        }

        openedBoxes[0].classList.remove("boxOpen");
        openedBoxes[1].classList.remove("boxOpen");
      }

      if (document.querySelectorAll(".boxMatch").length == emojis.length) {
        clearInterval(countdown); 
        showWinPopup();
      }
    }, 500);
  };
  gameContainer.appendChild(box);
}

function showWinPopup() {
  let popup = document.createElement("div");
  popup.className = "win-popup";
  popup.innerHTML = "<h2>🎉 You Won! 🎉</h2><p>Congratulations!</p>";
  document.body.appendChild(popup);
}

