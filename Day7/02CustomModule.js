console.log('Hello World from custom Module');

// Pattern 1

// foo = function(){
//     console.log("Inside Foo!");
// }

// Pattern 2 - export an anonympus functions
// module.exports=function(){
//     console.log('insdie Anonymous function');
// }

// Pattern 3

// module.exports.namedFunExport=function(){
//     console.log('this is named export');
// }

// Pattern 4 exporting Object

var Obj=function(){}
Obj.prototype.show=function(){
    console.log("inside show");
}

module.exports.Obj=new Obj();

