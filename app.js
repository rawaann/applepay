// import expres 'express';
// import bodyParser from 'body-parser';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'build')));



app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/applepaysession', function(req, res) {
  var uri = req.query.validationURL || 'https://apple-pay-gateway-cert.apple.com/paymentservices/startSession';
  console.log(uri);
  var options = {
    uri: uri,
    json: {
      merchantIdentifier: 'applepay-woad.vercel.app',
      domainName: 'merchant.boubyantakaful.pay',
      displayName: 'Testing Apple Pay'
    },
  };
  
  req.post(options, function(error, response, body) {
    if (body) {
      // Apple returns a payload with `displayName`, but passing this
      // to `completeMerchantValidation` causes it to error.
      console.log(body);
      delete body.displayName;
    }
    console.log(body);
    res.send(body);
  });
});
// app.post('/', function(req, res){
  
  // })
  
app.listen(process.env.PORT, function(){
      console.log("server is running")
  })
module.exports.app = app;