const express = require("express")
const favicon = require("express-favicon")
const path = require("path")
const port = process.env.PORT || 8080
const app = express()
const { deploy } = require("./deploy")

// app.use(favicon(__dirname + "/build/favicon.ico"))
// the __dirname is the current directory from where the script is running

// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "build")))
// app.use(express.static(__dirname + "/public"))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
app.get("/deploy", async (req, res) => {
  const { abi, bytecode } = deploy("")
  res.send(
    JSON.stringify({
      abi: abi,
      bytecode: bytecode
    })
  )
})

app.get("/ping", function (req, res) {
  return res.send("pong")
})
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})
app.listen(port)
