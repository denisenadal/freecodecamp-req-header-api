var express =require('express');
var app = new express();

app.use(express.static('public'));

app.get('*',function(req,resp){
	var userAgent = req.headers['user-agent'];
	resp.status(200).json({
		'ip':req.ip,
		'os':userAgent.substring(userAgent.indexOf('\(')+1, userAgent.indexOf('\)') ) ,
		'browser':userAgent.substring(0,userAgent.indexOf('(')-1 ) ,
		'lang':req.headers['accept-language'].substring(0,req.headers['accept-language'].indexOf(',') )
	});
});

app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + process.env.PORT);
});
