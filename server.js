var express = require('express');
//var mongojs = require('mongojs');
var db = require('orchestrate')('aba295c3-796f-4d5e-8aad-5b47b04d36ec','api.ctl-uc1-a.orchestrate.io');
var bodyParser = require('body-parser');



var app = express();
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));


db.ping().then(function() {
    console.log('connected');
});


app.get('/', function (req, res) {
    console.log(res);
    res.sendFile('index.html')
});


app.get('/contactsList', function (req, res) {
db.list('contactList').then(function(data) {
    res.json(data.body);
})

});

app.post('/contactsList', function (req, res) {
    db.post('contactList',req.body).then(function(data) {
        res.json(data.path);
    });
});


app.delete('/contactsList:id',function(req,res){

    var id = req.params.id;
    db.remove('contactList',id,true);
    res.send('deleted');

});

app.listen(process.env.PORT||5000);


