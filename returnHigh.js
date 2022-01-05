function highestDigit(number) {
	
    let enchaine = number.toString()
	let arr = enchaine.split("")
    let ordre = arr.sort()
    console.log(ordre);

    let concate = [...ordre]
    console.log(concate);
    return concate[0]
    
}


console.log(highestDigit(342));
