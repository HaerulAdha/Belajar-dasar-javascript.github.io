// Type data pada javascript
//==> String
//==> Number
//==> Boolean
//==> Object
//==> Function
//==> Undifined
// ///////////////
// Operator Pada Javascript ..........
//==> Operator Aritmatika            .
//==> Operator Penugasan             . ===> BInary ==> Membutuhkan 2 operand (operand Operator operand)
//==> Operator Perbandingan          .
//==> Operator Logika                .
//==> String          ................
//==> Kondisional     ................ ==> Ternary ==> Membutuhkan tiga Operand
//==> typeOf          ................ ==> Unary   ==> Membutuhkan satu operand (operand Operator / Operator operand)

// Aritmatika
let angka = 10 + 12;
let number = 11 * 5;
let kukabataku = 20 - 11 / 2 + 3 * 10;
let modulus = 10 % 3;
// Penugasan/asiggnment += -= /=
number = angka -= 10;
let no = (angka += 5);
// perbandingan/comparison == != === !== < > >= <= (mengahasilkan nilai boolean = true atau false)
let bandingkan = 10 === '11';
let bandingkan2 = '11' == 11;
//Logika (menghasilkan nilai boolean = true atau false)
let logic = 10 + 2 == 12 && 100 > 1;
let logic2 = 11 - 1 == 3 || 20 < 50;
// typeOf (mengetahui tipe data apa ?)
let x = typeof ['haertul', 123, true];

// type Data String
// Type Data Boolean
// Variabel

// Control Flow/ Alur kendali
//Pengulangan/While/loop/ ==> (while, for, Do While)

// let lagi = confirm('lanjut');

// let nilaiMahasiswa = parseInt(prompt('masukkan nilai'));

let clk = document.getElementById('btn');
let ulang = Boolean;

clk.addEventListener('click', function () {
  alert('selamat datang');
});

// while (ulang) {
//  console.log('Haerul & Iin');
// }

// for (let awal = 1; awal <= 10; awal++) {
//   console.log('Iin ' + awal);
// }
//   console.log('Hello World');
//   ulang = confirm('lanjut');
// }

// let cetak = function (b, v) {
//   console.log(b, v);
// };

// i.forEach(cetak);

// MAnipulasi Array
let arry = ['Haerul adaha', 'Iin', 'Wahyu', 'Dyan', ['jhon', 'evan', 'vero']];
let ary = [1, 2, 3, 7, 6, 8, 5, 4];
let sor = ary.sort();
console.log(sor);
console.log(arry.join('-'));

// Object Pada Javascript adalah objek tidak ada index
// Kenapa kita pakai object ?
//Membuat objeck secara literal

let obj = {
  nama: 'Haerul',
  umur: 24,
  istri: 'Iin',
  anak: 3,
};
obj.elementBaru = 'ini baru'; //menambah dengan cara mendeklarasikan yang baru
console.log(obj.nama); //mengakses menggunakan titik dengan nama key
obj.umur = 25; //mengubah isi object
console.log(obj['umur']); //mengakses menggunakan kurung siku dengan key strin

// Membuat object menggunakan Function declaration
// kita bisa masukkan key nya kedalam variabel lalu di panggil dengan kurung siku
// Disarankan menggunakan titik untuk mengakses nilai di objeck

//property pada objeck

let siswa = 'haerulIin';

function learn(name) {
  console.log(name + ' Is learning');
}

let guru = 'skyzen';

function teach(name) {
  console.log(name + ' Is Teaching');
}

learn(siswa);
teach(guru);
// Perbedaan mendasar pada function declaration dan function Expretion adalah ==> Declaration mau panggil dulu atau buat dulu bisa, Sedangkan function expretion ==> Harus buat dlu baru Dipanggil contoh =

// FUNCTION DECLARATION > Parameter optional
// dec();
// function dec(/*opsional */) {
//   console.log('Hallo world');
// }

// FUNCTION EXPRETION > Nama/identifier function optional dan parameter juga optional

// let exp = function () /*optional */ {
//   console.log('Selamat datang');
// };
// exp();
