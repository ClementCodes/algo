
// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"

// a1.lname ➞ "Smith"

// a1.fullname ➞ "John Smith"

// a1.initials ➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalised.
// Check the Resources tab for some helpful tutorials on JavaScript classes.





// class Name {
// 	constructor(f,l){
// 		this.fname = this.correct(f);
// 		this.lname = this.correct(l);
// 	}
// 	correct(s){
// 		return s.slice(0,1).toUpperCase()+s.slice(1).toLowerCase();
// 	}
// 	get fullname(){
// 		return `${this.fname} ${this.lname}`
// 	}
// 	get initials(){
// 		return `${this.fname[0]}.${this.lname[0]}`
// 	}
// }


// ------------------------------------------------------//
// autre exercice 

// ------------------------------------------------------//

// Count Number of Instances
// Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.

// Examples
// u1 = new User("johnsmith10")
// User.userCount ➞ 1

// u2 = new User("marysue1989")
// User.userCount ➞ 2

// u3 = new User("milan_rodrick")
// User.userCount ➞ 3
// Make sure that the usernames are accessible via the instance attribute username.

// u1.username ➞ "johnsmith10"

// u2.username ➞ "marysue1989"

// u3.username ➞ "milan_rodrick"
// Notes
// Feel free to check out the resources provided in the Resources tab for some helpful information on JavaScript classes!


//resultat reponse 


// class User {
// 	static userCount=0;
// 	constructor(username) {
//     this.username = username;
// 		User.userCount++;
//   }
// }
``

// ------------------------------------------------------//

/// autre exercice //

// ------------------------------------------------------//
// The Sweetest Ice Cream
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.

// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:

// Flavors	Sweetness Value
// Plain	0
// Vanilla	5
// ChocolateChip	5
// Strawberry	10
// Chocolate	10
// You'll be given instance properties in the order flavor, numSprinkles.

// Examples
// ice1 = IceCream("Chocolate", 13)         // value of 23
// ice2 = IceCream("Vanilla", 0)           // value of 5
// ice3 = IceCream("Strawberry", 7)        // value of 17
// ice4 = IceCream("Plain", 18)             // value of 18
// ice5 = IceCream("ChocolateChip", 3)      // value of 8

// sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23

// sweetestIcecream([ice3, ice1]) ➞ 23

// sweetestIcecream([ice3, ice5]) ➞ 17
// Notes
// Remember to only return the sweetness value.
// IceCream class is provided (check Tests tab).















//resultat
// function sweetestIcecream(arr) {
// 	var sweetVal = {
// 		"Plain" : 0,
// 		"Vanilla" :	5,
// 		"ChocolateChip" :	5,
// 		"Strawberry"	: 10,
// 		"Chocolate" :	10
// 	};
	
// 	var res = arr.map(elem => sweetVal[elem["flavor"]] + elem["numSprinkles"]);
// 	return Math.max(...res);
// }



// function set(arr) {
	
// 	let irr = []
// 	return monObjet = new Set(arr)
	
// let hello = monObjet.map(mep => mep.push(irr))

// return irr
// }

// Test.assertSimilar(set([1, 3, 3, 5, 5]), [1, 3, 5])





// function num_of_digits(num) {
	
// 	let array = []
// 	let tableau = [num]
// 	let longueur = tableau.slice(" ")

// 	console.log(tableau);
// 	console.log(longueur);
	
// }
	
// console.log(num_of_digits(13124))


// function init() {
// 	var nom = "Mozilla"; // nom est une variable locale de init
// 	function afficheNom() { // afficheNom est une fonction interne de init
// 	  console.log(nom); // ici nom est une variable libre (définie dans la fonction parente)
// 	}
// 	afficheNom();
//   };
//   init();

//____________autre exercice_____________///


// Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.
// Notes
// N/A


// function isSpecialArray(arr) {
	
// 	function pair(nbr) {
// 		if (nbr % 2 === 0) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
	
// 	let tour = arr.map(tour => pair(tour))
	
// 	//faire pair avec index 
// 	const iterator = arr.keys()
// 	let hiha = []
// 	for (const key of iterator) {
// 		hiha.push(key)
// 	}
// 	let tour2 = hiha.map(toure => pair(toure))
	
	

// 	let test1 = JSON.stringify(tour)
// 	let test2 = JSON.stringify(tour2)
// console.log(test1);
// console.log(test2);
// 	if (test1 === test2) {
// 		return true
// 	} else {
// 		return false
// 	}

// }

// console.log(isSpecialArray([0, 5, 9, 1, 6, 1, 6, 3]));



//:zautre exercice


// Square Every Digit
// Create a function that squares every digit of a number.

// Examples
// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414
// Notes
// The function receives an integer and must return an integer.


// function squareDigits(n) {
// 	let hella = n.toString()
// 		let hello = hella.split("")
// 	console.log(hello);
// 	let helia = Number
// let helouine = 	hello.map(mep => Math.pow(mep, 2))
// 	let bi = helouine.join("")
// 	console.log(typeof bi);
// 	const count = parseInt(bi, 10) 
// 	return count


		
		
// }
	

// console.log(squareDigits(9119))




//new exercice


// Algorithms I: Introduction to Recursion
// Welcome to the beginning of this collection on Computer Science Algorithms. Admittedly there are other challenges on Edabit that deal with recursion and algorithmic processes, but these particular challenges are designed to give examples and to educate users on the topics being covered.

// Recursion
// In computer science, "recursion" is the act of writing a function that calls itself from within its own code. The function below better helps explain and illustrate recursion by simply counting down from a given number to zero:

// function factorial(num) {
//   let targetNumber = 0

//   if (num == targetNumber)
//     {console.log("Countdown complete!")}
//   else
//     {factorial(num - 1)}
// }
// Explanation
// The above function starts by initializing the target number, which is zero, then it creates a base case by checking if the inputted number has reached the target number yet. If it has, then the function ends and it prints the statement, else the function inputs num subtracted by one and then runs the function again.

// When using recursive functions a "Base Case" is needed. A base case will stop the function once it reaches its intended goal. In the absence of a base case, the program can either crash due to "Stack Overflow" or by initiating an "Infinite Loop."

// On a side note, initializing variables in recursive functions can sometimes be problematic because when the function runs again it will reset the value of that variable. For this specific recursive function the variable works fine because the target number we're trying to reach is consistently zero.

// Instructions
// The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24

// Examples
// factorial(5) ➞ 120

// factorial(3) ➞ 6

// factorial(2) ➞ 2
// Notes
// Puts statements can be added to the Countdown function example for illustrative purposes if need be.
// Terms that are placed in italics ("example"), while not always necessary to completing the challenge, can be helpful or just generally good to know as an aspiring programmer or computer science student/enthusiast.
// Several of the challenges that will be covered in this collection on algorithms can be solved non-recursively and without implementing the algorithms described in each challenge. I implore anyone solving these challenges to do them as intended. Not understanding the concepts taught will be an obstacle to later challenges and won't aid anyone in advancing their skills as a programmer.
// If you are stuck please check the Resources tab, Comments tab, or if you're really stuck, use the Solutions tab to unlock the answers.



// exercie reussit
// function factorial(f) {
// 	let x = 1
	
// 	for (let index = 2; index < f +1; index++) {
// 		x = x * index
		
// 	}
// 	return x 

// }

// console.log(factorial(5))


// nouvel exercice mother fucker 

// Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// A one indicates that a connection is true and a zero indicates a connection is false.

// Here is how the above model might be written out:

// On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
// On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
// On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
// On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
// Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

// Examples
// Graph Example

// Adjacency Matrix:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// Nodes 0,1 should return true.
// Nodes 0,2 should return false.
// Graph Example 2

// [
//   [ 0, 1, 0, 1, 1 ],
//   [ 1, 0, 1, 0, 0 ],
//   [ 0, 1, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1 ],
//   [ 1, 0, 0, 1, 0 ]
// ]
// Nodes 0,3 should return true.
// Nodes 1,4 should return false.
// Notes
// Graphs may have between 0 and 25,000 nodes.
// Time Limit: 100 milliseconds.


// function isAdjacent(matrix, node1, node2) {
// 	return matrix[node1][node2] === 1
// }

// const matrix1 = [[0, 1, 0, 0], [1, 0, 1, 1], [0, 1, 0, 1], [0, 1, 1, 0]]

// console.log(isAdjacent(matrix1, 0, 2));








// exercieet correction 

// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Box Sequence Image

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...
// Examples
// boxSeq(0) ➞ 0

// boxSeq(1) ➞ 3

// boxSeq(2) ➞ 2
// Notes
// Step (the input) is always a positive integer (or zero).





// function boxSeq(step) {
// 	return step % 2 === 0 ? step : step + 2;
// }






// autre exercice 



// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// Examples
// amplify(4) ➞ [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40

// amplify(3) ➞ [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4

// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
// Notes
// The given parameter num will always be equal to or greater than 1.
// Remember to include the num as the higher bound of the sequence (see the Examples) above.
// A number a amplified by a factor b can also be read as: a * b.
// A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.








const amplify = (num) => {
	let result = [];
	for (let i = 1; i <= num; i++) {
		result.push(i);
	}
	return result.map(x => x % 4 == 0 ? x*10 : x);
}



console.log(amplify(4));