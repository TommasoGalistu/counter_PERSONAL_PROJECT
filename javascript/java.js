let numeroDaIncrementare = document.querySelector('#numero');
let parentButton = document.querySelector('#contenitoreButton')

let num= 0;

parentButton.addEventListener('click', whichButton)

function whichButton(event){
    if(event.target.id == 'decr'){
        num--
        numeroDaIncrementare.textContent= num

        if(num<0){
        numeroDaIncrementare.style.color= 'red'
    }
    }else if(event.target.id == 'incr'){
        num++
        numeroDaIncrementare.textContent= num

        if(num>0){
        numeroDaIncrementare.style.color= 'green'
    }

    }else if(event.target.id == 'res'){
        num=0
        numeroDaIncrementare.textContent= num
        numeroDaIncrementare.style.color= 'black'
    }
}








