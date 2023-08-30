import promptSync from "prompt-sync";
const prompt = promptSync();

function calcularFatorial_lesm(numero: number): number {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * calcularFatorial_lesm(numero - 1);
    }
}

const numero: number = parseInt(prompt("Digite seu número: "));
const fatorial = calcularFatorial_lesm(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);