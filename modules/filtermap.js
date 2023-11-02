const a = [1, 2, 3, 4, 5, 6, 7, 8];
function isEven(num) {
    return num%2==0;
}
function isOdd(nums){
    return nums%2==1;
}

// const b = a.filter((element) =>{
     
//      return element%3==0;
// });

// console.log(b);
function square(num) {
    return num*num;
}

function negative(num) {
    return -num;
}

// // const b = a.map(square);
// const b = a.map(negative);
// const found = a.find((element) => element%2 == 0)


// // console.log(b);
// console.log(a);
// console.log(found);

const b = a.map((x) => 'my num is ' +x);
const students =[
    {
        name:"Aman",
        marks:12
    },  {
        name:"sahil",
        marks:89
    }, {
        name:"Rahul",
        marks:45
    }, {
        name:"shivam",
        marks:32
    },
]

const grades = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = false;
    } else {
        element.isPassed = true;
    }
    return element;
})

const found = students.find((element) => {
    return element.marks < 50;
})
console.log(grades);