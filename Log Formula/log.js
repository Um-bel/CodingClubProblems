let arr = []; 

//change the 10 to how big you want the array to be
for(let y = 1; y < 10; y++) {

    //change the 3 here to whatever you want to log by
    let x = Math.pow(3, y); 
    arr.push([x, y]); 
}

console.table(arr); 