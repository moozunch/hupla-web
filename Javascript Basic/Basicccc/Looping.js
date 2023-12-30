//example without loop, mau membuat perintah ini diulang tiga kali
console.log ('Nama saya moozunch')
console.log ('Nama saya moozunch')
console.log ('Nama saya moozunch')
// for loop, mirip c++ 
// for (inisialisasi; kondisi; increment/dec)
// dibaca dari (inisialisasi) jika (kondisi) maka akan dilakukan (in/de-crement)
console.log ('For Loop============')
for (let i = 1; i <= 5; i++) {
    console.log ("perulangan ke-" + i)
}

// gabungin dengan array
let namasiswa = ['Kairi', 'Tania', 'Jordi']
// console.log (namasiswa) //tidak efektif instead pakai for saja
console.log (namasiswa.length) //untuk mengetahui panjang array nya
for (let j = 0; j < namasiswa.length/* jadi array dinamis sesuai panjang array */; j++) {
    //console.log (`Nama siswa-` + j + namasiswa[j]) //gini boleh
    console.log (`Nama siswa-` + j + ` ${namasiswa[j]}`) //gini juga boleh
}

// While Loop
console.log ('While Loop============')
let namahewan = ['Gajah', 'Kanguru', 'Belalang']
let x = 0 //inisialisasi
while (x < 3) {
    console.log (`Nama hewan-` + x + ` ${namahewan[x]}`)
    x++
}

console.log ('Do While Loop============')
let y = 0;
let namabuah = ['Semangka', 'Markisa', 'Nanas', 'Alpukat']
do {
    console.log (`Nama Buah-` + y + ` ${namabuah[y]}`)
    y++
    //ingat do while bakal ada minimal sekali karenna dia dilakukan dulu baru di check
} while (y < namabuah.length)