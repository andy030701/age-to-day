var age;
age = parseInt(prompt("entrez votre age : "));
if (calcAge(age) === undefined) console.log("jours strictement positif");
else console.log("vos jours sont au nombre de :" + calcAge(age));

//function to convert a day to year
function calcAge(n) {
  //return n * 365;
  return n >= 0 ? n * 365 : undefined;
}
