console.log("server up!")

var express = require("express"); 
var app = express(); 
var methodOverride = require("method-override"); 
var db = require("./models");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static")); 
app.use(express.urlencoded({extended:false})); //body parser
app.use(methodOverride("_method")); 

// root route 
app.get("/", function(req, res){
    res.render("index"); 
}); 

//show games
app.get("/games", function(req, res){
    // Try and get all records
    db.game.findAll().then(function(games){
    // find daya within data object and send back 
        // console.log(games); 
        // render data 
        res.render("games/index", {games});  
    });
});

//post a game 
app.get("/games/new", function(req, res){
    res.render("games/new")
    // console.log(game)
}); 


//post a game 
app.post("/games", function(req, res){
    var newGame = req.body;
    db.game.create(newGame);
    res.redirect("/games"); 
})


// display a specific game 
app.get("/games/:id", function(req, res){
    db.game.findById(parseInt(req.params.id)).then(function(game){
        res.render("games/show", {game});
    });    
});    


//update
app.put("/games/:id", function(req,res) {
    db.game.update({
            name: req.body.name,
            description: req.body.description,
            players: req.body.players
    },  {
        where: {
            id: req.params.id
    }
        }).then(function(game) {
        res.redirect("/games/");
        });
    });
    
//edit
app.get("/games/:id/edit", function(req,res) {
    db.game.findById(parseInt(req.params.id)).then(function(game) {
        res.render("games/edit", {game});
    });
});

//delete 
app.delete("/games/:id", function(req,res){
    db.game.destroy({
        where:{
            id: req.params.id
        }
    }).then(function(game){
        res.redirect("/games"); 
    });
}); 



app.listen(3000); 