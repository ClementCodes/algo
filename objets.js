
//exerice objet   1



// 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
// Notes
// N/A




//reponse 

// function fiftyThirtyTwenty(ati) { 
//     return {
//       'Needs'  : 0.5 * ati,
//       'Wants'  : 0.3 * ati,
//       'Savings': 0.2 * ati
//     }
// }

// console.log(fiftyThirtyTwenty(10000));
// console.log(fiftyThirtyTwenty);


//exercie objet 2 

// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."
// Notes
// N / A


// function relationToLuke(name) {
// 	const rels = {
// 		"Darth Vader": "father",
// 		"Leia": "sister",
// 		"Han": "brother in law",
// 		"R2D2": "droid"
// 	}
// 	return `Luke I am your ${rels[name]}.`
// }

//										exercie

//Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples
// { 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

// { 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

// { 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"
// Notes
// The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
// I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
// Check the Resources for tips if needed.











// function sayWhat(obj) {
	
// 	return  Object.values(obj).join(' ') + obj[1]
	
	
// }
// const obj = { 1: "Mommy", 2: "please", 3: "help" }

// console.log(sayWhat(obj), "Mommy please help please");

// const cities1 = [
// 	['Tokyo', 37435191],
// 	['Delhi', 29399141],
// 	['Shanghai', 26317104]
// 	]

// function millionsRounding(arr) {
// 	return arr.map(([a,b]) => [a, Math.round(b*0.000001)*1000000])
// }

// console.log(millionsRounding(cities1), [
// 	['Tokyo', 37000000],
// 	['Delhi', 29000000],
// 	['Shanghai', 26000000]
// ])
    
//   				exerecice

// //Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// Examples
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Notes
// The object will always contain items (no empty objects).
// The sum of the items will always be greater than the limit.










// const obj = { skate: 20000, painting: 30000, shoes: 1 }
// const obj2 = { "baseball bat": 31}




// function calculateDifference(obj, limit) {

// 	let hello = Object.values(obj)
// 	const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 	let reduce = hello.reduce(reducer)
	
// 	return reduce - limit
// }	


// console.log(calculateDifference((obj)))








// function inkLevels(inks) {
	
// 	let itbe =  Object.values(inks)
	

// 	console.log(itbe);

	
// 	const reducer = (a, b) => {
// 		a - b
// 	}

// 	let ville = itbe.sort()
	

// 	return ville[0]
// }


// console.log(inkLevels({
// 	"cyan": 23,
// 	"magenta": 12,
// 	"yellow": 10
// }), 10);;

//										exercice



// function freeShipping(order) {	
// 	let itbe =  Object.values(order)
// 	const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 	let ville = itbe.reduce(reducer)
	
// 	console.log(itbe);
// console.log(ville);
	
// 	console.log(arr);
// if(ville > 50){
// 	return true
// } else {
// 	return false
// }
	

// }
// console.log(freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99}), false);

// console.log((freeShipping({'Flatscreen TV': 399.99}), true));

//  								exercice
// function afterNYears(names, n) {
// 	for (let k  in names) {
// 		names[k] += Math.abs(n);
// 	}
	//                                      +=      addition
// 	return names;
// }

// // tres bon ca

// console.log(afterNYears({
// 	"Joel" : 32,
// 	"Fred" : 44,
// 	"Reginald" : 65,
// 	"Susan" : 33,
// 	"Julian" : 13
// }, 1));

// for (const key in object) {
	
// }




//                                    exercice   interressant

// Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// Examples
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
// Notes
// All of the letters in the input list will always be lowercase.

// function mapping(letters) {
// 	return letters.reduce((a, c) => (a[c] = c.toUpperCase(), a), {});
// }

// console.log(mapping(["a", "b", "c", "d"]))









// function calculateDifference(obj, limit) {
// 	let arr = []
// for (const key in obj) {
// 	if (Object.hasOwnProperty.call(obj, key)) {
// 		const element = obj[key];
		
		

// 		let halo = arr.push(element)

		
		
	
// 	}
// }
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 	console.log(arr.reduce(reducer));
	
// 	let ou = arr.reduce(reducer)
// return ou  - limit
// }


// const obj = { skate: 20000, painting: 30000, shoes: 1 }

// console.log(calculateDifference(obj, 50000),1);
//le but de l exercice esr d inverse les lettres de minuscule a capitale et vice et versa (musique des inconnus)

// function reverseCase(str) {
	
// 	let array = str.split("")
// let arr = []

// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];

// 	if (element == element.toUpperCase()) {
// 	arr.push( element.toLowerCase())
	
	
// 	} else if (element == element.toLowerCase()) {
// 		arr.push( element.toUpperCase())
// 	}
	
	
// }
// 	return arr.join("")

	
// }

// console.log(reverseCase( 'hAPPY bIRTHDAY'));






// function maxTotal(nums) {
// 	let ordre = nums.sort(function (a, b) {
// 		return b - a;
// 	});
// 	console.log(ordre);
		

	
// 	return ordre[0] + ordre[1] + ordre[2] + ordre[3] + ordre[4]
// }
// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));







// Écrivez une fonction qui bégaye un mot comme si quelqu'un avait du mal à le lire. Les deux premières lettres sont répétées deux fois avec des points de suspension ... et un espace après chacune, puis le mot est prononcé avec un point d'interrogation ?


// function stutter(word) {
// 	let hello = word[0] + word[1]

// 	let aie = hello + "..."
// 	let aie2 = aie  +aie
// 	return aie2 + word + "?"
// }



// console.log(stutter("incredible"));



// exercice 
// Create a function that will put the first argument, a character, between every word in the second argument, a string.



// function add(char, str) {
	
// 	const r =  /\s/g
	
// return 	str = str.replace(r, char)
// }


// console.log(add("#", "hello world"));




//exercice 
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// function spaceMeOut(str) {
	

// 	return str.split('').join(' ')
// }



// console.log(spaceMeOut("space"));



//exercice 
// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

// function checkTitle(title) {
	

// 	let separation = title.split(" ")
// 	console.log(separation[0][0]);
	
	
	
// 	const isBelowThreshold = (currentValue) => {

// 		console.log(	currentValue[0][0] );e	
// 	return 	currentValue[0][0] == 	currentValue[0][0].toUpperCase()
		
// 	}


// return separation.every(isBelowThreshold)


// }


// console.log(checkTitle("A Mind Boggling Achievement"));
// console.log(checkTitle("Water is transparent"));

function battingAvg(arr) {
	let hits = 0;
	let atBats = 0;
	for (let i = 0; i < arr.length; i++) {
	  hits += arr[i][0];
	  atBats += arr[i][1];
	}
	let avg = (hits / atBats).toFixed(3);
	return avg.slice(1);
  }

console.log(battingAvg([
	[0, 0],
	[1, 3],
	[2, 2],
	[0, 4],
	[1, 5]]
))