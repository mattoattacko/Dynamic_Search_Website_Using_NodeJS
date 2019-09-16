var Profile = require('./profile.js');
var renderer = require('./renderer.js');

// Handle HTTP route GET / and POST / eg: Home 
function home(request, response) {
    // if url == "/" && GET
    if(request.url === "/") {
        // show search field
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        renderer.view("header", {}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
        response.end();
        // response.setHeader('Content-Type', 'text/plain');
    // if url == "/" && POST
        // redirect to /:username
    }
}

// Handle HTTP route GET /:username eg: /mattoattacko
function user(request, response) {
    // if url == "/..." (anything)
    var userName = request.url.replace("/", "");
    if(userName.length > 0) {
        response.writeHead(200, {'Content-Type' : 'text/plain'});
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