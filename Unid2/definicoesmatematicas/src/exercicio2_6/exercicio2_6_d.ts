class Aluno {
    estado: string;
    constructor(estado: string) {
        this.estado = estado;
    }
    estudar() {
        console.log("O aluno ainda está cursando a faculdade.");
    }
}

class cursando extends Aluno {
    caracteristica: string;
    constructor(estado: string, caracteristica: string) {
        super(estado);
        this.caracteristica = caracteristica;
    }
    horario() {
        console.log("O aluno estuda no horário da noite.");
    }
}

class fisico extends cursando {
    boasnotas: boolean;
    constructor(estado: string, caracteristica: string, boasnotas: boolean) {
        super(estado, caracteristica);
        this.boasnotas = boasnotas;
    }
    notas() {
        console.log("O aluno tem boas notas.");
    }
}

const seraluno = new fisico("Einstein", "Noite", true);
console.log(`Aluno ${seraluno.estado}`);
seraluno.estudar()
console.log(`Horário: ${seraluno.caracteristica}`);
seraluno.horario();
console.log(`Passou de semestre? ${seraluno.boasnotas}`);
seraluno.notas();