let gaji = prompt ('Masukkan Total gaji bulanan kamu: ')

//repeat/while baru dimintai terus tanya pengeluaran pakai array dan dilakukan pengurangan.
let biayakeluar = []
let sisa //kita deklarasi sekarang karena kalau nanti didalam looping nanti jadi seperti var lokal
let tanya = prompt ('Ada berapa pengeluaran: ')
for (let i = 1; i <= tanya; i++) {
    biayakeluar [i] = prompt ('Pengeluaran Ke-' + i + " sebesar")
    gaji = gaji - biayakeluar [i]
    console.log (`Pengeluaran ${i} = ${biayakeluar[i]} `)
}
const pajak = 0.1 // 10%
let sisapajak = gaji * pajak
alert (`Pajak Rp ${sisapajak}`)
gaji = gaji - sisapajak
alert (`Sisa uang kamu adalah Rp ${gaji}`)

// berhasil ^____^!!!
