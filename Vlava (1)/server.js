const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

app.get('/red', function (req, res) {
  res.send('ANTHONYYYYY')
})

app.get('/services', function (req, res) {
    data=['anthony','mathilda','mathieu','marilynn','koko']
    
    
    res.send(data)


  })

  app.get('/anthoo', function (req, res) {
    data=['anthony age is 19 ,he is a boy and he is a computer science','mathilda:she s a girl and she is only 5 years old','mathieu he is the brother of mathilda and he is only 5 years old','marilynn she is anthony s sister and she is 18 years old  ','koko is my mother ']
    
    
    res.send(data)


  })





app.listen(3000)