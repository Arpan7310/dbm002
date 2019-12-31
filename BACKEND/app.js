
var express=require('express');
var app=express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var cors=require('cors');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'newdatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  app.get('/getdata',(req,res)=>{
    var query=req.body.name
    db.collection("balls").find({}).toArray().then((y)=>{
     res.send(y);
    })
  });

  app.post('/savedata',(req,res)=>{
    db.collection("balls").insert(req.body).then((x)=>{
      res.send({
        "message":"data inserted",
        "data":x
      })
    })
  })


  app.post('/savedata2',(req,res)=>{
    db.collection("ball").insert(req.body).then((x)=>{
     res.send({
       "message":"data is inserted",
       "data":x
       
     })
    })
  })

  app.get('/getdata2',(req,res) =>{
    db.collection("ball").find({}).toArray().then((y)=>{
      res.send(y);
    })
  })

  
  app.post('/savedata3',(req,res)=>{
    var w=req.body.name
    db.collection("balls").find({"sname":w}).toArray().then((x)=>{
      res.send({x})
    })
  })
  
  


app.listen('1000',(req,res)=>{
    console.log("connected on port 1000 ");
})
});