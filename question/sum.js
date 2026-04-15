function sumArray(arr){
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}

console.log(sumArray([1,3,44,68,4]));
///*  Write a Program to check if a number is prime or not? */
function isPrime(num){
    if(num<=1)
        return false;
    for(let i=2;i<num;i++){
        if(num%i===0)
            return false
    }
    return true
}
console.log(isPrime(8));
