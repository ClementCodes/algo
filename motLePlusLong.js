const trouver =(string)=> {

    let mots = string.split(' ');
    let longMax = 0;
    let arr = [];

    for (let i = 0; i < mots.length; i++) {

        if (mots[i].length > longMax) {
            longMax = mots[i].length;
        }

    }

/* deuxieme boucle for pour sortir le ou les plus longs mots! */
    for (let i = 0; i < mots.length; i++) {
console.log(mots[i].length);
console.log(longMax);
        if (mots[i].length === longMax) {
            console.log(mots[i]);
            arr.push(mots[i]);
        }

    }

    return arr.join("");
}
   



    console.log(trouver("le la abcedaire mot le plus long vitren"));




















// const voyelle = (param) => {
    

//     let array = ["a", "e", "u", "o"]

//     for (let index = 0; index < array.length; index++) {
//         const element = array;
       
//         console.log(element);
//         return element
        
//     }
 
// }
  
//   console.log(voyelle("eoue"));


//  const push = (params) => {
    
//     let tabl = []

//     let spitStringTabl = params.split("")

//     console.log(spitStringTabl);
    
//     let hello = spitStringTabl.map(x => tabl.push(voyelle(x)))
//   return tabl
    
// //   let filtre = tabl.filter(letter => voyelle(letter))
// // console.log(filtre);

  
    
// }

// console.log(push("steaaaee"))





