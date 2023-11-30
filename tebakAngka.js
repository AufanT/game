// menangkap pilihan komputer
// membangkitkan bilangan random
var maxNumber = 10;
var AngkaBoom = Math.floor(Math.random() * maxNumber) + 1;
var canceled = false; // Mengatur variabel untuk mengecek apakah permainan dibatalkan

// jumlah tebakan

for ( var i = 3; i > 0; i-- ) {
  // menangkap pilihan player
  var player = prompt(`Angka Boom 1-10 \nAnda memiliki ${i} kali percobaan`);

  if (player === null) {
    canceled = true; // Mengubah status menjadi permainan dibatalkan
    break;
  }
  
  var result = "";
  
  // rules
  if (player == AngkaBoom) {
    alert('BOOM!');
    alert(`Selamat, Anda Menang!`);
    break;
  } else if (player < 1 || player > 10 || isNaN(player)) {
    result = "Mohon masukkan Angka 1-10";
  } else if (player > AngkaBoom) {
    result = "Tebakan Anda Terlalu Tinggi";
  } else if (player < AngkaBoom) {
    result = "Tebakan Anda Terlalu Rendah";
  }

  //hasil
  alert(result);

  // membuat ucapan ketika player langsung menjawab dengan benar
  if ( i > 1) {
    alert(`Sisa percobaan anda tinggal ${i - 1}`)
  } else {
    alert(`Angka BOOM-nya adalah ${AngkaBoom}`)
  }
}

alert("Terimakasih sudah bermain!");

