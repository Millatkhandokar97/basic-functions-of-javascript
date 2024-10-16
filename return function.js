// Return function in javascript
function addAll(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

let result = addAll(29, 72, 11, 36)
console.log(result);

console.log(addAll(10, 70, 23, 20, 10, 12, 30, 90)); 