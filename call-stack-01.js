/*
    Utilização da call stack podendo mostrar tail call optimization
*/

(function main() {
    function multiplicacao(a, b) {
        return a * b
    }

    function exponenciacao2(x) {
        return multiplicacao(x, x)
    }

    const valor = exponenciacao2(2)
    console.log(`valor: ${valor}`)
})()
