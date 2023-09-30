//--BruteForce-------

const printRow = (n) => {
    let arr=[],temp;
    for (let c = 1; c <= n; c++) {
        temp = getNcR(n,c);
        arr.push(temp);     
    }
return arr;
}

const getNcR = (n,r) => {
    let row= n-1, col= r-1, res=1;
    for(i=0;i<col;i++){
       res= res * (row - i)// 4
       res= res/(i+1);
    }
    return res;
   }
   
   const result = printRow(4);
   console.log(result,'bruteForce');

//---Better------

const getRow = (n) => {
    let res=1,arr=[];
    arr.push(res);
    for (let c = 1; c < n; c++) {
        res = res * (n-c);
        res = res / c;
        arr.push(res);
    }
    console.log(arr,'betterSol'); 
}

getRow(4);