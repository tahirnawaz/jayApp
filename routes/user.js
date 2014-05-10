
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.loginForm = function(req, res){
    if(typeof req.session !='undefined')
    {

        if( req.session.username != "" && typeof   req.session.username!= "undefined")
    {
        res.redirect('/', { username:  req.session.username });

    }
    else
    {

        res.render("login");
    }
    }
        else{
        res.render("login");
    }

};