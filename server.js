const express = require('express')
const app = express()

const {Client} = require("pg"); 

app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));

client.connect();

let client = new Client ({ 
    ConnectionString:rocess.env.DATABASE_URL, 
    //ssl:true 
});     


app.get('/ran/:id', function (req, res) {
  res.send(greet() + " " + req.params.id)
    
})

app.listen(8080, function () {
    console.log('app listening on port 8080!')
    
})




var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080));


app.use(express.static('/public'));

function greet () {
    let greets = ["Hei!", "Hallo!", "Næmmen hallaien!", "Skjera Bagera?"];
    let ran = greets[Math.floor((Math.random()*greets.length))];
    return ran;
}

//API
app.get('/', function(request, response) {
  response.render('pages/index');
});


app.listen(app.get('port'), function() {
    console.log(greet() + " Christian")
    console.log('Koblet opp til port', app.get('port'));
});