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
    var uri = req.query.validationURL || 'https://apple-pay-gateway-cert.apple.com/paymentservices/startSession';
  
    var options = {
      uri: uri,
      json: {
        merchantIdentifier: 'merchant.boubyantakaful.pay',
        domainName: 'applepay-woad.vercel.app',
        displayName: 'Boubyan Takaful'
      },
  
      agentOptions: {
        cert: cert,
        key: cert
      }
    };
});

app.post('/', function(req, res){
    
})

module.exports.app = app;