/*
 * Not overflow thing
 */

(function notOverflow() {
    let function1 = () => {
        console.log('f1')
        return function2()
    }

    let function2 = () => {
        console.log('f2')
        return function1()
    }

    function1();
})()