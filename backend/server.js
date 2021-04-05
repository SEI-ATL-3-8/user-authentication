const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const models = require('./models')

app.post('/users', async (req, res) => {
  try {
    const user = await models.user.create(req.body)
    res.json(user.id)
  } catch (error) {
    if (error.errors && error.errors[0].message === 'email must be unique') {
      res.status(400).json({error: 'email is already taken'})
    } else {
      res.status(400).json({error})
    }
  }
})




const PORT = process.env.port || 3001
app.listen(PORT, () => {
  routesReport.print()
})

