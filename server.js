const express = require('express')
const app = express()

app.use(express.static('public'))


function greet () {
    var greets = ["Hei!", "Hallo!", "Næmmen hallaien!", "Skjera Bagera?"];
    var ran = greets[Math.floor((Math.random()*greets.length))];
    return ran;
}

app.get('/ran/:id', function (req, res) {
  res.send(greet() + " " + req.param.id)
    //why is this not displaying?
})

app.listen(8080, function () {
  console.log('app listening on port 8080!')
    console.log(greet() + " Christian")
})
