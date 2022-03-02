

var http =require('http');
var fs=require('fs');
// http.createServer((req,res)=>{

//     console.log(req.url);
//     res.write("<h1> Response From My Server!</h1>");
//     res.write("<h2>Some Text</h2>");
//     res.end();
// }).listen(8090,()=>{console.log("My Server is started on port : 8090")});

// http.createServer((req,res)=>{

//     console.log(req.url);
//     res.write("<html><body><h1> Response From My Server!</h1>");
//     res.write("<h2>Some Text</h2></body></html>");
//     res.end();
// }).listen(8090,()=>{console.log("My Server is started on port : 8090")});

http.createServer((req,res)=>{

    console.log(req.url);
    if(req.url==='/'){
        fs.readFile('home.html',(err,data)=>{
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            res.end();
        })
    }else  if(req.url==='/about'){
        fs.readFile('aboutUs.html',(err,data)=>{
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            res.end();
        })

    }
    else  if(req.url==='/contact'){
        fs.readFile('contact.html',(err,data)=>{
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            res.end();
        })
    }
}).listen(8090,()=>{console.log("My Server is started on port : 8090")});
