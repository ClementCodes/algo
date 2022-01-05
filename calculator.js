// // cours debug

// //deja elle doit prendre un solde en entrée
// //elle doit gerer les fonctions de base : +,-,*,/
// //elle doit afficher le resultat 


// //


// class Calculator {

//     constructor(result) {
//         this.result = result
// }
  
//     add(number) {
//         this.result = this.result + number
//         return this 
//   }
    
//   minus(number) {
//     this.result = this.result - number
//     return this 
// }
    
// divideBy(number) {
//     this.result = this.result / number
//     return this 
// }
       
// multiply(number) {
//     this.result = this.result * number
//     return this 
// }
//     reset() {
//         this.result = 0
//         return this
//     }
// }


// let calc = new Calculator(5)

// //5 
// console.log(calc.add(2).add(2).multiply(4));



// Duplication correcte d'un tableau

// var tabLanguages_2 = new Array();

// for (var i = 0; i < tabLanguages.length; i++){
//   tabLanguages_2[i] = tabLanguages[i];
// }

// tabLanguages_2[0] = 'JAVASCRIPT';
// document.write(tabLanguages[0]);// Affiche javascript.
// // Les 2 tableaux sont bien indépendants










    


const multiplyArray = (param) => {


let arri = []

    let stud = [[
        {
            id: "faker.datatype.uuid()",
            name: "faker.name.firstName()",
            cursus: "faker.name.jobType()",
            average:"faker.datatype.number({min:10,max:20})"
        }
    
    ]]
   for (let index = 0; index < param; index++) {
    
       
   arri.push(stud)
  
       
   }

   return arri
}

console.log(multiplyArray(7));

