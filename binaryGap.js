

//node stuff
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let binaryString = "";
let inputNum = 0;
rl.question("Input your test number:", function(num) {
    inputNum = Number(num);
    rl.close();

    console.log(solution(inputNum));
});


function solution(N) {
    let input = N;
    let count = 0;
    while(input > 0) {
        input = input >> 1;
        count++;
    }
    // get a binary number in string format
    let binaryString = "";
    for(count; count >= 0; count--) {
        let maxPow2 = Math.pow(2, count);
        if((N - maxPow2) >= 0) {
            binaryString += 1;
            N = N - maxPow2;
        } else {
            binaryString += 0;
        }
    }

    let ones = [];
    let maxGap = 0;
    for(let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            ones.push(i);
        }
    }
    if(ones.length < 2) {
        return maxGap;
    }
    for(let i = 0; i < ones.length - 1; i++) {
        currentGap = (ones[i+1] - (ones[i] + 1));
        if(currentGap > maxGap)
            maxGap = currentGap;
    }
    return maxGap;
}