//le but de cet exercice est de retourner le nom  plus hellosii le deuxieme parametre est 1 et si le deuxeiemem parametre est zero il faut retourner bye plus le nom tout en sachant que la premiere lettre edoit estre mise en majuscule







function sayHelloBye(name, num) {
	
    let tableauSepare = name.split("")
    console.log(tableauSepare);

    let premiere = tableauSepare[0]
    let prims = premiere.toUpperCase()
    
    console.log(prims);

	if(num ==1){
		
		return "Hello" + " " +  prims+ name.slice(1)
		
	}else{
		return "Bye" + " " + name
	}
	
}


console.log(sayHelloBye("thomas", 1));


function mirror(arr) {
	
    let hello = arr
    let hella = arr.reverse().slice(1)
    

    // let hello = arr + arr.reverse()
    return  hella + hella
}

console.log(mirror([1, 2, 3, 4, 5]));