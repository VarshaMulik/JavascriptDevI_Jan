

var fs=require('fs');
const { isBuffer } = require('util');
// fs.stat('just.txt',function(err,stats){
//  if(err){
//      console.log(err);
//      return;
//  }
//  console.log('isFile :',stats.isFile());
//  console.log('size :',stats.size);
//  console.log('isDirectory :',stats.isDirectory());
//  console.log(stats);
// })

// getting directory details

// fs.readdir("D:\\VSCodeWKSP\\JavascriptDevI_Jan\\Day7",function(err,files){
//     if(err){
//         return console.log(err);
//     }
//     files.forEach(file=>console.log(file) )
// })

// reading a file

//asyschronous
// fs.readFile('just.txt',(err,data)=>{
//     if(err) return console.log(err);
//     else{
//         console.log(data.toString());
//     }
// })


//synchornous
var data= fs.readFileSync('just.txt');
console.log(data.toString());

console.log('Program ends!');