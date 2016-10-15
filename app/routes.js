 // app/routes.js
 // grab the nerd model we just created
 var Nerd = require('./models/nerd');
 module.exports = function(app) {
   // server routes ===========================================================
   // handle things like api calls
   // authentication routes
   // sample api route
   app.get('/api/nerds', function(req, res) {
       console.log('Someones calling the nerds');
       // use mongoose to get all nerds in the database
       Nerd.find(function(err, nerds) {
         // if there is an error retrieving, send the error. 
         // nothing after res.send(err) will execute
         if (err) res.send(err);
         res.json(nerds); // return all nerds in JSON format
       });
     })
     .post('/api/nerds', function(req, res) {
       var nerd = new Nerd(); // create a new instance of the nerd model
       nerd.name = req.body.name; // set the nerds name (comes from the request)
       nerd.superpower = req.body.superpower; 
       // save the nerd and check for errors
       nerd.save(function(err) {
         if (err) res.send(err);
         console.log("Nerd created!");
         res.json({ message: 'Nerd created!' });
       });
     })
     // route to handle creating goes here (app.post)
     // route to handle delete goes here (app.delete)
     // frontend routes =========================================================
     // route to handle all angular requests
     .get('*', function(req, res) {
       res.sendfile('./public/views/index.html'); // load our public/index.html file
     });
};
