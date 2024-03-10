Cascading Style Sheet 
semua pembagian juga berdasar html tag, karena bisa aja kaya gini
from this: 
<h1> Halo Dunia </h1>, mau diubah warnanya jadi hijau misalnya

1. Inline CSS, di attribute nya html tag
<h1 style = "font-size:30px; color:green;"> Halo Dunia </h1>
Tapi ga disarankan, karena susah di maintain (apalagi kalau ada atribute lainnya jadi campur aduk), dan ga efisien

2. Internal CSS, di tag <style> di head
<style>
    h1 {
        font-size: 30px;
        color: green;
    }
</style>

3. External CSS, di file css terpisah
<style>
    h1 {
        font-size: 30px; 
        color: green;
    }
    </style> - ini di file css
    <link rel="stylesheet" href="satu.css"> - ini di file html
    
    ----
    Breakdown:
    <style>
        h1 { - H1 nya disebut sebagai selector nya ini, didalam kurunng kurawal disebut declaration, tiap style dipisahi titik koma
            font-size: 30px; -font-size disebut property
            color: green; -green disebut valuenya
        }
