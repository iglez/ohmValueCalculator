const express = require('express')
const { requireJsonContent } = require('./middlewares')
const { calculateIohm } = require('./controllers/Iohm')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', requireJsonContent(), calculateIohm)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})