/*
 * Overflow thing
 */

(function overflow() {
    let function1 = () => {
        console.log('f1')
        function2()
        return true
    }

    let function2 = () => {
        console.log('f2')
        function1()
        return true
    }

    function1();
})()