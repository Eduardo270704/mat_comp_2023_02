function sequence_lesm(n: number): number {
    if (n == 1) {
        return 1
    } else {
        return 2 * sequence_lesm(n - 1)
    }
}

console.log(sequence_lesm(100000));

export { }