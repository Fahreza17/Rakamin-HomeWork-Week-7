const persegi = (sisi) => {
    const luas = sisi * sisi
    const keliling = 4 * sisi

    return {luas, keliling}
}

const persegiPanjang = (panjang, lebar) => {
    const luas = panjang * lebar
    const keliling = 2 * (panjang + lebar)

    return {luas, keliling}
}

module.exports = {
    persegi, persegiPanjang
}