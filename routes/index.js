
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
if(typeof req.session !='undefined')
{

    console.log("I am in index");
    console.log(req.session);
    if( req.session.username != "" && typeof  req.session.username != "undefined")
     {

     res.render("index", { username:  req.session.username });
     }
     else
     {

     res.redirect('login');
     }
}
    else{
    res.redirect('login');
}
/*res.render('index.html');*/
};