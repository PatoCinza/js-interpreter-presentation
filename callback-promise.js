/*
 *  No race condition here
 */


(function Hello() {

    setTimeout( () => {
        console.log('World')
    }, 0)

    Promise.resolve('Hello').then(console.log)

})()