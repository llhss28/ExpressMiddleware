const express = require("express")
const stuff = express.Router()

stuff.use(express.json())

stuff.use("/", (req, res, next) =>{
    console.log("This worked too!")
    req.body = {age: 5}
    res.send(req.body)
    next()
})

module.exports = stuff