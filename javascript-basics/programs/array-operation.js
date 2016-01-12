	/*
	 * If you are including this file in HTML
	 * and don't know how to access browser console,
	 * then try using window.alert() syntax.
	 */


	 /* Author: Ravi Shankar
	  */


var myStudents=[];

myStudents=["Abhijeet", "Abhinav", "Aanchal", "Himanshu", "Sanjana"];
console.log(myStudents);

var ind = myStudents.indexOf("Aanchal");
myStudents.splice(ind, 1);
console.log(myStudents);

myStudents.push("Dixita");
console.log(myStudents);

myStudents = [];
console.log(myStudents);
