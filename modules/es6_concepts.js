//destructuring

const obj = {
    name:"Aman",
    age:22
}

const {name,age} =obj;
//console.log(name,age); 

// default parameter
function greet(name = "Learner "){
    console.log("hello " + name);
}
greet();
greet("Aman");