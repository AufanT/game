// membangkitkan pilihan komputer
function getCompPick() {
  const comp = Math.random();

  if (comp < 0.33) return "gajah";
  if (comp >= 0.33 && comp <= 0.66) return "semut";
  return "orang";
}

// rules game
function getResult(comp, p) {
  if (p == comp) return "Seri";
  if (p == "gajah") return comp == "semut" ? "Kalah" : "Menang";
  if (p == "semut") return comp == "orang" ? "Kalah" : "Menang";
  if (p == "orang") return comp == "gajah" ? "Kalah" : "Menang";
}

// menangkap pilihan gambar suit user
const suitan = document.querySelectorAll(".user img");

// score awal player dan computer
let playerScore = 0;
let computerScore = 0;

// score kemenangan yang harus dicapai
let winner = 3;

// pengecekan satu persatu setiap pilihan gambar user
suitan.forEach(function (suit) {
  // event ketika user mengeklik pilihan gambar
  suit.addEventListener("click", function () {
    // menangkap function dan id yang ada menjadi variabel
    const compPick = getCompPick();
    const playerPick = suit.id;
    const result = getResult(compPick, playerPick);

    // memgirim pilihan komputer ke interface user
    const imageComp = document.getElementById("komp");
    imageComp.setAttribute("src", "img/" + compPick + ".png");
    const hasil = document.querySelector(".pertandingan");
    hasil.innerHTML = result;

    // pertambahan skor jika ada yg menang
    if (result === "Menang") {
      playerScore++;
    } else if (result === "Kalah") {
      computerScore++;
    }

    // interface pertambahan skor
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;

    // hasil akhir jika batas skor kemenangan tercapai
    if (playerScore === winner || computerScore === winner) {
      if (playerScore === winner) hasil.innerHTML = "You Won!";
      else hasil.innerHTML = "You Lose!";

      // event setelah pemenang ditetapkan
      suitan.forEach((element) => {
        element.style.pointerEvents = "none";
      });
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
  });
});
