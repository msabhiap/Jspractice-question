/* All Practical Use Cases of reduce() */
//sum numbers
const nums=[1,2,3,4]
const sums=nums.reduce((acc,num)=>acc+num)
console.log(sums);
//multiply all
const multiply=[1,2,3,4,8]
const newmul=multiply.reduce((acc,multiply)=>acc*multiply)
console.log(newmul);
console.log(multiply);
//max valuess
const nums1=[1,23,4,6,78,45]
const max=nums1.reduce((a,b)=>a>b?a:b)
console.log(max);
//count occurance

const fruits=["apple","banana","orange","apple","apple","banana"]
const counts=fruits.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit]??0)+1;
    return acc
},{})
console.log(counts);

//Groups items bby properties
const people=[
    { name: "Alice", role: "Admin" },
    { name: "Bob",   role: "User" },
    { name: "Carol", role: "Admin" },
]
const grouped = people.reduce((acc, person) =>{
    const key=person.role;
    acc[key]=acc[key]||[]
    acc[key].push(person.name);
    return acc
}
)
// { Admin: ["Alice", "Carol"], User: ["Bob"] }
// let myval=0;
// const newVal=myval||10
// console.log(newVal);

let myval={};
const newVal=myval??10
console.log(newVal);
