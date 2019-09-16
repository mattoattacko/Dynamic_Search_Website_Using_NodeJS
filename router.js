var Profile = require('./profile.js');

// Handle HTTP route GET / and POST / eg: Home 
function home(request, response) {
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
function user(request, response) {
    // if url == "/..." (anything)
    var userName = request.url.replace("/", "");
    if(userName.length > 0) {
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write("Header\n");

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
            response.write(values.username + " has " + values.badges + " badges\n");
            response.end("Footer\n");
        });

            // on "error"
        studentProfile.on('error', function(error) {
            // show error
            response.write(error.message + '\n');
            response.end('Footer\n');
        });
      
        
    }
}




module.exports.home = home;
module.exports.user = user;