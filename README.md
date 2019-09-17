# Dynamic Search Website Using Node.js

Node is something that would replace PHP/Ruby/Java. These are "server-side" languages.

To oversimplify things, imagine you're building a social networking app:

1. you have your front-end (html/css/javascript/jquery/angular/whatever it may be).
2. Then you have the server-side languages
3. Then you have your database.

It's like a little sandwhich with the server-side code in the middle:

FRONT-END CODE ---||--- SERVER-SIDE LANGUAGE ---||--- YOUR DATABASE

The server-side languages sit between your front-end code and your database. So PHP/NODE/Railes/Java are the languages that will update/delete/add/etc. to whatever database you use (SQL/Mongo whatever your choice is).

For example, the front-end of your social network app may have an "add post" button. When the user clicks it, some jquery/javascript is fired. That jquery/javascript is signaling to the server-side language. Then the server-side language is then interacting acting with the data.

and vice-versa, if your app requests some data, it is the server-side language (i.e. the code on the server) that talks to the database, and then the server-side language that will send the data to the "front-end" (or the "client" a.k.a. the user's browser window).

Bottom Line: If you are trying to interact with a database--- for instance if your personal website is a blog, or has a contanct form that saves user input or sends you an email--- then you will most likely need to have a server-side language that will sit in between your client-side (aka front-end code) and the database the form is being sent to.

That is where you have to decide if you want to use node or another language (ruby/java/PHP and many others).

Server-side languages can handle other stuff too-- as you saw: Like calling an API for data, handling security (for instance, handling sign up or log in if your app needs that), or again, acting on a database.

Other Notes: server languages also handle routing and sometimes rendering... that means, Node/PHP/Java will be the language you use to decide which HTML templates get sent/viewed based on the "route" the user is on. It also "renders" that html view... render is like compiling all the stuff onto one specific html page (or "view")... so it may compile (aka render) different components, JS, and data to create that specific user's view.

Warning: This is an over simplification of things.... but it gives you the high-level idea: the server languages sit between the database and your front-end code. They handle talking to your database and other things that you wouldn't want happening in your front-end code (mainly for security reasons-- but other reasons too).

In reality you unfortunately would have tons of other frameworks and libraries involved beyond just "front-end code" "server-side language" and "database"-- things like Grunt and Express and many others--- but they aren't important for the concept your question is looking to understand.

EDITED: corrected answer to refer to ruby as Kevin pointed out. Although you will most likely be hearing and using the more well-known framework Ruby on Rails (a.k.a. "Rails")