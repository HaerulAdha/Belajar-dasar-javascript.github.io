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

console.log(no);
console.log(number);
console.log(kukabataku);
console.log(modulus);
console.log(bandingkan2);
console.log(logic2);
