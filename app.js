var router = require("./router.js");
// Problem: We need a simple way to look at a user's badge count and JS points from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our template via http

// Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
}).listen(3000);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// 4. We want a function that handles the reading of files and merge in values
    // read from file and get a string
        // merge values into string