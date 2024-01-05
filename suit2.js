function getCompPick() {
  const comp = Math.random();

  if (comp < 0.33) return "gajah";
  if (comp >= 0.33 && comp <= 0.66) return "semut";
  return "orang";
}

function getResult(comp, p) {
  if (p == comp) return "Seri";
  if (p == "gajah") return comp == "semut" ? "Kalah" : "Menang";
  if (p == "semut") return comp == "orang" ? "Kalah" : "Menang";
  if (p == "orang") return comp == "gajah" ? "Kalah" : "Menang";
}

const suitan = document.querySelectorAll(".user img");
let playerScore = 0;
let computerScore = 0;
let winner = 20;

suitan.forEach(function (suit) {
  suit.addEventListener("click", function () {
    const compPick = getCompPick();
    const playerPick = suit.id;
    const result = getResult(compPick, playerPick);

    const imageComp = document.getElementById("komp");
    imageComp.setAttribute("src", "img/" + compPick + ".png");
    const hasil = document.querySelector(".pertandingan");
    hasil.innerHTML = result;

    if (result === "Menang") {
      playerScore++;
    } else if (result === "Kalah") {
      computerScore++;
    }

    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;

    // Tambahkan kondisi untuk menampilkan alert ketika skor mencapai 20
    if (playerScore === winner || computerScore === winner) {
      if (playerScore === winner) {
        hasil.innerHTML = "You Won!";
      } else {
        hasil.innerHTML = 'You Lose!';
      }
      
      
      suitan.forEach((element) => {
        element.style.pointerEvents = "none"; // Menonaktifkan klik pada gambar
      });
      setTimeout(() => {
        location.reload(); // Ini untuk melakukan refresh halaman
      }, 1800); // Delay 1.5 detik sebelum refresh halaman
      
    }
  });
});

// function getCompPick() {
//   const comp = Math.random();

//   if (comp < 0.33) return "gajah";
//   if (comp >= 0.33 && comp <= 0.66) return "semut";
//   return "orang";
// }

// function getResult(comp, p) {
//   if (p == comp) return "Seri";
//   if (p == "gajah") return comp == "semut" ? "Kalah" : "Menang";
//   if (p == "semut") return comp == "orang" ? "Kalah" : "Menang";
//   if (p == "orang") return comp == "gajah" ? "Kalah" : "Menang";
// }

// const suitan = document.querySelectorAll(".user img");

// suitan.forEach(function (suit) {
//   suit.addEventListener("click", function () {
//     const compPick = getCompPick();
//     const playerPick = suit.id;
//     const result = getResult(compPick, playerPick);

//     const computerScore = document.getElementById("computerScore");
//     const playerScore = document.getElementById("playerScore");

//     const imageComp = document.getElementById("komp");
//     imageComp.setAttribute("src", "img/" + compPick + ".png");
//     const hasil = document.getElementById("hasil");
//     hasil.innerHTML = result;
//   });
// });

// const pGajah = document.getElementById("gajah");
// pGajah.addEventListener("click", function () {
//   const compPick = getCompPick();
//   const playerPick = pGajah.id;
//   const result = getResult(compPick, playerPick);

//   const imageComp = document.getElementById("komp");
//   imageComp.setAttribute("src", "img/" + compPick + ".png");

//   const hasil = document.getElementById('hasil');
//   hasil.innerHTML = result;
// });

// const pSemut = document.getElementById("semut");
// pSemut.addEventListener("click", function () {
//   const compPick = getCompPick();
//   const playerPick = pSemut.id;
//   const result = getResult(compPick, playerPick);

//   const imageComp = document.getElementById("komp");
//   imageComp.setAttribute("src", "img/" + compPick + ".png");

//   const hasil = document.getElementById('hasil');
//   hasil.innerHTML = result;
// });

// const pOrang = document.getElementById("orang");
// pOrang.addEventListener("click", function () {
//   const compPick = getCompPick();
//   const playerPick = pOrang.id;
//   const result = getResult(compPick, playerPick);

//   const imageComp = document.getElementById("komp");
//   imageComp.setAttribute("src", "img/" + compPick + ".png");

//   const hasil = document.getElementById('hasil');
//   hasil.innerHTML = result;
// });
