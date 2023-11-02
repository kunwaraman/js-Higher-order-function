const a = [1,2,3,4,5,6];

// function filterNumbers() {
//     const b = [];
//     for(let i=0;i<a.length;i++){
//         if(a[i] % 2==0){   // for checking even
//             b.push(a[i]);
//         }
//     }
//     return b;
// }
// const evennumbers = filterNumbers();
// console.log(evennumbers);


// this thing is called higher order function jo bhi function ek dushra fnction 
// as aparameter basically  ya phir return krta hai dushra function called as higher order function
function filterNumbers(conditionFunction) {
    const b = [];
    for(let i=0;i<a.length;i++){
        if(conditionFunction(a[i])){   // for checking even
            b.push(a[i]);
        }
    }
    return b;
}

function isEven(num) {
    return num%2==0;
}
function isOdd(nums){
    console.log(nums+ 'called');
    return nums%2==1;
}
const evennumbers = filterNumbers(isOdd);
console.log(evennumbers);