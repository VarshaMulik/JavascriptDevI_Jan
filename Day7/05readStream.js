

var fs= require('fs')


/*
There are four classes of streams:

Readable: a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.
Writable: a stream you can pipe into, but not pipe from (you can send data, but not receive from it)
Duplex: a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream
Transform: a Transform stream is similar to a Duplex, but the output is a transform of its input

*/

var stream= fs.createReadStream('just.txt');

stream.on('data',(datachunk)=>{
    console.log('Chunk starts.....');
    console.log(datachunk);
    console.log(datachunk.toString());
    stream.pause();
    console.log(' stream paused!');

    setTimeout(()=>{
        stream.resume();
        console.log(' Streams Resumed!');
    },1500);

    console.log('Chunk ends.....');
    
})

stream.on('end',(datachunk)=>{
    console.log("No more data to read!")
})