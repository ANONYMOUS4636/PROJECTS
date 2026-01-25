const display=document.querySelector('.display')
const operator=['+','-','*','/']

function append(x){
    
    if(operator.includes(display.value.slice(-1)) && operator.includes(x)){
        display.value=display.value.slice(0,-1)+x
    }

    else if(operator.includes(display.value[0])){
        display.value=''
    }

    else{
        display.value=display.value+x
    }

}



function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value='error'
    }
}






function clearDis(){
    display.value=''
}