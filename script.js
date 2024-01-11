let submit = document.getElementById('submit_button');
const bill = document.getElementById('bill_input');
const people = document.getElementById('people_input')
const buttons = document.querySelectorAll('.butt');
const totalAmount = document.getElementById('total');


buttons.forEach(btn =>  {
    btn.addEventListener('click', function() {
        buttons.forEach(bt => {
            bt.classList.remove('active');
            this.classList.add('active');
        })
    
    })
    
})
submit.addEventListener('click', calculateTip); 
function calculateTip () {
    let newBill = parseFloat(bill.value);
    let numberOfPeople = parseFloat(people.value)
    let tipPercentage = parseInt(document.querySelector('.buttons.active').dataset.percentage)

const tipAmount = ((newBill * tipPercentage) / numberOfPeople).toFixed(2);

totalAmount.innerText = `$${tipAmount}`;
}