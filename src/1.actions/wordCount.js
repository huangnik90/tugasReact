export const hitungKata = (str) => {
    var word = str.split(" ")
    var result = word.length - 1
    return {
        type: "HITUNG_KATA",
        payload: result
    }
}