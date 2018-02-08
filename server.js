const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Score = require('./models/ScoreSchema')
const User = require('./models/UserSchema')
const Questions = require('./model/QuestionsSchema')
var BodyParser = require('body-parser')

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())


mongoose.connect('mongodb://cm:cm@ds229008.mlab.com:29008/triviagame')
    .then(function () {
        console.log('Connected to MONGOD !!');
    }).catch(function (err) {
    console.log('Failed to establish connection with MONGOD !!');
    console.log(err.message);
});


app.get('/getusers', function (req, res) {
    Users.find({}).exec(function (err, data) {
        if (err) { throw err }
        res.send(data);
    });
});

app.post('/postuser', (req, res)=>{
    let newUser=new Score({
        user:req.body.user,
        score:req.body.score
    })
    newUser.save((err,data)=>
    res.send(data)
    )
})

app.listen(3001, ()=>{
    console.log('Hello')
})