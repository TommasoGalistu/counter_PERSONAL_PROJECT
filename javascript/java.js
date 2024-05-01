let incremento= document.querySelector('#incr');
let decremento= document.querySelector('#decr');
let resetta=document.querySelector('#res')
let numeroDaIncrementare= document.querySelector('#numero');
let bottoni=document.querySelector('button')

let num= 0;

incremento.addEventListener('click', () =>{
    num++
    numeroDaIncrementare.textContent= num
    if(num>0){
        numeroDaIncrementare.style.color= 'green'
    }
})

decremento.addEventListener('click', () =>{
    num--
    numeroDaIncrementare.textContent= num
    if(num<0){
        numeroDaIncrementare.style.color= 'red'
    }
})

resetta.addEventListener('click', () =>{
    num=0
    numeroDaIncrementare.textContent= num
    numeroDaIncrementare.style.color= 'black'

})




