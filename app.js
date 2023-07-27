const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/paczkomaty.html", function (req, res) {
    res.sendFile(__dirname + "/paczkomaty.html");
});
app.listen(port, function () {
    console.log("Server is running on localhost3000");
});