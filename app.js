const billAmount = document.querySelector("#bill-amt")
const cashGiven = document.querySelector("#cash-given")
const btn = document.querySelector("#btn")
const output = document.querySelector("#output")
const noOfNotes = document.querySelectorAll(".noOfNotes")

const notes = [2000,500,100,20,10,5,1]

function noteValidation(){

    if(billAmount.value > 0){
        // console.log(billAmount.value);
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const returnedAmount = cashGiven.value - billAmount.value
            changeGiven(returnedAmount)

            // console.log(returnedAmount)
        }
        else{
            output.innerText = "Enter a valid Bill Amount"
        }
    }
    else{
        output.innerText = "Invalid Amount"
    }
}

function changeGiven(returnedAmount){
    for(let i = 0; i < notes.length; i++){
        const numOfNotes = Math.trunc(returnedAmount / notes[i]);
        returnedAmount %= notes[i];
        noOfNotes[i].innerText = numOfNotes
        console.log(numOfNotes)
    }
}



btn.addEventListener('click', noteValidation)