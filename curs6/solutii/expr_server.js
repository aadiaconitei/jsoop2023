// verificam lista de module instalate
// npm list
// daca nu este instalat
// npm i express --save

// 1. pornim serverul
// node expr_server.js 
// 2. accesam in browser
// http://localhost:3002

// putem opri serverul : ctrl+c

// Pentru a testa toate metodele putem folosi POSTMAN https://www.postman.com/

const express = require('express')
const app = express()
// Parses the body for POST, PUT, DELETE, etc.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// GET
app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/blog', (req, res) => res.render('blog.html'))


// POST
app.post('/', function (req, res) {
  console.log(req.body);
  res.send('POST request')
})

// PUT
app.put('/user', function (req, res) {
  res.send('PUT request la /user')
})

// DELETE
app.delete('/user', function (req, res) {
  res.send('DELETE request la /user')
})
app.listen(
    3002,  //PORT
    () => console.log('Aplicatie ce ruleaza pe portul 3002!')
)

