const express = require("express")
const app = express()

app.use(express.json())


app.use("/", (req, res, next) =>{
    console.log("Worked!")
    req.body = {name: "Luke"}
    res.send(req.body)
    next()
})

app.use("/", require("./routes/middleware"))

app.listen(9001, () => {
    console.log("Running")
})