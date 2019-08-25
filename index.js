function process(testcase){
    let X = testcase[0];
    let A = testcase[1];
    let B = testcase[2];
    let C = testcase[3];
    let time = X;
    let timeChild = []
    timeChild[1] = X;
    let count = 0;
    for (let i = 2; i <20; i++){
        timeChild[i] = A*timeChild[i-1] + B;
        time = timeChild[i];
        for (let j =1; j<=i; j++){
            count += time/timeChild[j];
        }
        if (count >= C){
            break;
        }
    }
    time = timeChild[i]
    return time;
}

function main(args){
    var t = parseInt(args[0]); 
    var X, A, B, C, input;
    var arr_list = [];
    for (let i = 1; i<=t; i++){
        input = args[i].split(" ");
        X = parseInt(input[0]);
        A = parseInt(input[1]);
        B = parseInt(input[2]);
        C = parseInt(input[3]);
        arr_list[i-1] = [X,A,B,C];
    }
    
    // for t th test case
    for (let i = 1; i <= t; i++){
        let time_case = process(arr_list[i]);
        console.log(time_case,"\n");
    }
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input.split("\n"));
});
