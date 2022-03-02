

var fs=require('fs');

var stream = fs.createWriteStream('out.txt');
stream.write("Hello How are you?\n");
stream.write("this is next line");
stream.end();

stream.on('finish',()=>console.log('All write completed!'));
