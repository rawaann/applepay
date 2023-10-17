const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : true}))


app.listen(3000, function(){
    console.log("server is running")
})

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/merchant-session/new', function(req, res) {
    const merchantSessionPromise = fetch("/authorizeMerchant")
    .then((res)=>{return res.json()})
    .catch((err)=>{console.log(err)})
});

app.post('/', function(req, res){
    
})

module.exports.app = app;