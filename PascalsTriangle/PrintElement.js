const getNcR = (n,r) => {
 let row= n-1, col= r-1, res=1;
 for(i=0;i<col;i++){
    res= res * (row - i)// 4
    res= res/(i+1);
 }
 return res;
}

const result = getNcR(5,3);
console.log(result);