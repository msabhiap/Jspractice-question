function sum(n){
    if(n===0){
        return 0
    }
    return n + sum(n-1)
}
console.log(sum(2));

// function sum(n){
//     if(n===0){
//         return `DOne`
//     }
//     n=Math.floor(n/2)
//     return sum
// }
// console.log(sum(2));

//factorial of n
function recusrsionFactorial(num){
    if(num===0||num===1){
        return 1;
    }
    return num*recusrsionFactorial(num-1)
}
console.log(recusrsionFactorial(5));

function factorial(n){
    return n<=0?1:n*factorial(n-1)
}
console.log(factorial(3));
