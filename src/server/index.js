const express = require('express')
const bodyParser = require('body-parser')
const route = require('./route/route')
const mongoose = require('mongoose')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect("mongodb+srv://nav7033:n2cGJvLjcd2n6Jsk@cluster0.uhbum.mongodb.net/group78Database?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

.then(()=> console.log("Connected..."))
.catch((err) => console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 4000, function(){
    console.log('Express app running on port ' + (process.env.PORT || 4000))
})