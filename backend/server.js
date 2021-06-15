const express = require('express');
const axios = require('axios')
const cors=require('cors');
const app = express();
app.use(cors())
app.use(express.json());var router = express.Router();
require("es6-promise").polyfill()
require("isomorphic-fetch")


app.get('/',async function ( req, res) {
    console.log(
        `Server running on port `
      )
 res.json({"resulkt":"okk"})

})


app.post(`/getGoogleCaptcha`,async function ( req, res) {
  try{

const RECAPTCHA_SERVER_KEY = '6Ld-AjUbAAAAAOoizOzKTwZncEud68Z4AO6zBxKZ'

const humanKey = req.body.token
    const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
  },
  body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
})
res.send(isHuman)
console.log(isHuman)
  } catch (error) {
     console.log("errors",error);
     res.send(error)
  }  
});

const PORT =  5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
);