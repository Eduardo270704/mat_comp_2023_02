class Aluno {
    estado: string;
    constructor(estado: string) {
        this.estado = estado;
    }
    estudar_lesm() {
        console.log("O aluno ainda está cursando a faculdade.");
    }
}

class cursando extends Aluno {
    caracteristica: string;
    constructor(estado: string, caracteristica: string) {
        super(estado);
        this.caracteristica = caracteristica;
    }
    horario_lesm() {
        console.log("O aluno estuda no horário da noite.");
    }
}

class fisico extends cursando {
    boasnotas: boolean;
    constructor(estado: string, caracteristica: string, boasnotas: boolean) {
        super(estado, caracteristica);
        this.boasnotas = boasnotas;
    }
    notas_lesm() {
        console.log("O aluno tem boas notas.");
    }
}

const seraluno = new fisico("Einstein", "Noite", true);
console.log(`Aluno ${seraluno.estado}`);
seraluno.estudar_lesm()
console.log(`Horário: ${seraluno.caracteristica}`);
seraluno.horario_lesm();
console.log(`Passou de semestre? ${seraluno.boasnotas}`);
seraluno.notas_lesm();