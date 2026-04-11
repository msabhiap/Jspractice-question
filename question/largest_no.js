function largestNum(num){
    let largest=num[0];
    for(let i=0;i<num.length;i++){
            if(num[i]>largest){
                largest=num[i]
            }
    }
    return largest
}
console.log(largestNum([1,23,45,6]));

//another way to fing largest number

function largestNumber(num){
    return Math.max(...num)
}
console.log(largestNum([1,35,78,9]));

//first element