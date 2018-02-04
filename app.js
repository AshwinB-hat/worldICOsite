var express 	= require('express'),
	app			= express(),
	ejs			= require('ejs'),
	path		= require('path'),
	bodyParser  = require('body-parser');

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
	res.render("index");
});


app.listen(process.env.PORT || 3000,(req,res) => {
	console.log("listening on PORT 3000");
});


