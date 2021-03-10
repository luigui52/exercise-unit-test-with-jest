// // app.js file content
// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// one euro is:
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }
// //1.2 Dollar=>127.9
// //50 Dollar=>? 
// // fromDollarToYen
// function fromDollarToYen(dollars){
//             //50 * 127.9 / 1.2
//    return dollars*oneEuroIs.JPY / oneEuroIs.USD
// }

// //fromEuroToDollar
// function fromEuroToDollar(euro){
//     return euro*oneEuroIs.USD
// }

// //fromYenToPound
// function fromYenToPound(yen){
//     return yen*oneEuroIs.GBP
// }
// module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(valor) {    
    let resul =(valor*oneEuroIs.JPY)/oneEuroIs.USD;   
    return resul;
}

function fromEuroToDollar(valor) {
    let resul = valor * oneEuroIs.USD
    return resul;
}

function fromYanToPound(valor) {
  let resul =(valor*oneEuroIs.GBP)/oneEuroIs.JPY;    
    return resul;
}
module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };