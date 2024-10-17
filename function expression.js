//Function Expression in JavaScript

let addition = function add(a, b){
    return a+b
}
console.log(addition(5, 7)); 

setTimeout(() => {
    console.log('I will call after 2 second');
}, 2000);

let another = addition
console.log(another(8, 7)); 
