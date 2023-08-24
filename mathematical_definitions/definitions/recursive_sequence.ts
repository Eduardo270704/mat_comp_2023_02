function sequence(n: number): number {
    if (n == 1) {
        return 1;
    } else {
        return 2 * sequence(n - 1);
    }
}

console.log(sequence(10));

export{};