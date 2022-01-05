// function sortByLength(arr) {
	
//     let numLetters = 0

    
//     for (let index = 0; index < arr.length; index++) {
   
  
//         if (arr[index].length > numLetters) {
//             numLetters = arr[index].length
  
  
//         }

    
      

//     }
//     return numLetters
// }

// console.log(sortByLength(["jiluis","hello","jonquill","flasques","flasquesfzzfzfzf"]));



function sortByLength(arr) {
	
	
	
    let mots = arr
    let longMax = 0;
    let lastArr =[]

    for (let i = 0; i > mots.length; i++) {
        console.log("geg");
        console.log(longMax);
        if (mots[i].length > longMax) {
           
            longMax = mots[i].length;
           
        }
        
    }
  console.log(mots);
  
  console.log(longMax);
    
    let alo = mots.map(mot => mot.length)
    
    console.log(alo)

    let avion = alo.sort()
    console.log(avion[0]);

    let last = lastArr.push(avion[0])
    console.log(last)
   return last
    
    
    
}


console.log(sortByLength(["Turing", "Einstein", "Jung"]));

