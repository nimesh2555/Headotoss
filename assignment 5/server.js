var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var w = 0;
var l = 0;


app.use(express.static('.'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "input1.html");
});

app.get('/stats', function(req, res) {
    res.send(JSON.stringify({
        "wins": w,
        "losses": l
    }));
});

app.use(bodyParser.json());
app.post('/Flip', function(request, response) {
    console.log(request.body.call);
    var x = (Math.random() * 1) + 0;
    console.log(x);
    if (x >= 0.5) {
        if ((request.body.call == "heads")) {
            console.log("win head");
            response.send(JSON.stringify({
                "result": "win"
            }));
            w = w + 1;
            console.log(w);
        } else {
            console.log("loss head");
            response.send(JSON.stringify({
                "result": "loss"
            }));
            l = l + 1;
            console.log(l);
        }
    } else {
        if ((request.body.call == "tails")) {
            response.send(JSON.stringify({
                "result": "win"
            }));
            console.log(" win tail");
            w = w + 1;
            console.log(w);
        } else {
            console.log("loss tail");
            response.send(JSON.stringify({
                "result": "loss"
            }));
            l = l + 1;
            console.log(l);
        }
    }

});



app.listen(3000);



