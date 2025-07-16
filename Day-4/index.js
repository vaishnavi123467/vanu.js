/*----------------------------------------------------------------------------------------------------------------------------------------------
 LOOPS : for loop , While loop , do-While loop
-----------------------------------------------------------------------------------------------------------------------------------------------*/

// for loop : (syntax) :


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




//Q. print number from 0 to 20 that are odd

let d = 0;
for ( let d = 0 ; d <= 20; d++) {
  if( d % 2 == 1) {
    console.log(d)
  }
 
}


//-----------------------------------------------------------------------------------------------------------------------------------------


/* While loop : (syntax) :

 declare and assign var
 While (condition) {
    console.log()
    i++
    }

 */



//Q. print odd number from 1 - 10 ?

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


//------------------------------------------------------------------------------------------------------------------------------------------

//do-while loop : (syntax) :

/* before checking condition it exectute the block

starting
do{
    code
    sequemce
}while(ending)
*/


// Q. Print number from 1 - 10

let h = 1;

do {
    console.log(h)
    h++;
} while ( h > 10)


  //Q. Print count of odd numbers from 100 - 1

  let k = 100;
  let counter = 0;
  do {
    if (k % 2 == 1) {
      counter++;
    }
    k--;
  } while (k >= 1);
  
  console.log(counter, "counter");

//-----------------------------------------------------------------------------------------------


// break : stop execution of loop .


for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}


// Q.  1 - 100 , print count of even numbers  , and if count goes above 20 then break loop ?

let counnt = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    if (counnt >= 20) {
      break;
    }
    counnt++;
  }
}
console.log(counnt);

//----------------------------------------------------------------------------------------------------------------------------------
  
// continue : skip single iteration of loop .

for (let i = 1; i <= 10; i++) {
  if (i == 5 || i == 7 || i == 1) {
    continue;
  }
  console.log(i);
}





