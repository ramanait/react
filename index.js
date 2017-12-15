//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/deal.js');
const app = express();
const url = 'mongodb://ramana:ramana123@ds139446.mlab.com:39446/deals';


//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});
//==========================//
//=========================//

//====ROOT DIRECTORY===//
app.get('/', function (req, res) {
    res.json('you did it');
});
//==========================//
//====GET ALL Deal===//
app.get('/api/deal', function (req, res) {
    Deal.find({}).then(eachOne => {
        res.json(eachOne);
    })
})
//==========================//

//====POST NEW Deal===//
app.post('/api/deals', function (req, res) {
    Deal.create({
        dealInfo: req.body.dealInfo,
        dealDate: req.body.dealDate,
        img: req.body.img,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
    }).then(deal => {
        res.json(deal)
    });
});
//==========================//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');