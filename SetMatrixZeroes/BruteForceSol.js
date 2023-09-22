const markRow = (row, input) => {
    for(j=0; j<input[row].length; j++) {
        if (input[row][j] != 0) {
            input[row][j] = -1;
        }
    }
}

const markColumn = (col, input) => {
    for(i=0; i<input.length; i++) {
        if (input[i][col] != 0) {
            input[i][col] = -1;
        }
    }
}

const markIndicatorAsZeroes = (input) => {
    for (let i = 0; i < input.length; i++) {
        for (let j=0; j<input[i].length; j++){
            if(input[i][j]== -1){
                input[i][j] = 0;
            }
        }
    }
    return input;
}

const markColumnRow = (input) => {
    for (let i = 0; i < input.length; i++) {
        for (let j=0; j<input[i].length; j++){
            if(input[i][j]==0){
                markRow(i, input);
                markColumn(j, input);
            }
        }
    }
    const output = markIndicatorAsZeroes(input);
    return output;
}


const result = markColumnRow([[1,1,1],[1,0,1],[1,1,1]]);
console.log(result, 'BruteForce Method');
console.log('expected', [[1,0,1],[0,0,0],[1,0,1]]);