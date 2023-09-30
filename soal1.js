const {persegi, persegiPanjang} = require("./module.js")
const prompt = require("prompt-sync")()

const hitungPersegi = persegi(prompt("Masukkan panjang sisi persegi : "))
console.log("Luas persegi adalah : ", hitungPersegi.luas)
console.log("Keliling persegi adalah : ", hitungPersegi.keliling)


const hitungPersegiPanjang = persegiPanjang(parseInt(prompt("Masukkan panjang sisi persegi panjang : ")), parseInt(prompt("Masukkan lebar persegi panjang : ")))
console.log("Luas persegi panjang adalah : ", hitungPersegiPanjang.luas)
console.log("Keliling persegi panjang adalah : ", hitungPersegiPanjang.keliling)