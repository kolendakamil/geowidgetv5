const express = require("express");
const app = express();
app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});