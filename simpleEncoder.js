const  simpleEncoder = str => {
	
    let tortue = ""

    let string = str.toLowerCase()
    let tableau = string.split("")
    console.log(tableau);
    let join = tableau.join(' ')
    console.log(join);
    let coco = join.lastIndexOf()
    console.log(coco);
    
   


    let map =  tableau.map(last => {
        if (last === "a" ||last ==="r") {
            return "["
        } else {
            ']'
        }

  })
    
    return map

    
    // let lastIndexOf = join.lastIndexOf(tortue)




	
}


console.log(simpleEncoder("FllxaSquE salut Tortue Geniale  r"))

