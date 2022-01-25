console.log('ola mundo')

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

// function increment(){
//     if(currentNumber < 10){
//         currentNumber = currentNumber + 1;
//         currentNumberWrapper.innerHTML = currentNumber;
//     }
//     else{
//         alert('Você chegou ao limite')
//     }
// }

// function decrement(){
//     if(currentNumber > 0){
//         currentNumber = currentNumber - 1;
//         currentNumberWrapper.innerHTML = currentNumber;
//     }
//     else{
//         alert('Você chegou ao limite')
//     }
// }


function increment(){

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber > 0){
        currentNumberWrapper.style.color="limegreen";
    }
    else if(currentNumber == 0){
        currentNumberWrapper.style.color="black";
    }
    

}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color='red';
    }
    else if(currentNumber == 0){
        currentNumberWrapper.style.color="black";
    }
    
   
   
}



