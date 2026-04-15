// function greet(name,callback){
//     callback (`hello$ {name}`)
// }
// greet('Geek',message=>console.log(message));

// function greet(name,call){
//     call(`"hello, this is ${name}`)
// }
// greet("Geek",message=>console.log(message)
// )
// //arrow function
// const add=(a,b)=>a+b;
// console.log(add(6,2));


// console.log(obj);
//define a call back
function sayHello(){
    console.log(Hello);
    
}

// a fucntion that accept call back

function greet(callback){
    console.log("statrting");
    callback()
    
}
/* greet(sayHello);//named function call back */

/* anonymoys function call back
greet(function() {
  console.log("Hello from anonymous!");
}); */
//arrow function call back
// greet(()=>console.log("hello"))
greet(function() {
  console.log("Hello from anonymous!");
});

function cb(name,callback){
    callback(`hello :${name}`)
}
cb('abhi',message=>console.log(message))
/* this line is send as argumnet to a function cb
('abhi',message=>console.log(message)) */