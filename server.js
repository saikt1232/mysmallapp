var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');



var app = express();
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
    console.log(res);
    res.sendFile('index.html')
});


app.get('/contactsList', function (req, res) {

    db.contactList.find(function (err, docs) {
        res.json(docs);
    });

});

app.post('/contactsList', function (req, res) {

    console.log(req.body);
    db.contactList.insert(req.body, function (err, doc) {
        res.json(doc);
    });

});


app.delete('/contactsList:id',function(req,res){

    var id = req.params.id;
    console.log(id);
    db.contactList.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});



app.listen(3000);

