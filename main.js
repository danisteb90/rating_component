let ratingNumber = document.querySelector('.rating')
let ratedNumber = document.querySelector('.rated_number')
let submitButton = document.querySelector('.submit_button')
let cardOne = document.querySelector('.card_container')
let cardTwo = document.querySelector('.card_container_2')

ratingNumber.addEventListener('click', event=>{
    let selectedNumber = event.target.innerText
    ratedNumber.innerText = selectedNumber
    if(selectedNumber > 0 || selectedNumber <= 5){
        submitButton.addEventListener('click', ()=>{
            cardOne.style.display = 'none'
            cardTwo.style.display = 'flex'
        })
    }
})
