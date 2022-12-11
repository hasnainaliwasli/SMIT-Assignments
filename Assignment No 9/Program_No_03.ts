// 3. Write a TypeScript program to get the length of a TypeScript object.   
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 }; 

interface Data{

    name:string;
    class:string;
    rollno:number;

}
var student03:Data = {

name : "David Rayy",
class : "VI",
rollno : 12 

};

var size = Object.keys(student03).length;

console.log(size);

