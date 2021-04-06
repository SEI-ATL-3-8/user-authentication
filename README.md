# Intro to Auth
- difference between authorization and authentication
  - can't have authorization w/o authentication, but can do vice versa
  - we are doing authentication
- frontend & backend

## Touring the starter code
- there is an express app serving up the frontend
- 3001 vs 3000
- main.js
- users migration & model

## Setup
- npm i
- sequelize db:create/migrate
- 2 terminal tabs for front & back, run both servers

## Chapter 1: Creating a user (aka signup)
### Backend
  - set up POST /users route
  - email uniqueness
  - respond w/ user obj
### Frontend
  - axios
  - post on form submission
  - if error, alert it
  - if success, save user id to localStorage
  - good time for morgan

## Chapter 2: Logging in
### Backend
  - POST /users/login
  - look up user by email
  - check if passwords match
  - if so, respond w/ user obj
  - otherwise, 401
### Frontend
  - same as signup form, just make sure you use login inputs values

## Chapter 3: Logging out
### Backend
  - not a damn thing: the backend has no persisted memory of whether someone is logged in or not
### Frontend
  - clear localstorage
  - show home page

## Chapter 4: Detecting the logged in state
### Frontend
  - on page load, check local storage
  - if present, show logged in state, else show logged out
  - /users/verify endpoint if time/energy
### Backend
  - /users/verify endpoint if time/energy

## Chapter 5: Using a protected route
### Frontend
  - send userId in payload
### Backend
  - look that user up
  - if present, show profile
  - if absent, 401

## Chapter 6: Encrypting the userId
### Backend
  - before userId goes out the door, use jsonwebtoken.sign({userId: id}, secret)
  - secret must be put in .env
  - when looking up user, jsonwebtoken.verify({userId: id}, secret)
### Frontend
  - the userId you get back will now be signed, just save it to localstorage

## Chapter 7: Hashing db passwords
### Backend
  - before creating user, bcrypt.hashSync(req.body.password, 10)
  - when logging in, instead of direct password comparison, bcrypt.compareSync(req.body.password, user.password)
### Frontend
  - not a damn thing