// const markRowColArr = (input) => {
//     // col[m] = input[0][...]
//     // row[m] = input[...][0]
//     let colZero;
//     for (let i = 0; i < input.length; i++) {
//         for (let j=0; j<input[i].length; j++){
//             if(input[i][j] == 0){
//                 input[i][0] = 0;
//                 if(j!= 0)
//                 input[0][j] = 0;
//                 else
//                 colZero = 0;
//             }
//         }
//     }
//     const output = FillZeroes(input);
//     return output;
// }

// const FillZeroes = (input) => {
//     for (let i = 0; i < input.length; i++) {
//         for (let j=0; j<input[i].length; j++){
//             if(input[i][j] != 0){
//             if(input[0][j] == 0 || input[i][0] == 0 ) {
//                input[i][j] = 0;
//             }
//         }
//         }
//     }
//     if(input[0][0] == 0)
//     {
//         for (let j=0; j<input[i].length; j++){ 
//     }
//     return input;
// }


// const result = markRowColArr([[1,1,1],[1,0,1],[1,1,1]]);
// console.log(result, 'BruteForce Method');
// console.log('expected', [[1,0,1],[0,0,0],[1,0,1]]);