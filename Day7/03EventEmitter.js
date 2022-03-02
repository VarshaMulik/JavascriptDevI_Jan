

// var EventEmitter= require('events').EventEmitter;
// var ee=new EventEmitter();
// console.log("Hello")

let events =require('events');
const { EventEmitter } = require('stream');

var ee= new events.EventEmitter();

// // on method allows to to define new Event - subscriber
// //subsriber
// ee.on('someEvent', function(){console.log('Some Event Happened!')});
// //publsh
// ee.emit('someEvent'); // Publish event/ raise


// ee.setMaxListeners(20);

// ee.on('someEvent', function(){console.log('Some Event Happened!1')});
// ee.on('someEvent', function(){console.log('Some Event Happened!2')});
// ee.on('someEvent', function(){console.log('Some Event Happened!3')});
// ee.on('someEvent', function(){console.log('Some Event Happened!4')});
// ee.on('someEvent', function(){console.log('Some Event Happened!5')});
// ee.on('someEvent', function(){console.log('Some Event Happened!6')});
// ee.on('someEvent', function(){console.log('Some Event Happened!7')});
// ee.on('someEvent', function(){console.log('Some Event Happened!8')});
// ee.on('someEvent', function(){console.log('Some Event Happened!9')});
// ee.on('someEvent', function(){console.log('Some Event Happened!10')});
// ee.on('someEvent', function(){console.log('Some Event Happened!11')});
// ee.on('someEvent', function(){console.log('Some Event Happened!12')});
// ee.emit('someEvent');

// ee.on // multiple times 
// ee.once('firstConnection',function(){
//     console.log('First connection Once ');
// })

// ee.emit('firstConnection');
// ee.emit('firstConnection');


// removeListener

function One(){
    console.log('Excuting listener 1');
}

function Two(){
    console.log('Excuting listener 2');
}


ee.on('someEvent',One);
ee.on('someEvent',Two);
ee.on('anotherEvent',function(){console.log("This is listener of anotherEvent")})

ee.emit('someEvent');
console.log('Lets remove listener two' )
// // removing specific listener of someEvent
// ee.removeListener('someEvent',Two)
// ee.emit('someEvent');

// // removing all  listeners of someEvent
//ee.removeAllListeners('someEvent')  // it will remove all listeners of someEvent 
ee.removeAllListeners();
ee.emit('someEvent');
ee.emit('anotherEvent');


var radium = new EventEmitter();
radium.on('radiation',function (ray){console.log(ray)});

setInterval(function(){
    radium.emit('radiation','GAMMA');
},1000);


