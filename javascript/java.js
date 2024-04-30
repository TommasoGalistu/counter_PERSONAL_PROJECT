let incremento= document.querySelector('#incr');
let decremento= document.querySelector('#decr')
let numeroDaIncrementare= document.querySelector('#numero')

let num= 0;

incremento.addEventListener('click', () =>{
    num++
    numeroDaIncrementare.textContent= num
})


console.log(num)

