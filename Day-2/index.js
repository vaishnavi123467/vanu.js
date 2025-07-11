////////// OPERATORS :- /////////


//*  (==) check data not datatype :
console.log(1 == 1);         // here the data (numbers) is same .   output - true
console.log(1 == 2);         // here the data is diffrenet .        output - false      
console.log(10 == 2);        // here the data is diffrenet .        output - false  
console.log("10" == 2);      // here the data is diffrenet .        output - false  
console.log("2" == 2);       // here the data (numbers) is same .   output - true



//* (===) check data and datatype :

console.log("10" === 2);        // here the data if different and datatype is ("10"=string-datatype) and (2 = number-datatype)
console.log("2" === 2);        // here the data (2===2) is same but the datatype is different ie ("2" is string-datatype)(2 = number-datatype).
console.log("2" === "2");      // here both the data and datatype is same ie both number is 2 and datatype is string.




//* greater than and smaller than :
console.log(2 > 1);
console.log(2 > 10);
console.log(2 < 1);
console.log(2 < 10);



//* greater than equal too and smaller than equal too :
console.log(2 <= 2);
console.log(20 >= 20);
console.log(20 >= 21);
console.log(20 <= 21);



//* And operator :

//if all conditions are true then only it'll return true
//if any one of them or more than one is false then it'll return false

console.log(2 > 1 && 3 > 2 && 4 > 3 && 5 > 4); //This condition is true                                           output = true
console.log(2 > 1 && 3 > 2 && 4 > 3 && 5 > 40);  // This condition is false as the last condtion is false         output = False



//* OR operator :

// if any of condition or more than one condition is true then it'll return true
// if all of conditions are false then only it'll return false

console.log(2 > 10 || 3 > 20); // In this both conditions are false.   outout = false
console.log(2 < 10 || 3 > 20); // In this 1st condition is true .      output = true








