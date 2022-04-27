const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yskim:Admin135!@bolierplate.utqwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify: false
    //mongoose 6 버전부터는 속성 지원 안함.
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!, 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})