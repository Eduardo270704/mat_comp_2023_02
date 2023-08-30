class Fibonacci {
    private memo: number[] = [];

    calcularTermo_lesm(posicao: number): number {
        if (posicao <= 0) { 
            throw new Error("A posição deve ser um número positivo.");
        }

        if (this.memo[posicao] !== undefined) {
            console.log(`Valor já calculado para posição ${posicao}: ${this.memo[posicao]}`);
            return this.memo[posicao];
        }

        if (posicao === 1 || posicao === 2) {
            return 1;
        }

        const termo = this.calcularTermo_lesm(posicao - 1) + this.calcularTermo_lesm(posicao - 2);
        this.memo[posicao] = termo;

        return termo;
    }
}

const fibonacci = new Fibonacci();

console.log("Termo da posição 6:", fibonacci.calcularTermo_lesm(6));
console.log("Termo da posição 8:", fibonacci.calcularTermo_lesm(8));
console.log("Termo da posição 10:", fibonacci.calcularTermo_lesm(10));