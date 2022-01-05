const regex = /cle3 4m@nt,/gm;
const str = `cle3 4m@nt,`;
const subst = `34@`;

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);

console.log('Substitution result: ', result)