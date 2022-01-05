
// /********  EXEMPLE */
// /*
// [
// { word: 'posuere', occurences: 2 },
//   { word: 'massa', occurences: 2 },
//   { word: 'tristique.', occurences: 2 },
//   { word: 'a', occurences: 3 },
//   { word: 'velit,', occurences: 2 },
//   { word: 'eget', occurences: 4 },
//   { word: 'feugiat', occurences: 3 },
//   { word: 'odio.\n\nQuisque', occurences: 2 },
// ]
// */



//------------ Le but de cet exercice est de trouver le nombre de  mots identiques dans le paragraphe   "p" 
//------------  donc  de prendre commme index le mot  word puis l'index occurence comme index pour le nombre de répétitions;


////////////------------------------BROUILLONS////---------------------------------------------------------------------------

//------------Premiére étape:Prendre chaque mot du paragraphe afin de les séparé et les mettres entre guillemets



let p = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu euismod purus, eu scelerisque lorem. Quisque elementum nulla ipsum, vitae sollicitudin magna malesuada at. Integer dignissim odio nec est hendrerit venenatis. Nam ac lacus ut lectus dignissim mollis. Nullam vitae tortor at quam elementum fermentum. Praesent tempus, magna vitae tincidunt sodales, libero leo ornare augue, sit amet mollis dolor quam et elit. Curabitur eleifend, augue eu interdum imperdiet, ipsum velit ultricies neque, ac pulvinar risus tortor ut metus. Suspendisse iaculis mauris sapien, id ullamcorper lorem condimentum quis. Pellentesque tristique lorem leo, sit amet maximus nunc condimentum et. Donec dignissim nisl sit amet eros gravida faucibus. Morbi dapibus lorem in rhoncus luctus. Nullam suscipit lorem ut arcu vehicula vulputate. Ut posuere massa at vehicula tristique. Integer a iaculis velit, eget feugiat odio.

Quisque non dolor non mauris finibus varius vel id nisl. Aenean feugiat ipsum in pellentesque faucibus. Donec odio lacus, porta vitae ullamcorper et, vehicula a nibh. Suspendisse dictum diam id scelerisque dignissim. Phasellus eu elit in tellus porttitor efficitur. Vivamus scelerisque rhoncus iaculis. Fusce laoreet cursus nisl ac tincidunt. Pellentesque rhoncus erat quis arcu cursus, sit amet vehicula neque mattis.

Aliquam vel nibh enim. Quisque maximus vel nisi et vulputate. Sed tempus ullamcorper lectus, imperdiet mattis risus commodo vitae. Donec ex arcu, malesuada non nunc quis, consequat efficitur arcu. Cras ex lacus, viverra sit amet nisi at, tincidunt lacinia leo. Donec consectetur lacus maximus purus gravida, in vulputate enim egestas. Nam aliquet nec ligula eget porttitor. Quisque dictum quam at scelerisque ultricies. Aenean in laoreet turpis, eget mollis lorem.
`




function occurence(paragraphe) {
    
    let array = paragraphe.split(' ')

    let objet = Object.assign({}, array)
    let hello = " fegeg"
    
    console.log(objet);
    console.log(objet.lorem);

    

  
    for (let key in obj) {
     return key
   
        // if ((array[1][i] === array++) && ((array[1] <= array.length)  && (array[1]> arr[i]++))) {
          
        //  si chaque tableau[i] est egale a tableau[i] ++ et plus petit que tableau.lentgh et que arr[i] >arr[i]++  alors  tu me retournes le tableau dans un autre tableau avec la methode push 
//et par la suitece tableau tu le le transformes en objet avex word et le nombre de fois repeté
         
        }  
    }



console.log( occurence.key)


let array = p.split(' ')

let objet = Object.assign({}, array)


  
console.log("helllo");
