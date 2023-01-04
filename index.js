const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://juni:gkxm7535@boilerplate.tkclma9.mongodb.net/?retryWrites=true&w=majority'
).then(()=> console.log('MongoDB Connected...'))
 .catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하소')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})