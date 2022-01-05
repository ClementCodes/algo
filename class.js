// ------------------- exercice Classes Class

// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.


// class Rectangle {
//   constructor(sideA, sideB) {
//     this.sideA = sideA
//     this.sideB = sideB
//   }
//   getArea() { return this.sideA * this.sideB }
//   getPerimeter() { return (this.sideA + this.sideB) * 2 }
// }


// class Circle {
// 	//put code here
// 	constructor(radius) {
// 		this.radius = radius
// 	}
	
// 	getArea() {
// 		return Math.PI * this.radius * this.radius
// 	}
	
// 	getPerimeter() {
// 		return 2 * Math.PI * this.radius
// 	}
// }
// let q = new Circle(4.44);
// console.log(q.getArea());
// console.log(q.getPerimeter())


  // unquote and use run to test these cases:


////       autre exercice


//Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

//Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]


// function keysAndValues(obj) {
//   var keys = Object.keys(obj);
//   return [keys, keys.map( key => obj[key] )];
// }


// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));


//  -----------------exercie 3


// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


// function objectToArray(obj) {
	
// return Object.entries(obj)

// console.log("reussit");
// }



//---------------------------exercice 4



// Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
// Notes
// N/A

// function getBudgets(arr) {
	

//   eri=[]

//   const reducer = (previousValue, currentValue) => previousValue + currentValue;

//   let ele = arr.forEach(element => eri.push(element.budget));

// let alo =  eri.reduce(reducer)
//   return alo + "reusit"

// }

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]));




//exercice 4 ou 5 ou 6 


// Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples
// mostExpensiveItem({
//   piano: 2000,
// }) ➞ "piano"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }) ➞ "tv"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }) ➞ "stereo"
// Notes
// There will only be one most valuable item (no ties).
// The object will always contain at least one item (no empty objects).



function mostExpensiveItem(obj) {
	
  
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]
  }



  

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}));


function sortDescending(num) {
	
  let tabl = [num]
  let stringeux = tabl.toString()
   let splitage = stringeux.split("")
  console.log(typeof stringeux);
  let ordre =   splitage.sort(function (a, b) {
       return b - a
     })
  let stringette = ordre.join("")
  
  

  let tablette = parseFloat(stringette)
  console.log( typeof tablette);

  return tablette

  // sort(function (a, b) {
  //   return b - a
  // })
// return	num.push(tabl)
//   if (arr > 0) {
//     return arr.sort(function (a, b) {
//       return a - b
//     })
//   }
//     else
//       {
//           return arr = [] }
	
}

function isAvgWhole(arr) {
	
	
	const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let coco = arr.reduce(reducer)/5
  console.log(coco%5);
	if ( Number.isInteger(coco)) {
  return true
}else{
	return false
}

}

console.log(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]));