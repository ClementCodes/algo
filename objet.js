//exercice 1)
//          Which Generation Are You?


// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".



// function generation(x, y) {
// 	const elo = {
// 	  '-3': { m: "great grandfather", f: "great grandmother" },
// 	  "-2": { m: "grandfather", f: "grandmother" },
// 	  "-1": { m: "father", f: "mother" },
// 	  0: { m: "me!", f: "me!" },
// 	  1: { m: "son", f: "daughter" },
// 	  2: { m: "grandson", f: "granddaughter" },
// 	  3: { m: "great grandson", f: "great granddaughter" },
// 	};
// 		return elo[x][y]
// 	}

// console.log(generation(-3, "m"))






////EXERCICE 2)



// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statment here).

// Examples
// error(1) ➞ "Check the fan: e1"

// error(2) ➞ "Emergency stop: e2"

// error(3) ➞ "Pump Error: e3"
// Notes
// Do this without using the switch or if statements.







//             ------------------------------------------------------------------------------------------
// function error(n) {
// 	const hello = {
// 		1: 'Check the fan: e1',
// 		2: 'Emergency stop: e2',
// 		3: 'Pump Error: e3',
// 		4: 'c: e4',
// 		5: 'Temperature Sensor Error: e5',
// 	}[n] || 101


// 	return hello
// }

// console.log(error(2));


//-----------------------------New Eexrcice--------------------------------------


// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.



function toArray(obj) {
	
	
console.log("test reussit");
return 	Object.entries(obj)
	//
}


console.log(toArray({ a: 1, b: 2 }));