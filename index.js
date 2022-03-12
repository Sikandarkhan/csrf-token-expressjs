const path = require('path')
const csrf = require('csurf')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const csrfProtect = csrf({cookie: true})
const formParser = bodyParser.urlencoded({extended: false})

const app = express()

app.set('view engine', 'pug')
app.set('views', 'view-files')

app.use(cookieParser())

app.get('/', csrfProtect, function (req, res) {
  console.log('Token to Browser/form: ' + req.csrfToken());
  res.render('form.pug', {csrfToken: req.csrfToken()})
})

app.post('/response', formParser, csrfProtect, function(req, res) {
  console.log('Token from Browser/form: ' + req.body._csrf)
  // console.log(req.body);
  res.send("You're safe from CSRF attack. This request is healthy");
})

app.listen(8000)
