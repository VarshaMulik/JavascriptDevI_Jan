// In node each and every js file is a node package

// a node package can contain multiple modules


// function Employee(){
//     this.id=1;
//     this.name='Raj';
//     this.city='Pune';
// }

// var emp=new Employee();
// console.log(emp.name,"   ",emp.city);

// using require function commonjs  to import exported things from file

var empModule=require('./01employee')
var emp=new empModule.Employee();
console.log(emp.name,"   ",emp.city);

console.log("Hello World!");

// 3 Type of Modules present is Javascript

// 1. Core Modules - somthing which comes along with default node installation
//                   So don;t need to install them
//                    just need to acquire before use

// events , fs , http


// 2.  Third Party - Not part of default installation
    // install first and then aquire and use

//3.  Custom Modules - You create it , export it and then aquire and use it.    
