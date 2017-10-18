const express = require('express')
const app = express()

app.use(express.static('public'))
Const {Client} = require("pg"); 


function greet () {
    let greets = ["Hei!", "Hallo!", "Næmmen hallaien!", "Skjera Bagera?"];
    let ran = greets[Math.floor((Math.random()*greets.length))];
    return ran;
}

app.set('port', (process.env.PORT || 8080));


Let client = new Client ({ 
ConnectionString:rocess.env.DATABASE_URL, 
Ssl:true 
}); 

app.get('/ran/:id', function (req, res) {
  res.send(greet() + " " + req.params.id)
    
})

app.listen(8080, function () {
    console.log(greet() + " Christian")
    console.log('app listening on port 8080!')
    
})

