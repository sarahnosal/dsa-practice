//Write a function that counts down from a given number

function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(5)