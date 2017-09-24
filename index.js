var express = require("express")
var app = express();
var http = require('http').Server(app);

var io = require("socket.io")(http);
io.on("connection", function(socket) {
    socket.on("postForm", function(data) {
        console.log(data);
    })
})
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/layout.html')
})
app.get('/secret', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get("/airhorn.mp3", function(req, res) {
    res.download(__dirname + "/airhorn.mp3")
})
http.listen(process.env.PORT, process.env.IP, function() {
    console.log("server started");
})
app.get("/endcard.mp4", function(req, res) {
    res.download(__dirname + "/endcard.mp4")
})
app.post("/cool", function(req, res) {
    console.log(req);
})
app.get("/gel", function(req, res) {
    res.sendFile(__dirname + "/gel.html")
})
app.get("/i", function(req, res) {
    res.sendFile(__dirname + "/i.html")
})
app.get("/pixi.js", function(req, res) {
    res.download(__dirname + "/pixi.min.js")
})
app.get("/bunny.png", function(req, res) {
    res.download(__dirname + "/bunny.png")
})
app.get("/test.png", function(req, res) {
    res.download(__dirname + "/testtube.png")
})
app.get("/slider.png", function(req, res) {
    res.download(__dirname + "/slider.png")
})
app.get("/beaker/beaker.png", function(req, res) {
    res.download(__dirname + "/beakers/beaker" + req.query.num + ".png")
})
app.get("/pixiFill.js", function(req, res) {
    res.download(__dirname + "/pixiFill.js");
})
app.get("/shapes", function(req, res) {
    res.sendFile(__dirname + "/shapes.html");
})
app.get("/background.png", function(req, res) {
    res.download(__dirname + "/testback.png");
})
app.get("/labmaker", function(req, res) {
    res.sendFile(__dirname + "/labmaker.html");
})
