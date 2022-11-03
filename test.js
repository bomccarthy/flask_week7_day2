// function toWeirdCase(str){
//     let new_str = '';
//     let count = 0;
//     for (s of str){
//         if (s === ' '){
//             new_str = new_str.concat(s)  // starts the count over for a space (' ')
//             count = 0
//         } else if (count % 2 === 0){
//             new_str = new_str.concat(s.toUpperCase())  // ensures all even letters are uppercase
//             count++
//         } else {
//             new_str = new_str.concat(s.toLowerCase())  // ensures all odd letters are lowercase
//             count++
//         };
//     };
//     return new_str;
// }
// 
// console.log(toWeirdCase( "String" ));  // returns "StRiNg"
// console.log(toWeirdCase( "Weird string case" ));  // returns "WeIrD StRiNg CaSe"
//------------------------------------------------------------------------------
// function titleCase(str, exc=''){
//     count = 0
//     return str.toLowerCase().split(' ').map((function(word) { // split the string into a lowercase array
//         if (count === 0){
//             count++                                             // always titlecase the first word
//             return (word.charAt(0).toUpperCase() + word.slice(1))
//         } else  if (exc.toLowerCase().split(' ').includes(word)){ // checks for inclusion in exclusion string
//             return word
//         } else{
//             return (word.charAt(0).toUpperCase() + word.slice(1)) // uppercase the first letter of every item
//         }
//     })).join(' '); // returns to sttring from array
// }
// 
// console.log(titleCase('a clash of KINGS', 'a an the of')) // should return: 'A Clash of Kings'
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // should return: 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')) // should return: 'The Quick Brown Fox'
//------------------------------------------------------------------------------
