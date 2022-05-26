function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//faster function is below because it has less operations
function addUpTo2(n) {
    return n * (n+1)/2
}

var t1 = performance.now();
addUpTo2(100000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)