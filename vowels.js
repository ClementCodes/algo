// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.


// Examples
// firstVowel("apple") ➞ 0

// firstVowel("hello") ➞ 1

// firstVowel("STRAWBERRY") ➞ 3

// firstVowel("pInEaPPLe") ➞ 1
// Notes
// Input will be single words.
// Characters in words will be upper or lower case.
// "y" is not considered a vowel.
// Input always contains a vowel.



function firstVowel(str) {
	
    const regex = /[aeiou]/g;
 
let minuscule = str.toLowerCase()
let lettre =  minuscule.search(regex)
return lettre
// for (const iterator of str) {
//   console.log(str.search(regex));  


// }
    
  
} 

console.log(firstVowel("gg .  g ebteub"));


// let paragraph = "eetetetgraduellement"


// const notes = [1, 3, 4]


// for (const iterator in notes) {
    
//     console.log(iterator);
// }

// notes.map((note) => console.log(note))


// const regex = new RegExp('\\e+');

// console.log(paragraph.search(regex));

// console.log(paragraph[paragraph.search(regex)]);