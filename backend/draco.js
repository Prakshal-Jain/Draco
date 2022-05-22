const express = require('express')
const app = express()
const cors = require('cors')
const util = require('./utilities.js')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.get('/', (req, res) => {
  
  res.send({"function": util[3].toString()})
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})