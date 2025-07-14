/*----------------------------------------------------------------------------------------------------------------------------------------------
 LOOPS : for loop , While loop , do-While loop
-----------------------------------------------------------------------------------------------------------------------------------------------*/

/* for loop : (syntax) :

*/


// Q. Print numbers from given varibes with sequence of 5;

var start = 5;
var end = 100;

for (var i = start; i <= end; i += 5) {
  console.log(i);
 
}
 

//Q. print number from 10 - 100 who are even.

var i = 1;
for( var i = 1; i <= 100; i++ ){
  
    if( i % 2 == 0){
        console.log(i)
    }
}

//Q. print numbers from 10 - 1;

let b = 10; 
for (let b = 10; b >= 1; b--) {
  console.log(b);
  
}











/* While loop : (syntax) :

 declare and assign var
 While (condition) {
    console.log()
    i++
    }

 */




//Q.2 - print odd number from 1 - 10 ?

let j = 1;
let count = 0;
while (j <=10 ) {
    if( j % 2 == 1) {
    console.log (j);
    count++;}
    j++;
}
  console.log(count ," count ")


//Q. print number from 100 - 10 amd who are odd by using while loop (backward)

let a = 100;
while (a >= 10) {
  if (a % 2 == 1) {
    console.log(a);
  }
  a--;
}


//Q. print number from 100 - 10 amd who are odd by using while loop (frontend)

let c = 0;
while (c <= 100) {
  if (c % 2 == 1) {
    console.log(c);
  }
  c++;
}




