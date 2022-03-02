
var fs=require('fs');
var zlib=require('zlib');

var readStream=fs.createReadStream('just.txt');
var writesteam=fs.createWriteStream('copyOfJust.gz');
readStream.pipe(zlib.createGzip()).pipe(writesteam);