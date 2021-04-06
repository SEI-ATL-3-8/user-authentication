
starter code:
  - frontend
    - express server that serves 3 files on 3000
    - nav bar, signup & login forms
  - backend
    - sequelize set up for users
    - no router/controller for simplicity
    - port 3001



- creating a user:
  - backend only
    - email uniqueness
    - respond w/ user obj
  - frontend
    - axios
    - post on form submission
    - if error, alert it
    - if success, save user id to localStorage
    - good time for morgan

- logging in:
  - backend
    - plaintext password check
    - respond w/ userId if match, else 401
  - frontend
    - same as signup form, just make sure you use login inputs values

- logout:
  - backend: nothing
  - frontend: just clear localstorage

- detecting logged in state:
  - frontend
    - on page load, check local storage
    - if present, show logged in state, else show logged out
    - mention the /users/verify endpoint
  - backend
    - 

- using a protected route
  - frontend
    - send userId in payload
  - backend
    - look that user up
