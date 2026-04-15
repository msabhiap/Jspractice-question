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

//remove first element

let arr=[5,6,7]
arr=arr.slice(1)
console.log(arr);
