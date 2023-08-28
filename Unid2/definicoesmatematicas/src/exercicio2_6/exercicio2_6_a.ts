import promptSync from "prompt-sync";
const prompt = promptSync();

enum mesesAno {
    jan = "Janeiro",
    fev = "Fevereiro",
    mar = "Março",
    abr = "Abril",
    mai = "Maio",
    jun = "Junho",
    jul = "Julho",
    ago = "Agosto",
    set = "Setembro",
    out = "Outubro",
    nov = "Novembro",
    dez = "Dezembro"
};

function obterNomeCompleto(mes: mesesAno): string {
    return mes;
}

const abreviacao = prompt("Digite a abreviação do mês: ").toLowerCase();
const mesTeste: mesesAno = mesesAno[abreviacao as keyof typeof mesesAno];
const nomeCompleto = obterNomeCompleto(mesTeste);

if (mesTeste) {
    console.log(`Abreviação: ${abreviacao}`);
    console.log(`Nome completo: ${nomeCompleto}`);
} else {
    console.log("Abreviação inválida. Certifique-se de digitar uma abreviação válida.");
}