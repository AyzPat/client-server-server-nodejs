var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var admin = require("firebase-admin");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




 app.all('/*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
 res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,token,Origin,X-Origin');
 if (req.method == 'OPTIONS') {
     res.status(200).end();
 } else {
   next();
 }
});




admin.initializeApp({
  credential: admin.credential.cert("faith.json"),
  databaseURL: "https://faith-20e6a.firebaseio.com"
});

var db = admin.database();
var token = [];
var ref = db.ref("users");
  
  

ref.on("value",
 function(snapshot) {
      var users=snapshot.val();
      // console.log(users);
      var arr = Object.keys(users).map(key => {
        token.push({ 'key': key, 'value': users[key]});
     })
  console.log(token);
});

function snap(){
// ref.orderByChild('name').startAt("A").endAt("S\uf8ff").on("child_added",
//  function(snapshot) {
//  token = snapshot.val().name;
//   console.log(token );



// });

}

app.get('/',function(req,res){

  res.send(token);
  
 

});





 app.post('/post',function(req,res){
   
  // console.log(req.body);
    var ref = db.ref("/users");
    var data=req.body.name;
    var lname=req.body.lastname;
    ref.push({
          name:data,
          lastname:lname,
      });
res.json({ response: 'success'});
    
  });
          

// -->

app.post('/update',function(req,res){
     var ref=db.ref('users')     
    var upref = ref.child('-K_Sy8BcFtkUYxE9LlKi');
upref.update({
  "name": "ASayz"
});     


 snap(); 
 res.send(_data);        
      
});
   
          server.listen(8081,function(){
          console.log("Server connected. Listening on port: 8081");
    });
app.delete('/del',function(req,res){
 
var body=req.body.key;
ref.child('body').remove()
      });


//Routes
// var Routes = require('./routes/index');
//var r = new Routes(app, io);
module.exports = app;





// 

// var query=ref.child("users").orderByChild("name").limitToFirst(5);
// var query=ref.orderByChild("name").limitToFirst(5);
// query.on("value",function(snapshot) {
//   console.log("child added event called")
//   console.log(snapshot.val());
//   _data = snapshot.val();
// });