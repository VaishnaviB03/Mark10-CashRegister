const billAmount = document.querySelector("#bill-amt")
const cashGiven = document.querySelector("#cash-given")
const btn = document.querySelector("#btn")
const msg = document.querySelector("#errMsg")
const noOfNotes = document.querySelector(".noOfNotes")

const notes = ["1","20","50","100","500","2000"]

function noteValidation(){
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const returnedAmount = cashGiven.value - billAmount.value
            change(returnedAmount)
        }
        else{
            msg.innerText = "Enter a valid Bill Amount"
        }
    }
    else{
        msg.innerText = "Invalid Amount"
    }
}

function change(returnedAmount){
    for(let i = 0; i <notes.length; i++){
        const numOfNotes = Math.trunc(returnedAmount/notes[i])
        returnedAmount = returnedAmount % notes[i]
        noOfNotes[i].innerText = numOfNotes
    }

    
}


btn.addEventListener('click', noteValidation)