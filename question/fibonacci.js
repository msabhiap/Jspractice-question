function fibonacci(n){
    if(n===0||n===1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(1));

// let a=0;
// let b=1;
// for(let i=0;i<=5;i++){
//     let temp=a+b;
//     console.log(temp);
    
//     a=b;
//     b=temp;

// }
function fib(n){
    if(n==0||n==1){
        return n;
    }
    return fib(n-1)+(n-2)
}
console.log(fib(6));

let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // O(n log n) on average
console.log(unsorted); 