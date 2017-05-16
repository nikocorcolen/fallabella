var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var busboy = require('connect-busboy')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(busboy());

app.get("/", function(req, res){
	res.send({message: "Hola Mundo!"})
});

app.post("/api/post", function(req, res){
	console.log(req.body)
	
	fs.appendFile("archivo.txt", JSON.stringify(req.body) + "\n", function (err) {
	  if (err) {
	    console.log(err)
	  }
	})
	res.status(200).send({message: "OK"})
});

app.post("/api/post/image", function(req, res) {
	req.pipe(req.busboy)
    req.busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
    	console.log("Encontro un archivo!!")
        var fstream = fs.createWriteStream(filename)
        file.pipe(fstream)
        fstream.on('close', function () {
            res.status(200).send('upload succeeded!')
        })
    })
})

app.listen(3000)