/* 1. Write a TypeScript program to list the properties of a TypeScript object
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno */

interface studentDataface{

    firstName:string;
    lastName:string;
    Roll_No:number;
    FatherName:string;
    Adress:string;
    Age:number;
}

var studentData:studentDataface = {

    firstName: "Hasnain" ,
    lastName : "Ali",
    Roll_No : 29,
    FatherName : "M.Aslam",
    Adress: "Cha Chakar Wala",
    Age:19,

}




console.log(studentData);


