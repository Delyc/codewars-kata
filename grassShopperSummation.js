/** Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8  **/


//  pseudocode

//  1. initialize sum which equals to zero
//  2. initialize an iterator from 0 to num
//  3. sum all the iterations
//  4. return sum


var summation = function (num) {
    let sum =0
    for(let i=0; i<=num; i++){
      sum +=i
    }
    return sum
    // Code here
  }