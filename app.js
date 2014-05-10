
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express()
    , cookieParser = require('cookie-parser')
    , session      = require('express-session');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(cookieParser()) // required before session.
app.use(session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: true }}))
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;
var db = new Db('test', new Server('localhost', 27017));


db.open(function(err, db) {
    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get('/login',user.loginForm);
    app.post('/login',function(req,res){

        var username=req.body.userName;
        var password=req.body.password;


        db.collection('jayApp').find({userName:username,password:password}).toArray(function(err,docs){

            if(typeof docs!='undefined' && docs.length>0)
            {



                req.session.username=username;

                res.render('index', { username: username });

            }
            else{
                res.render('login');
            }



        });
    });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
