function isPwrTwo(n) {
    while (n > 1) {
        if (n % 2 != 0) {
            return false
        }
        n = n / 2;
    }
    return true
}

console.log(isPwrTwo(2));
console.log(isPwrTwo(3));
console.log(isPwrTwo(4));
console.log(isPwrTwo(5));

//Big-o = O(logn)