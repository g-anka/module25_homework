const {Router} = require('express');
const router = Router();
const cors = require('cors');
const User = require('../models/User');


// /api/register/step1
router.get(
    '/step1', (req, res) => {
        res.send(`I've received your GET request`)
    })

router.post(
    '/step1', (req, res) => {
        if(!req.body) return res.sendStatus(400);
        console.log("REQ BODY: ", req.body);
        res.send(`I've received the following data: ${req.body.username} - ${req.body.email}`)
    }
)
/*

app.get('/', (req, res) => {
    res.send ("I have received your GET request")
});

app.post('/', (req, res) => {
    res.send ("I have received your POST request")
});

app.put('/', (req, res) => {
    res.send (" I have received your PUT request")
});


app.use(loggerMiddleware);*/

module.exports = router