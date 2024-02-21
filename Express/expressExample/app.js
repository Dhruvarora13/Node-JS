 //importing
 const express = require("express");
//  const nodemon = require('nodemon');

  const app = express()

  // get post put delete
  app.get('/',(request,response)=>{
     response.send("Hey i am good")
  })
  app.get('/about',(request,response)=>{
    response.send("Hey i am tampered")
 })

  app.listen(3006,()=>console.log("Server is running"))
nkoj