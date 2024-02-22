const express = require('express')
const cors =   require("cors")

const layanan = require('./layanan')
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req , res) => {
    res.send("selamat datang di api sepatuku")
})
app.get("/layanan", (req , res) => {
    res.send(layanan)
})

const port = process.env.PORT || 5000  

app.listen(5000, console.log(`server running on port ${port}`))