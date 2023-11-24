let result = document.getElementById('result')

let twoo = document.getElementById('twoo')
let openn = document.getElementById('openn')
let closee = document.getElementById('closee')
let four = document.getElementById('four')
let plu = document.getElementById('plu')




// let twoo = document.getElementById('twoo')

function two(){
 result.value +=  twoo.innerHTML

}

function one(){
    result.value +=  openn.innerHTML
}

function three(){
    result.value +=  closee.innerHTML
}

function fourr(){
    result.value +=  four.innerHTML
}

function plus(){
    result.value +=  plu.innerHTML

}

function equal(){
    result.value = result.value.replace("(","*");
    result.value = result.value.replace(")", "");
    console.log(result.value);
    result.value = eval(result.value)
}