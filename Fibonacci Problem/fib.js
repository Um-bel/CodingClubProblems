//these are the first two fibonacci numbers 
let num0 = 0;
let num1 = 1; 


//we make a new variable called "i" and set it to "0". 
//Then we set the condition as "i < 100". this checks the loop if "i" is bigger than 100, if it is, it will execute the code belowif not, then it will stop looping. 
//Then we put "i++", so after it's done executing the code it will add 1 to "i"
//this will result in us looping through the code over and over until i is bigger than 100, aka 100 times
for(let i = 0; i < 100; i++) {

    //we're taking the two numbers and adding them them together 
    let newNum = num0 + num1; 

    //then we make the smaller number equal to the current bigger number
    num0 = num1; 

    //then we make the current bigger number equal to the new biggest number
    //we do these processes, so the next time we loop though, the next two numbers will make a correct new numner
    //otherwise it will keep returning the same number over and over again, because we didnt change them 
    num1 = newNum; 
    console.log(newNum); 
}