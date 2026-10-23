
let Rcet16 = 0;
let h = 1500;
let k = 2500;
let Rcet20 = 0;
let RceTotal = 0;
let i = 11;
let j = 0;
let NbreTP20 = 0;
do {
    if (i < 16) {
        let NbreTM16 =
            NbreTM16 += NbreTM16
    }
    Rcet16 += h;
    i++;
    console.log(`L'Age est ${i} ans et le prix est de ${h} FCFA`);

} while (i < 16);

do {
    Rcet20 += k;
    i++;
    console.log(`L'Age est ${i} ans et le prix est de ${k} FCFA`);

} while (i <= 20);

console.log(`La recette des moins de 16 ans est ${Rcet16}`);
console.log(`La recette des 16 à 20 ans est ${Rcet20}`);
RceTotal = Rcet16 + Rcet20;
console.log(`La recette totale est ${RceTotal}`);
console.log(`Le nombre de personnes de moins de 16 ans est ${NbreTM16}`);
console.log(`Le nombre de personne de 16 à 20 ans est ${NbreTP20}`);