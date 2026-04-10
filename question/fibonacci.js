function fibonacci(n){
    if(n===0||n===1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6));

// let a=0;
// let b=1;
// for(let i=0;i<=5;i++){
//     let temp=a+b;
//     console.log(temp);
    
//     a=b;
//     b=temp;

// }
