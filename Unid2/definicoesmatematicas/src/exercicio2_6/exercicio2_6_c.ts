import promptSync from "prompt-sync";
const prompt = promptSync();

function calcularFatorial(numero: number): number {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

const numero: number = parseInt(prompt("Digite seu número: "));
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);