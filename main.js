//1
// let multiplicateur = 5;

// for (let i = 0; i <=9; i++) {
//     console.log(`5 x ${i} = ` + i*5);
// };

//2
// let multiplicateur = 5;

// for (let i = 0; i <=9; i+=2) {
//     console.log(`5 x ${i} = ` + i*5);
// };

//3
// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);

// };

//4
// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
// let longPrenoms = [];

// eleves.forEach(e => {
//     if (e.length > 5) {
//         longPrenoms.push(e);
//     }
// });
// console.log(longPrenoms);

//5
// let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
// let grossesSommes = [];

// sommes.forEach(e => {
//     console.log(e);
//     if (e>60) {
//         sommes.splice(sommes.indexOf(e), 1);
//         grossesSommes.push(e);
//     }
// });

// console.log(grossesSommes, sommes);

// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i]);
//     }
// };
// console.log(grossesSommes);

// for (let i = 0; i < grossesSommes.length; i++) {
//     sommes.splice(sommes.indexOf(grossesSommes[i]), 1);
// }
// console.log(sommes);

//6
let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach(e => {
    if (typeof e == "number") {
        typeNumber.push(e);
    }
    else if (typeof e == "string") {
        typeString.push(e);
    }
    else if (typeof e == "object") {
        typeObject.push(e);
    }
    else {
        typeAutre.push(e);
    }
});
donnees = [];

console.log("Number" + typeNumber);
console.log("String" + typeString);
console.log("Object" + typeObject);
console.log("Autres" + typeAutre);
console.log("donnees" + donnees);
