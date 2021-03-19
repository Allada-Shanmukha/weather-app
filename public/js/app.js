console.log('client side java script is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//   response.json().then((data)=>{
//     console.log(data)
//   })
// })

// fetch('http://localhost:3000/weather?address=srikakulam').then((response)=>{
//   response.json().then((data)=>{
//     if(data.error){
//       return console.log(data.error)
//     }
//     console.log(data)
//   })
// })

const form = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const location = search.value
  console.log(location)
  message1.textContent = 'Loading...'
  message2.textContent = ''
  fetch('http://localhost:3000/weather?address=' + location+'').then((response)=>{
  response.json().then((data)=>{
    if(data.error){
      return message1.textContent = data.error
    }
    message1.textContent = data.location
    message2.textContent = data.forecast
    console.log(data.location)
    console.log(data.forecast)
  })
})
})