function fibonacci(n) {
    let fib = [0, 1]; // first element

    for (let i = 2; i < n; i++)
    {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

console.log(fibonacci(15));

//Big-o = O(n)