
// Write a function fib(n) that take in a number as an argument. The function should return the nth number of the fibonacci sequence

// this solution has a time complexity of 2 to the n power, which is slow as we scale

// const fib = (n) => {
//     if ( n <= 2) return 1;

//     return fib(n -1) + fib(n -2);
// }

const fib = (n, memo = {}) => {
    if ( n in memo ) return memo[n];
    if ( n <= 2) return 1;
    memo[n] = fib(n -1, memo) + fib(n -2, memo);
    return memo[n];
}

// console.log(fib(5))


// Say that you are a traveler on a 2D grid. 
// You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

// In how many ways can you travel to the goal on a grid with dimensions r * d?

// Write a function `gridTraveler(m,n)` that calculates this

const gridTraveler = ( d, r ) => {
    if( d === 0 || r === 0 ) return 0;
    if( d ===1 && r === 1 ) return 1;
    return gridTraveler( d -1, r ) + gridTraveler( d , r-1 )
}

console.log(gridTraveler(2,3))
console.log(gridTraveler(3,3))


let app = document.querySelector("#app")

let result = document.createElement('h1');

result.innerHTML = `Result: ${fib(5)}`

app.append(result)