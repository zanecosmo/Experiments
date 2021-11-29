const http = require("http");
const fs = require("fs");



const handleRequest = (req, res) => {
    console.log(req.url);
    if (req.url === "/app.js") {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fs.readFile("./app.js", null, (error, data) => {
            res.write(data);
            res.end();
        });    
    } else if (req.url === "/app.css") {
        res.writeHead(200, {"Content-Type": "text/css"});
        fs.readFile("./app.css", null, (error, data) => {
            res.write(data);
            res.end();
        });
    } else if (req.url === "/utils.js") {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        fs.readFile("./utils.js", null, (error, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./index.html", null, (error, data) => {
            res.write(data);
            res.end();
        });
    }
};

http.createServer(handleRequest).listen(8080);