// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true);
    let filePath = '.' + reqUrl.pathname;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen(8000, () => {
    console.log('Server is running at https://jonasfranc1sco.github.io/');
});