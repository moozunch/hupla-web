// Tipe data pada Javascript, nggak pelru di declare tipe nya
let nama = 'Moozunch'; //tipe data string
let usia = 18; //tipe data integer number
let tinggi_badan =  161.2; //tipe data float atau double
let beratBadan //tipe data kosong, diisi later
let pacar = null //tipe data null, kosong jugak


// Conditional Statement, mirip cpp 
// 1. Pakai if
/*
if (pacar == null) {
    pacar = "belum punya"
} else {
    pacar = 'udah punya'
} */

// 2. Pakai switch case
switch (pacar) {
    case 1: 
        pacar = 'punya satu'
        break
    case 2: 
        pacar = 'punya dua coyyy laporkann!! wiuwiwu'
        break
    default: //else
        pacar = 'belum punya :b'
        break

}

beratBadan = 120; //dah gaperlu pakai let lagi karena udah di declare diatas
alert ("Halo selamat siang " + nama + " Let's enjoy your " + usia + "!");
alert (`Tinggi badan kamu ${tinggi_badan} Cm, berat badan kamu ${beratBadan} Kg, dan pacar kamu ${pacar}`); //pemakaian variabel di string yang sama dan itu tanda petik yang ada sisebelah angka satu.

let saldoawal = 50000
let saldotambahan = 80000
let saldoakhir = saldoawal + saldotambahan //operatoror masih sama, ada +, -, *, /, %
alert (`saldo awal saya Rp${saldoawal}, saldo tambahan saya Rp${saldotambahan}. Sehingga saldo akhir saya sekarang Rp${saldoakhir}`)
const utang = 70000 
alert (`ternyata kamu punya hutang sebesar Rp${utang}, sehingga uang kamu sekarang sisa Rp${saldoakhir - utang}`) //penulisan langsung tanpa variable but it will e bothersome since we didn't save the data.
let sisa1 = saldoakhir - utang
let pajak = sisa1 * 0.05 //pajak 5%
let sisa2 = sisa1 - pajak
alert(`Dikenakan pajak 5% sehingga sisa uang kamu Rp${sisa2}`)


