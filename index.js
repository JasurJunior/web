const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos.js')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const hbs = exphbs.create(
    {
    defaultLayout: 'main',
    extname: 'hbs'
    })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRoutes)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
async function start()
    {
    try
        {
        await mongoose.connect('mongodb://localhost:27017/mydb',
            {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
            })

        app.listen(PORT,()=>
            {
            console.log("ishlepman...");
            })
        }
    catch (e)
        {
        console.log(e);
        }
    }
start()