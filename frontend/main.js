// nav links
document.querySelector('#home-link').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
  document.querySelector('#home-content').classList.remove('hidden')
})

document.querySelector('#signup-link').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
  document.querySelector('#signup-content').classList.remove('hidden')
})

document.querySelector('#login-link').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
  document.querySelector('#login-content').classList.remove('hidden')
})

document.querySelector('#logout-link').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
  document.querySelector('#home-content').classList.remove('hidden')

  localStorage.removeItem('userId')

  document.querySelector('#login-link').classList.remove('hidden')
  document.querySelector('#signup-link').classList.remove('hidden')
  document.querySelector('#profile-link').classList.add('hidden')
  document.querySelector('#logout-link').classList.add('hidden')
})

document.querySelector('#profile-link').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
  document.querySelector('#profile-content').classList.remove('hidden')
})


///step 1 of stpe 1 (from submision)

//make a request
//method = post http://localhost:3001/users
//send a body (email and password)
// get em from the inputs(use.vlaue)
document.querySelector('#signup-form').addEventListener('submit',async (event)=> {event.preventDefault()
  //preventDefalt() = not use = can do any action in site
  const email = document.querySelector('#signup-email').value
  const password = document.querySelector('#signup-password').value
try {
  //axio need a script in html before main'js script
  //This case localhost 3001 the reason is that we are now on the frontend server so we need to axios(fetch)in 3001
  const response = await axios.post('http://localhost:3001/users', {
    email: email,
    password: password
  })
  console.log(response)
  
  const userId = response.data.user.id 
  localStorage.setItem('userId',userId)
  //the localStorage is temporary memory. it can hold the information until refresh the webpasge or close

  document.querySelector('#login-link').classList.add('hidden')
  document.querySelector('#signup-link').classList.add('hidden')

  
} catch (error) {
  alert('email is already tanken')
  
}
})

//////////////login is a same concept with sign-in but the axios url need to match with rowdy for operating the method
//same steps but the login need a Value for matching up woith backedn data stored
document.querySelector('#login-form').addEventListener('submit',async (event)=> {event.preventDefault()
  const email = document.querySelector('#login-email').value
  const password = document.querySelector('#login-password').value
try {
  const response = await axios.post('http://localhost:3001/users/login', {
    email: email,
    password: password
  })
  console.log(response)
  //console.log for seeing what value will bring into response
  const userId = response.data.user.id 
  //userId = response.data.user.id = check the log and find the route of the id
  localStorage.setItem('userId',userId)

  document.querySelector('#login-link').classList.add('hidden')
  document.querySelector('#signup-link').classList.add('hidden')
  document.querySelector('#logout-link').classList.remove('hidden')
  document.querySelector('#profile-link').classList.remove('hidden')

  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'))
  document.querySelector('#home-content').classList.remove('hidden')
  
} catch (error) {
  alert('Fail to login')
  
}
})


//as soos as the page loads
//if local strage get userId = login then 
if(localStorage.getItem('userId')){
  document.querySelector('#login-link').classList.add('hidden')
  document.querySelector('#signup-link').classList.add('hidden')
}else{
  document.querySelector('#logout-link').classList.add('hidden')
  document.querySelector('#profile-link').classList.add('hidden')
}