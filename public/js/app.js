console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const adviceForm = document.querySelector('#advice-form')
const adviceButton = document.querySelector('#advice-button')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')



weatherForm.addEventListener('submit', (e) =>{

    e.preventDefault()
    
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
    if (data.error){
        console.log(data.error)
        messageOne.textContent = data.error
        messageTwo.textContent = ''
        
    }else {
        console.log(data.location)
        console.log(data.forecast)
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast

    }
 })
})
})

adviceForm.addEventListener('submit', (e) => {
    
    e.preventDefault()
    fetch('/getAdvice').then((response) =>{
        response.json().then((data) => {
            if (data.error){
                messageThree.textContent = "Error occured. Please try again later"
            }else {
                messageThree.textContent = data.advice
            }
        })
    })
})