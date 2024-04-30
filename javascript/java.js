let incremento= document.querySelector('#incr');
let decremento= document.querySelector('#decr');
let resetta=document.querySelector('#res')
let numeroDaIncrementare= document.querySelector('#numero');

let num= 0;

incremento.addEventListener('click', () =>{
    num++
    numeroDaIncrementare.textContent= num
})

decremento.addEventListener('click', () =>{
    num--
    numeroDaIncrementare.textContent= num
})

resetta.addEventListener('click', () =>{
    num=0
    numeroDaIncrementare.textContent= num
})


