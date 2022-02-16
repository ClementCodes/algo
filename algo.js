/** @format */

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

// function battingAvg(arr) {
//   let hits = 0;
//   let atBats = 0;
//   for (let i = 0; i < arr.length; i++) {
//     hits += arr[i][0];
//     atBats += arr[i][1];
//   }
//   let avg = (hits / atBats).toFixed(3);
//   return avg.slice(1);
// }

// console.log(battingAvg([
// 	[0, 0],
// 	[1, 3],
// 	[2, 2],
// 	[0, 4],
// 	[1, 5]]
// ))

//exercice

// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

// deNest([[[[[[[true]]]]]]]) ➞ true

// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
// Notes
// You only need to retrieve one element.

// 	function deNest(arr) {

// //methode reduce qui rpend deux parametres avec prevent value et current value
// 				//2- La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.

// 			//3-La méthode Array.isArray() permet de déterminer si l'objet passé en argument est un objet Array, elle renvoie true si le paramètre passé à la fonction est de type Array et false dans le cas contraire.

// 			//donc en  gros je prends

// 			let ile = arr.reduce((acc, val) => {
// 				acc.concat(Array.isArray(val) ? deNest(val) : val), []

// 			});
// 			   console.log();
// 			   let botte = ile.join()
// 			   return botte.toString()
// 	   }

// function deNest(arr){
// return arr.flat(Infinity)[0]

// }

// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));

// exercie  Interresssant tableau objet etc

// function monthName(num) {
// 	const mapping = {
// 		1: 'January',
// 		2: 'February',
// 		3: 'March',
// 		4: 'April',
// 		5: 'May',
// 		6: 'June',
// 		7: 'July',
// 		8: 'August',
// 		9: 'September',
// 		10:	'October',
// 		11:	'November',
// 		12:	'December'
// 	};
// 	return mapping[num];
// }

// console.log((monthName(3)))
// function monthName2(num) {
// 	return new Date(2000, num - 1).toLocaleString("en-us", {month: "long"});
// }

// console.log((monthName2(3)))

// function cmsSelector(arr, str) {
// 	return arr.sort().filter((word) => word.toLowerCase().includes(str));
// }

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er"))

// exercice regex de merde

// Using the .test() method in your function, return whether a string contains the characters "a" and "c" (in that order) with any number of characters (including zero) between them.

// const asterisk = string => /ab*c/g.test(string);

// const set1 = new Set([1, 2, 3, 4, 5]);

// console.log(set1.has(1));
// expected output: true

// console.log(set1.has(5));
// // expected output: true

// console.log(set1.has(6));
// // expected output: false

// function testJackpot(result) {

// 	const set1 = new Set([result]);

// 	for (const iterator of set1) {

// console.log(iterator[3]);
// if (iterator[0] === iterator[1] && iterator[2] === iterator[3]&& iterator[2] === iterator[0])
// 	return true

// else {
// 	return false
// }

// 		return set1.has(iterator)

// 	}

// }

// 	function testJackpot2(result) {
// 		return result.every(x => x === result[0]);
// 	  }

// console.log(testJackpot(['@', '@', '@', '@']));

// console.log(testJackpot2(['SS', 'SS', 'Ss', 'Ss']));

// exercice defis renvoie true si pmlus grand sinon renvouie false dans les autres cas

// function freeShipping(order) {
// 	let arr = []
// 	const reducer = (a,b) => {
// 	return 	a + b
// 	}
// 	for (const [key, value] of Object.entries(order)) {
// 		arr.push(value)
// 	  }

// return arr.reduce(reducer)> 50 ?  true :false
// }

// console.log(freeShipping({ 'Shampoo': 5.99, 'Rubber Ducks': 15.99 }))

// const generation = (x, y)=>{
// 	const elo = {
// 	  '-3': { m: "great grandfather", f: "great grandmother" },
// 	  "-2": { m: "grandfather", f: "grandmother" },
// 	  "-1": { m: "father", f: "mother" },
// 	  0: { m: "me!", f: "me!" },
// 	  1: { m: "son", f: "daughter" },
// 	  2: { m: "grandson", f: "granddaughter" },
// 	  3: { m: "great grandson", f: "great granddaughter" },
// 	};

// 	console.log(elo[x][y]);

// 	}

// console.log(generation(-3, "m"))

// let clement = {
// 	nom : ["pierre","n,fp"]
// }

// console.log(clement.nom[1]);

// const elo = {
// 	'-3': { m: "great grandfather", f: "great grandmother" },
// 	"-2": { m: "grandfather", f: "grandmother" },
// 	"-1": { m: "father", f: "mother" },
// 	e: { m: "me!", f: "me!" },
// 	g: { m: "son", f: "daughter" },
// 	2: { m: "grandson", f: "granddaughter" },
// 	3: { m: "great grandson", f: "great granddaughter" },
// };

//   console.log(elo[-3]["m"]);
//   console.log(elo[-3].m);
//   console.log(elo.e.m);
// console.log(elo.g.f);
// for (const [key, value] of Object.entries(elo)) {
// 	console.log(`${key}`);
// 	console.log(key[0]);
// }

// let items = ["joeighe", "ihespf"]
// 	let halo =
// [...items, {
// 	id: new Date().getTime(),
// 	text:"vear"
// }]

// console.log(halo);
// console.log(halo[2].id);

// exercice objet   Distance Between Two Points
// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

// Two points on a Cartesian plane

// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

// Examples
// getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

// getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

// getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095
// Notes
// Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
// The "distance" is the shortest distance between the two points, or the straight line generated from a to b.

// function getDistance(a, b) {
// 	let p =  b.x - a.x
// 	let d = b.y - a.y

// 	let u = Math.pow(p, 2)
// 	let v = Math.pow(d, 2)
// 	let uv = u + v

// 	let hello = Math.sqrt((u) + (v)).toFixed(3)
// 	return + hello

// }

// console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 }));

// let halo = "6.325"
// console.log(halo);

// console.log(Math.hypot(-2, 1));
// console.log(Math.hypot(4, 3));

// console.log(Math.pow(7, 2));

// exercice de decomposition par afectation

// Résultats de traduction
// Poussez les prénoms de tous les utilisateurs dans le tableau des noms.

// Remarques
// Vous n'avez qu'à modifier les paramètres de la boucle "for...of".
// Ignorez l'affectation const str. Ceci n'est utilisé qu'à des fins de validation.
// Consultez la documentation MDN pour en savoir plus sur la déstructuration d'objets dans les boucles "for...of" (consultez l'onglet Ressources).
// const x = [1, 2, 3, 4, 5]; // On crée un "paquet" de données
// const [y, z, e] = x; // On utilise l'affectation par décomposition
// console.log(y); // 1
// console.log(z); // 2
// console.log(x); // 2
// console.log(e); // 2

// function f() {
// 	return [1, 2];
// }

// console.log(f());

// let names = []

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]

// const str = `
// 	for( let {name} of users ) {
// 			names.push(name)
// 	}
// `

//exercice objectss

// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
// "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
// "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
// "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

// function nameScore(name) {
// 	const bet =[...name]
// 	const score = [...name].reduce((a, c) => a + scores[c], 0);

// 	if (score <= 60)  return "NOT TOO GOOD";
// 	if (score <= 300) return "PRETTY GOOD";
// 	if (score <= 600) return "VERY GOOD";
// 	console.log(bet);

// 	return "THE BEST";
// }

// console.log(nameScore('MUBASHIR'));

//exercice tres facile algo
//   A typical car can hold four passengers and one driver, allowing five people to travel around.Given n number of people, return how many cars are needed to seat everyone comfortably.5 personnes en tout bande de fils de pute madre

// function carsNeeded(n) {

// 	let hello = Math.ceil(n / 5)
// 	return hello
// }

// console.log(carsNeeded(5));
// console.log(carsNeeded(18));

// function getAbsSum(arr) {

// 	let array = []

// 	for (let index = 0; index < arr.length; index++) {
// 		const element = arr[index];
// let pi = Math.abs(element)
// 		array.push(pi)

// 	}

// 	return array.reduce((a,b)=>a + b)

// }

// console.log(getAbsSum([2, -1, -3, 4, 8]));

// function oddSum(numbers) {
// 	const reducer = (a, b)=>{
// 	return a + b
// 	}

// for (let index = 0; index < numbers.length; index++) {
// 	const element = numbers[index];

// 	arr2.push(element)
// }

// }

// console.log(oddSum([11, 15, 6, 8, 9, 10]));
// console.log([true, false, true, false, false]);

// function backToHomeTriche(directions) {
// 	const taille = directions.length
// 	console.log(taille);
// 	const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 	let n = 1
// 	let e = 2
// 	let s = 3
// 	let o = 4
// 	arr2 = []
// 	let halo = directions.split("")

// 	for (let index = 0; index < halo.length; index++) {

// 		const element = halo[index];

// 		if (element == "N") {
// 			arr2.push(n)
// 		} else if (element == "E") {
// 			arr2.push(e)
// 		} else if (element == "S") {
// 			arr2.push(s)
// 		} else if (element == "O") {
// 			arr2.push(o)
// 		}
// 	}

// 	let hali = arr2.reduce(reducer)
// 	if(hali - taille == 4)
// 		return true
// 	else {
// 		return false
// 	}
// }

// function backToHome(directions) {

// // en fait une direction inverse l autre: exemple (return n === s && w === e;) d oiu le fait de faire n == s et w = e ok ok
// 	const [n, w, s, e] = ["N", "W", "S", "E"].map(d => directions.split(d).length - 1);
// 	console.log(n,w,s,e);
// 	return n === s && w === e;
//   }
// console.log(backToHome("NNNN"));

// console.log(backToHome("NENESSWW"));

// console.log(backToHome("EEWE"));

// console.log(backToHome("NNSSEEEWWWEW"));

// const [a, b, c, d] = ["1", "3", "5", "6"]

// console.log(typeof a);
// console.log(b);

// function oddSum(numbers){
// 	let result = [];
// 	for (let i = 0; i < numbers.length - 1; i++) {
// 		if ((numbers[i] + numbers[i + 1]) % 2 === 0) {
// 			result.push(true);
// 		} else {
// 			result.push(false);
// 		}
// 	}
// 	return result;

// }

// function oddSum2(numbers){
// 	return numbers.slice(1).map((x, i) => (x + numbers[i]) % 2 === 0)

// }

// // console.log(oddSum([11, 15, 6, 8, 9, 10]));
// // console.log(oddSum2([11, 15, 6, 8, 9, 10]));
// // const helo = (nb) => nb%2 ==0 ? true :false

// //  console.log(helo(2));
// let tableau = ["3", "4", "5"]

// tableau.map((tour, i,g) => {
// 	console.log(tour),
// 	console.log(i),
// 	console.log(g)
// })

// function addEnding(arr, ending) {

// 	return arr.map(arr=> arr+ ending)

// }

// console.log(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'));

// function existsHigher(arr, n) {

// 	let hello = Math.max(...arr)

// 	switch (hello>= n) {
// 		case true: return true

// 			break;

// 		default: return false
// 			break;
// 	}

// }
// function existsHigher2(arr, n) {
// 	return Math.max(...arr)>=n
// }

// console.log(existsHigher([5, 3, 15, 22, 4], 10));
// console.log(existsHigher([1, 2, 3, 4, 5], 8));

// console.log(existsHigher2([5, 3, 15, 22, 4], 10));
// console.log(existsHigher2([1, 2, 3, 4, 5], 8));

// function filterDigitLength(arr, num) {

// 	return arr.filter(x => x.toString().length === num)

// }

// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));
// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
// console.log("attente de cette reponse da'apres");

// console.log([232, 555]);

// console.log([2, 7, 8, 9]);

// console.log( String([2, 7, 8, 9]));

//exercice

// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
// function emotify(str) {

// 	return str.replace(/smile|grin|sad|mad/g, x =>
// 		({ smile: ':D', grin: ':)', sad: ':(', mad: ':P' }[x]))
// }

// function emotify(str) {
//   let [first, mid, last] = str.split(" ");
//   console.log(first, mid, last);
//   let emotify = {
//     smile: ":D",
//     grin: ":)",
//     sad: ":(",
//     mad: ":P",
//   };

//   return `Make me ${emotify[last]}`;
// }

// function emotify(str) {
//   let obj = {
//     smile: ":D",
//     grin: ":)",
//     sad: ":(",
//     mad: ":P",
//   };
//   for (let k in obj) {
//     if (str.endsWith(k)) return `Make me ${obj[k]}`;
//   }
// }

// console.log(emotify("Make me sad"));

// exercice fundameental javascripy

// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

// function minutesToSeconds(time) {
//   let str = time.split("");

//   let minute = str[0] + str[1];
//   let seconde = str[3] + str[4];

//   let temp = minute * 60;

//   if (seconde == 60) {
//     return false;
//   } else if (isNaN(seconde)) {
//     return false;
//   } else {
//     let entier = parseInt(temp) + parseInt(seconde);

//     return entier;
//   }
// }

// function minutesToSeconds(time) {
//   let arr = [];

//   let spil = time.split(":");
//   let minutes = spil[0];
//   let secondes = spil[1];

//   let minutex = parseInt(minutes) * 60;
//   let secondex = parseInt(secondes);
//   let complete = minutex + secondex;

//   if (secondex >= 60) {
//     return false;
//   } else {
//     return complete;
//   }
// }

// const minutesToSeconds2 = (time) => {
//   const [minutes, seconds] = time.split(":").map(Number);

//   console.log(typeof minutes);
//   return seconds > 59 ? false : seconds + minutes * 60;
// };

// console.log(minutesToSeconds("13:56"));
// console.log(minutesToSeconds("10:60"));
// console.log(minutesToSeconds("132:271"));

// console.log(minutesToSeconds2("13:56"));
// console.log(minutesToSeconds2("10:60"));
// console.log(minutesToSeconds2("132:271"));

// exercice Given a string of numbers separated by a comma and space, return the total sum of all the numbers.

// function addNums(nums) {
//   let spleet = nums.split(" ");
//   const reducer = (previousValue, currentValue) => previousValue + currentValue;
//   return spleet.map((tour) => parseInt(tour)).reduce(reducer);
// }

// console.log(addNums("2, 5, 1, 8, 4"));

// exercice fundamental javascript

// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// sliceSum([9, 8, 7, 6], 3) ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.

// function sliceSum(arr, n) {
//   //   let arr2 = [0];

//   //   for (let index = 0; index < n; index++) {
//   //     const element = arr[index];
//   //     arr2.push(element);
//   //   }
//   //   return arr2.reduce(reducer);

//   const reducer = (previousValue, currentValue) => previousValue + currentValue;
//   return arr.slice(0, n).reduce(reducer, 0);
// }

// console.log(sliceSum([4, 2, 5, 7], 4));
// console.log(sliceSum([4, 2, 5, 7], 3));
// console.log(sliceSum([3, 6, 2], 0));

// function joinPath(portion1, portion2) {
//   return `${portion1.replace("/", "")}/${portion2.replace("/", "")}`;
// }

// console.log(joinPath("portion1", "portion2"));
// console.log(joinPath("portion1/", "portion2"));
// console.log(joinPath("portion1", "/portion2"));

// console.log("resultat attendu ");

// console.log("portion1/portion2");

// exercie array
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples
// dropRight([1, 2, 3]) ➞ [1, 2]

// dropRight([1, 2, 3], 2) ➞ [1]

// dropRight([1, 2, 3], 5) ➞ []

// dropRight([1, 2, 3], 0) ➞ [1, 2, 3]

// function dropRight(arr, num = 1) {
//   return arr.splice(0, arr.length - num);
// }

// console.log(dropRight([1, 2, 3]));

// console.log(dropRight([1, 2, 3], 2));
// console.log(dropRight([1, 2, 3], 5));
// console.log(dropRight([1, 2, 3]), 0);
// console.log(dropRight(["banana", "orange", "watermelon", "mango"], 2));
// console.log(dropRight([], 2));

// function nthEven(n) {
//   let e = n * 2 - 2;
//   return e;
// }

// console.log(nthEven(100));

// //Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.

// function concat(...args) {
//   return args.flat();
// }
// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// if (lower< n && n < upper) {
// 	return true
// } else {
// 	return false
// }

// exercice A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// function societyName(friends) {
//   let hello = friends.map((tour) => tour[0]).sort();

//   let gogo = hello.toString();

//   return gogo.replace(/,/g, "");
// }

// console.log(societyName(["Adam", "Sarah", "Malcolm"]));

// const arr = [1, 2, 3];

// console.log(arr.__proto__.__proto__);

// function circle_or_square(rad, area) {
//   hella = 2 * Math.PI * rad;
//   hello = Math.sqrt(area);

//   if (hella < hello) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(circle_or_square(16, 625));
// console.log(circle_or_square(8, 144));
// console.log(circle_or_square(5, 100));

// function evenOrOdd(arr) {
//   const reducer = (a, b) => {
//     a + b;
//   };
//   const reducer2 = (a, b) => {
//     a % 2;
//   };

//   let halo = arr.reduce(reducer, 0);

//   if (halo % 2 == 1) {
//     return "odd";
//   } else {
//     return "even";
//   }
// }

// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([2]));
// console.log(evenOrOdd([2, 3, 4]));
//

//recursivite refaire deamin

// Recursvite

// j'ai compris en fait tu prends x = 32 * 2 mais tu le fais deux foiscar y = 2-1 donc un tour uis un tour en fait c'est le y qui est le facteur du tour heiinnnnnnnnnnnnnnn    !!!!!!!!!!!ç ooooooOOOOOOOOkKkKkKkKkKkKkKkKrrrrrrRRRRRRRR
// const shiftToLeft = (x, y) => (y ? shiftToLeft(x * 2, y - 1) : x);

// console.log(shiftToLeft(-32, 2));
// console.log(shiftToLeft(10, 3));
// function multiSum(n, t = 10) {
//   return t ? n * t + multiSum(n, t - 1) : 0;
// }

// console.log(multiSum(3));

// exercice
// inverser string via recursivite

// function reverse(str) {
//   var newString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i]; // or newString = newString + str[i];  concatenation avec le plus egal
//   }

//   return newString;
// }

// recursivite

// function sum(n) {
//   let newChiffre = 0;
//   for (let index = 0; index < n; index++) {
//     newChiffre = newChiffre + index + 1;
//     console.log(newChiffre);
//   }

//   return newChiffre;
// }
// solution des expert   #2
//
// const sum2 = (n) => (
//   n ? n + sum2(n - 1) : 0);
// console.log(sum2(5));

// console.log(sum(5));

// recursivite mais sans le reduce sinon trop facile

// Write a function that finds the sum of an array. Make your function recursive.

// function sum(arr) {
//   let newChiffre = 0;
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     newChiffre += element;
//     console.log(element);
//   }

//   return newChiffre;
// }

// console.log(sum([1, 2, 3, 4]));
//Find the Highest Integer in the Array Using Recursion

// function findHighest(arr) {
//   return arr.sort(function (a, b) {
//     return b - a;
//   })[0];
// }

// console.log(findHighest([6, 7, 8]));

// function change(x, times) {
//   for (let i = 0; i < x.length; i++) {
//     let j = 1;
//     while (j <= times) {
//       if (i >= j && i < x.length - j) {
//         x[i]--;
//       }
//       j++;
//     }
//   }
//   return x;
// }

// let x = [3, 2, 1, 0, 1, 2, 3];
// console.log(change(x, 3));

// console.log([3, 2, 1, 0, 1, 2, 3]);

// function secondLargest(arr) {
//   let li = arr.sort((a, b) => b - a);

//   return li[1];
// }
// console.log(secondLargest([25, 143, 89, 13, 105]));

// let a = "9";
// let b = "0";
// // console.log(isFinite(parseInt(a) / parseInt(b)) === false);

// let hello = parseInt(a) / parseInt(b);
// console.log(hello);
// console.log(Infinity);
// console.log(e);

// Exercie retourn odd or even

// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"

// function evenOrOdd(arr) {
//   const reducer = (a, b) => a + b;

//   let halo = arr.reduce(reducer, 0);
//   if (halo % 2 == 0) {
//     return "even";
//   } else if (halo == 0) {
//     return "even";
//   } else if (halo == 1) {
//     return "odd";
//   } else if (halo % 1 != 0) {
//     return "odd";
//   } else if (halo % 2 != 0) {
//     return "odd";
//   }
// }

// function evenOrOdd(arr) {
//   return arr[0] ? "even" : "odd";
// }

// console.log(evenOrOdd([0, 1, 5]));
// console.log(evenOrOdd([0]));
// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([]));
// console.log(evenOrOdd([-1023, -1, 3]));

// //test reussit je content au dessus

// Array Operation
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// Examples
// arrayOperation(1, 10, 3) ➞ [3, 6, 9]

// arrayOperation(7, 9, 2) ➞ [8]

// arrayOperation(15, 20, 7) ➞ []

function arrayOperation(x, y, n) {
  let arr = [];
  let arr2 = [];

  for (let index = x; index < y + 1; index++) {
    const element = index;

    arr.push(element);
  }

  let halo = arr.map((tour) => (tour % n === 0 ? arr2.push(tour) : false));

  return arr2;
}

console.log(arrayOperation(1, 10, 3));
console.log([3, 6, 9]);
console.log(10 % 1);
console.log(arrayOperation(15, 20, 5));
