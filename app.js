const express = require('express')
const app = express()
const hbs = require('hbs');

//Helpers
require('./hbs/hbs')

// Middlewars
// app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

const port = process.env.PORT || 4000

//Routes
app.get('/', (req, res) => {
    res.render('home', {
        name: 'aleJandro sErnA'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})


//Server
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})