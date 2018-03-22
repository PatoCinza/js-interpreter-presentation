setTimeout(function() {
    console.log("Timeout 1");
    process.nextTick(function() {
        console.log("Next tick 1");
    });
}, 0);
setTimeout(function() {
    console.log("Timeout 2");
    setImmediate(function() {
        console.log("SetImmediate 1");
    });
}, 0);
setTimeout(function() {
    console.log("Timeout 3");
}, 0);