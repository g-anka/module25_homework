const express = require('express');
const cors = require('cors');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = config.get('port') || 8000;

function loggerMiddleware (req, res, next) {
    console.log(`[${req.method}] - ${req.url}`);
    next();
}

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
})

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, '/uploadedFiles')))

app.use(loggerMiddleware)

app.use('/api/register', cors(), require('./backend/routers/register.router'))
/*app.get(
    '/api', (req, res) => {
        //res.send("Here are your data list ...")
        res.json({
            message: "hello this is backend"
        })
    })*/

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connection to MongoDB has been established")

        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}`)
        })
    } catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start()