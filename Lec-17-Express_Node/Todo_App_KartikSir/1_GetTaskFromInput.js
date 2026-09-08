let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click',(ev) =>{
    // aage piche ke extra spaces remove karega trim function
    let inputData = input.value.trim();
    input.value = "";
    if(inputData){
        console.log(inputData);
    }
})