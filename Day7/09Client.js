var http= require('http')
// option will be used by Request
var options= {
    host:'localhost',
    port: 8090,
    path:'/'
}

//call back to deal with the response received 

var callback=(res)=>{
    var body='';
    res.on('data',(data)=>body+=data)
    res.on('end',(data)=>console.log(body));
}

var req=http.request(options,callback);
req.end();