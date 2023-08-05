var express = require("express");
var app = express();
app.listen(3000);
app.set("views","./views");
app.set("view engine","ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://quang0706r:69PicanyU5YvwhdO@cluster0.1pirl3q.mongodb.net/Mean(veso)2023_03')
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((error) => {
        console.log("Database connection failed:", error);
    });
// Models
var vesoModel = require("./models/vesoVietlot");

const veso = [11, 34, 15, 41, 25, 36];

function Random(min,max,count){
    const randomNumbers = [];
    while(randomNumbers.length<count){
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!randomNumbers.includes(randomNum)){
            randomNumbers.push(randomNum);
        }
    }
    return randomNumbers;
}

app.get('/checked',(req,res)=>{
    const minrandom=1;
    const maxrandom=45;
    const count=6;
    var randomNumbers = Random(minrandom,maxrandom,count);
    console.log(randomNumbers);
    let result;
    if((JSON.stringify(veso)==JSON.stringify(randomNumbers))){
        result="win prize"
    }else{
        result="failed"
    }
    res.json({
        veso:veso,
        randomNumbers:randomNumbers,
        result:result
    });
     // tao database
     const newVesoRandom= new vesoModel({
        so1: randomNumbers[0],
        so2: randomNumbers[1],
        so3: randomNumbers[2],
        so4: randomNumbers[3],
        so5: randomNumbers[4],
        so6: randomNumbers[5]
    });
    newVesoRandom.save()
    .then(()=>{
        console.log("save new veso successfully");
    })
    .catch(()=>{
        console.log("save new Failed.");
    });
});