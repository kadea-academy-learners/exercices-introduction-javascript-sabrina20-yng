// Exercice 9
// Écrivez votre code ici
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let heritageTotal = 120000000;

let partEnfants = heritageTotal * 0.75 ;
let nbPartEnfants = 3;
let partPartEnfant = partEnfants / nbPartEnfants ;

let paul = partEnfants ;
let  marie = partEnfants ;
let eric = partEnfants /2 ;

let clair = partEnfants/2 ;

let pertConjointEtFreres = heritageTotal * 0.25 ;
let nbPartsDeuxiemeCat = 3 ;

let madameMukuna = pertConjointEtFreres / nbPartsDeuxiemeCat ;
let joseph = pertConjointEtFreres / nbPartsDeuxiemeCat ;
let sarah = pertConjointEtFreres / nbPartsDeuxiemeCat ;



console.log ("Repartiton de l'heritage :");
console.log ("Paul :" ,paul , "CDF");
console.log ( "Marie :" , marie, "CDF") ;
console.log ("Eric : " , eric , "CDF") ;
console.log ("Claire :" , clair , "CDF");
console.log ("Madame Mukuna:" , madameMukuna , "CDF");
console.log ( " Joseph:" , joseph, "CDF") ;
console.log (" Sarah: " , sarah , "CDF") ;

module.exports = { paul , marie , eric , clair , madameMukuna ,joseph ,sarah} ;
