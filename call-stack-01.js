/*
    Utilização da call stack podendo mostrar tail call optimization
*/

(function main() {
    function multiplicacao(a, b) {
        return a * b
    }

    function quadrado(x) {
        return multiplicacao(x, x)
    }

    const valor = quadrado(2)
    console.log(`valor: ${valor}`)
})()





