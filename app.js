// Problem: We need a simple way to look at a user's badge count and JS points from a web browser

// Solution: Use Node.js to perform the profile look ups and serve our template via http

// 1. Create a web server



// 2. Handle HTTP route GET / and POST / eg: Home 
    // if url == "/" && GET
        // show search field 
    // if url == "/" && POST
        // redirect to /:username



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