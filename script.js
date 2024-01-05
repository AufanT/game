var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("masukkan : Gajah, Semut, atau Orang");

  // menangkap pilihan komputer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "Semut";
  } else {
    comp = "Orang";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri";
  } else if (p == "Gajah") {
    hasil = (comp == "Semut") ? "Kalah" : "Menang";
  } else if (p == "Semut") {
    hasil = (comp == "Orang") ? "Kalah" : "Menang";
  } else if (p == "Orang") {
    hasil = (comp == "Gajah") ? "Kalah" : "Menang";
  } else {
    hasil = "Anda memasukkan pilihan yang tidak sesuai";
  }

  // hasil
  alert(`Pilihanmu: ${p} \nPilihan AI: ${comp} \nPertandingan: Anda ${hasil}`);

  tanya = confirm("Try again?");
}

alert("Terimakasih sudah bermain");
