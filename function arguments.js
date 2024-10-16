//Function Arguments and Parameters in Javascript

let ary1 = [1, 2, 3, 4]
let ary2 = [4, 5, 6, 7]
let ary3 = [7, 8, 9, 10]


function sumAry(ary){
    let sum = 0
    for(let i = 0; i < ary.length; i++){
        sum += ary[i]
    }
    console.log(sum);
}

sumAry(ary1)
sumAry(ary2)
sumAry(ary3)
// console.log(addAry(ary3));

function testArg(a, b, c){
    console.log(arguments);
}

testArg()
testArg(10, 30, 20)

function testArgs(){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

testArgs()
testArgs(10, 70, 23, 20, 10, 12, 30, 90)


function addAll(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum);
}

addAll(29, 72, 11, 36)
addAll(10, 70, 23, 20, 10, 12, 30, 90)