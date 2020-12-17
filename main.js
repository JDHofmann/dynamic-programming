
// Write a function fib(n) that take in a number as an argument. The function should return the nth number of the fibonacci sequence

// this solution has a time complexity of 2 to the n power, which is slow as we scale

// const fib = (n) => {
//     if ( n <= 2) return 1;

//     return fib(n -1) + fib(n -2);
// }

const fib = (n, memo = {}) => {
    console.log(`n: ${n}`)
    console.log(memo)
    if ( n in memo ) return memo[n];
    if ( n <= 2) return 1;

    memo[n] = fib(n -1, memo) + fib(n -2, memo);
    return memo[n];
}


let app = document.querySelector("#app")

let result = document.createElement('h1');

result.innerHTML = `Result: ${fib(3)}`

app.append(result)