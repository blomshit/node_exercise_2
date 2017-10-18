var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080));


app.use(express.static('/public'));

function greet () {
    let greets = ["Hei!", "Hallo!", "Næmmen hallaien!", "Skjera Bagera?"];
    let ran = greets[Math.floor((Math.random()*greets.length))];
    return ran;
}

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.listen(app.get('port'), function() {
    console.log(greet() + " Christian")
    console.log('Koblet opp til port', app.get('port'));
});