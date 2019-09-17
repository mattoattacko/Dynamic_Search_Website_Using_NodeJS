var Profile = require('./profile.js');
var renderer = require('./renderer.js');
var queryString = require('querystring');
var commonHeaders = {'Content-Type' : 'text/html'};

// Handle HTTP route GET / and POST / eg: Home 
function home(request, response) {
    // if url == "/" && GET
    if(request.url === "/") {
        if(request.method.toLowerCase() === "get") {
            // show search field
            response.writeHead(200, commonHeaders);
            renderer.view("header", {}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        } else {
            // if url == "/" && POST

            // get the post data from body
            request.on('data', function(postBody) {
                // extract the username
                var query = queryString.parse(postBody.toString());
                // Location is probably where we add the treehouse api url
                // redirect to /:username
                response.writeHead(303, {"Location": '/' + query.username});
                response.end();
            });
        }
        // response.setHeader('Content-Type', 'text/plain');
    
    }
}

// Handle HTTP route GET /:username eg: /matthewmcquain
function user(request, response) {
    // if url == "/..." (anything)
    var userName = request.url.replace("/", "");
    if(userName.length > 0) {
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);

        // get json from Treehouse
        var studentProfile = new Profile(username)
        // on "end"
        studentProfile.on('end', function(profileJSON) {
            // show profile

            // Store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // simple response
            renderer.view('profile', values, response);
            renderer.view('footer', {}, response);
            response.end();
        });

            // on "error"
        studentProfile.on('error', function(error) {
            // show error
            renderer.view('error', {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view('footer', {}, response);
            response.end();
        });
      
        
    }
}




module.exports.home = home;
module.exports.user = user;