const http = require('http');
const fs = require('fs');

const path = require('path');


const server = http.createServer((req, res) => {
    console.log(req.url);
   
    /*

    if req url is /api send db.json data
    if req url is / send index.html
    else send 404

    */

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (replace * with your Vue URL in production)
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow GET requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/'){

        // read my portfolio file


        fs.readFile(path.join(__dirname,'public','index.html'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            res.writeHead(200, {
                'Content-Type': 'text/html',
                
            });
            res.end(data)
        }
        );
        // res.end("my home page");
    }
    else if (req.url === '/api'){
       
        fs.readFile(path.join(__dirname,'public','db.json'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            

            res.writeHead(200, {
                'Content-Type': 'application/json',
                
            });
            res.end(data)
        }
        );
    }
    else if (req.url === '/about'){
       
        fs.readFile(path.join(__dirname,'public','about.html'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            res.writeHead(200, {
                'Content-Type': 'text/html',
                
            });
            res.end(data)
        }
        );
    }
    else{
        fs.readFile(path.join(__dirname,'public','404.html'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            res.writeHead(404, {
                'Content-Type': 'text/html',
                
            });
            res.end(data)
        }
        );
    }






});
server.listen(9738, ()=> console.log("yay server is running"));