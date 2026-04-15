function frequency(elms){
    let freq={}
    for(const items of elms){
        freq[items]=(freq[items]??0)+1
    }
    return freq
}
console.log(frequency([1,2,4,56,799,1,5]));

/* Write a Program to count the occurrences of a character in a string in JavaScript? */
function countStr(str){
    let wordsCount={}
    for(items of str){
        wordsCount[items]=(wordsCount[items]??0)+1
    }
    return wordsCount
}
console.log(countStr("abhijaahh"));

// function countChar(str, char) 
// {
//   return str.split(char).length - 1;
// }

// console.log(countChar('GeeksForGeeks', 'G'));

function splitChracter(str,chr){
 
    return str.split(chr).length-1;
}
console.log(splitChracter('GeeksForGeeks', 'e'));

//splt()
let name="Thise nskjanfn mkas baj"
const name2=name.split(3)
console.log(name2)
