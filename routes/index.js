
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
  //  res.render("index", { username:  req.session.username });


    if( req.session.username != "" && typeof  req.session.username != "undefined")
    {

        res.render("index", { username:  req.session.username });
    }
    else
    {

        res.redirect('login');
    }


/*res.render('index.html');*/
};