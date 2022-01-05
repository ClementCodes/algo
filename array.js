// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]
// Notes
// Watch out for negative integers (numbers).


// function findLargestNums(arr) {
	
    
//     console.log(arr);
    

// let toc = arr.map(tour =>  Math.max(...tour))

//     console.log(toc);
//     return toc
   
// }



// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));



/// -----exercice 2  ----


// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).


function countTrue(arr) {


    let trou = 	arr.filter( tra => tra == true)
   
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    



   



    let papa = trou.reduce(reducer, 0)
    
let coco =[]
    if (papa == coco ) {
        return 0
        
    }if(papa == false){
			return false
		}
	
	else {
        return papa
    }


}
    
console.log(countTrue([true, false, false, true, false]));
console.log(  countTrue([]));
// console.log(  countTrue([false, false, false]));
