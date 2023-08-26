import promptSync from "prompt-sync";
const prompt = promptSync();

enum diaSemana {
    dom = "Domingo",
    seg = "Segunda",
    ter = "Terça",
    qua = "Quarta",
    qui = "Quinta",
    sex = "Sexta",
    sab = "Sábado"
};

function obterNomeCompleto(dia: diaSemana): string {
    return dia;
}

const abreviacao = prompt("Digite a abreviação do dia da semana: ").toLowerCase();
const diaTeste: diaSemana = diaSemana[abreviacao as keyof typeof diaSemana];
const nomeCompleto = obterNomeCompleto(diaTeste);

if (diaTeste) {
    console.log(`Abreviação: ${abreviacao}`);
    console.log(`Nome completo: ${nomeCompleto}`);
} else {
    console.log("Abreviação inválida. Certifique-se de digitar uma abreviação válida.");
}
