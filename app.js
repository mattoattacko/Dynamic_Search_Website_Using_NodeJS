// Problem: We need a simple way to look at a user's badge count and JS points from a web browser

// Solution: Use Node.js to perform the profile look ups and serve our template via http

// 1. Create a web server
// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('This is before the end\n');
//     response.end('hello world\n');
//     response.write('This is after the end\n');
// }).listen(3000); //or 1337?
// console.log('Server running at http://<workspace-url>/');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    homeRoute(request, response);
}).listen(3000);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 2. Handle HTTP route GET / and POST / eg: Home 
function homeRoute(request, response) {
    // if url == "/" && GET
    if(request.url === "/") {
        // show search field
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
        // response.setHeader('Content-Type', 'text/plain');
    // if url == "/" && POST
        // redirect to /:username
    }
}

// 3. Handle HTTP route GET /:username eg: /mattoattacko
    // if url == "/..." (anything)
        // get json from Treehouse
            // on "end"
                // show profile 
            // on "error"
                // show error


// 4. We want a function that handles the reading of files and merge in values
    // read from file and get a string
        // merge values into string