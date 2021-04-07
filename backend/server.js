const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const models = require('./models')

//step1 of step1 create users I can check the this is working throuth the Postman
//1. async made 2.app.someting made for visualy checkthe metod3.fill the try and catch

const creatUser = async (req,res ) =>{
  try {
    const user = await models.user.create({
      email: req.body.email,
      password: req.body.password
    })
    res.json({ message: 'ok', user})
  } catch (error) {
    res.status(400)
    res.json({error:'email already taken'})
  }
}
app.post('/users', creatUser)

//// login first step check email wrk first!
const login = async(req,res) => {
  try {
    const user = await models.user.findOne({
      where:{
        email: req.body.email

      }
    })
    // console.log(user)
//After check the email make a conditional statement for login datapase password === (exactly same) as reqeust .body.password.401 status = password is not correct 400 is not a usedata in the database
    if (user.password === req.body.password){
      res.json({message: 'login successful', user: user})
    }else{
      res.status(401)
      res.json({error:'login fail'})
    }
  } catch (error) {
    res.status(400)
      res.json({error:'fail'})
  }
}
app.post('/users/login', login)

const PORT = process.env.port || 3001
app.listen(PORT, () => {
  routesReport.print()
})

