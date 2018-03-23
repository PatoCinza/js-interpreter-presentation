/*
    Referência cíclica (ih, rapaz)
*/

(function criaCiclo() {
    var objeto1 = {}
    var objeto2 = {}

    objeto1.filho = objeto2
    objeto2.filho = objeto1

    console.log(objeto1)
    console.log(objeto2)
})()