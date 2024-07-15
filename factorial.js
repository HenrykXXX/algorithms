function factorial(n) {
    if (n == 0) {
        return 1; // return one if n = 0
    }

    let fac = n;
    for (let i = 1; i < n; i++) {
        fac *= i;
    }
    return fac;
}

console.log(factorial(1));
console.log(factorial(1));
console.log(factorial(5));

//Big-o = O(n)