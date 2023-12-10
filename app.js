let express = require('express');
let app = express();
let port = 1122;
let {dbConnect, getData, postData} = require('./controller/dbController')
let Mongo = require('mongodb')
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hi from express')
})

//get all navigation link
app.get('/nav', async (req, res) => {
    let query = {}
    if(req.query.infoId){
        query = {"information_id":Number(req.query.infoId)}
    }
    let collection = 'nav'
    let output = await getData(collection, query)
    res.send(output)
})

// get all information routes 
app.get('/information', async (req, res) => {
    let query = {}
    let collection = 'information'
    let output = await getData(collection, query)
    res.send(output)
})
app.get('/carousel', async (req, res) => {
    let query = {}
    let collection = 'carouselData'
    let output = await getData(collection, query)
    res.send(output)
})
app.get('/images', async (req, res) => {
    let query = {}
    let collection = 'images'
    let output = await getData(collection, query)
    res.send(output)
})
app.get('/objectives', async (req, res) => {
    let query = {}
    let collection = 'objectives'
    let output = await getData(collection, query)
    res.send(output)
})
app.get('/response', async (req, res) => {
    let query = {}
    let collection = 'response'
    let output = await getData(collection, query)
    res.send(output)
})
app.get('/emergency', async (req, res) => {
    let query = {}
    let collection = 'emergency'
    let output = await getData(collection, query)
    res.send(output)
})
app.get('/director', async (req, res) => {
    let query = {}
    let collection = 'director'
    let output = await getData(collection, query)
    res.send(output)
})

// details of selected item 
app.get('/details/:id', async (req, res) => {
    let id = Number(req.params.id)
    let query = {information_id:id}
    let collection = 'information'
    let output = await getData(collection, query)
    res.send(output)
    
})
app.get('/image/:id', async (req, res) => {
    let id = Number(req.params.id)
    let query = {id:id}
    let collection = 'images'
    let output = await getData(collection, query)
    res.send(output)
    
})

app.listen(port, (err) => {
    dbConnect()
    if(err) throw err;
    console.log(`server is running on port ${port}`)
})