// let, const, var


// function funcName(){
//     let fName = "Sunday"
//     console.log(fName)
// }
// funcName()

// console.log(fName)


// function funcName(){
//     const fName = "Sunday"
//     console.log(fName)
// }
// funcName()

// console.log(fName) 


// variable Block scope {}
// (let and const are not accessible outside the block)

// if (2 < 10 || 20 > 4){
//    let result= true
//    console.log(result)
// }
// console.log(result)

// if (2 < 10 || 20 > 4){
//     const result= true
//     console.log(result)
//  }  
//  console.log(result)

// if (2 < 10 || 20 > 4){
//     var result= true
//     // console.log(result)
//  }  
//  console.log(result)

// .......Function Expressions

// let nums = function (a, b){
//     return (a * b) / (a + b)
// }

// console.log(nums(3, 5));
// console.log(nums(6, 10));


function bolaTotalScore(score, bolaScore) {
    return (bolaScore * 2) / score;
}

let toluTotalScore = function (score, toluScore) {
    return toluScore / score;
}

let tadeTotalScore = function (score, tadeScore) {
    return tadeScore / score;
}

const scores = [bolaTotalScore, toluTotalScore, tadeTotalScore];

// console.log(scores)

// for (let i = 0; i < scores.length; i++){
//     let result = scores[i](100, 40)
//     console.log(result)
// }

for (let avgScore of scores){
    let result = avgScore(100, 40)
        console.log(result)
}

//.......... Higher Funtion

// function repeat(j){
//     j();
//     j();
// }

// function num(){
//     console.log(10 + 6)
// }

// repeat(num)


// function sum (x){
//     return function(y){
//         return x + y
//     };
// }

function sum(s){
    return function(f){
        return s + f
    };
}

let sumup = sum(3)
console.log(sumup(2))

// let numbers = sum(7)
// console.log(numbers(3))


setTimeout(function ()  {
    console.log('Hello World')
}, 5000);

const btn = document.querySelector("button")
const ptag = document.querySelector("p")

btn.addEventListener("click", function() {
    ptag.classList.add("active");
});

let m = document.querySelector(".minus")
let p = document.querySelector(".plus")

let r = document.querySelector(".result")

let a = 1;

function Plus(){
    if (a >= 1){
        a++
    }
    console.log (a)
    r.innerHTML = a
}

function Minus(){
    if (a > 1){
        a--
    }
    console.log (a)
    r.innerHTML = a
}