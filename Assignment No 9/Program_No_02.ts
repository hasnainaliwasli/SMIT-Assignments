/* 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };  */

interface studentData{
    Name:string;
    Class:string;
    RollNo:number;
}

var student:studentData = {

    Name : "Hasnain Ali",
    Class: "X",
    RollNo: 29
}

console.log("Object Before the Deleting property: ",student);

delete student.RollNo;

console.log(`Object after the Deleting " RollNo " property: `,student);
