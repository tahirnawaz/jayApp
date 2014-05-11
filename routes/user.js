
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.loginForm = function(req, res){

        if( req.session.username != "" && typeof   req.session.username!= "undefined")
    {
        res.redirect('/');

    }
    else
    {

        res.render("login");
    }

};