const markRowColArr = (input) => {
    let row = []; col = [];
    for (let i = 0; i < input.length; i++) {
        for (let j=0; j<input[i].length; j++){
            if(input[i][j] == 0){
                row[i]= 1
                col[j]= 1;
            }
        }
    }
    const output = FillZeroes(input, row, col);
    return output;
}

const FillZeroes = (input, row, col) => {
    for (let i = 0; i < input.length; i++) {
        for (let j=0; j<input[i].length; j++){
            if(row[i] || col[j] ){
               input[i][j] = 0;
            }
        }
    }
    return input;
}


const result = markRowColArr([[1,1,1],[1,0,1],[1,1,1]]);
console.log(result, 'BruteForce Method');
console.log('expected', [[1,0,1],[0,0,0],[1,0,1]]);