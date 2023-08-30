import promptSync from "prompt-sync";
import { veiculo, veiculoEletrico, veiculoEletricoVoador } from "./exercicio2_7_model";
const prompt = promptSync();

console.log("Criando um  veículo...");
const longitudeveiculo = parseFloat(prompt("Digite a longitude: "));
const latitudeveiculo = parseFloat(prompt("Digite a latitude: "));
const meuveiculo = new veiculo(longitudeveiculo, latitudeveiculo);
console.log("Veículo criado:", meuveiculo);
console.log("\nMovendo o veículo...");
const novaLongitude = parseFloat(prompt("Digite a nova longitude: "));
const novaLatitude = parseFloat(prompt("Digite a nova latitude: "));
meuveiculo.moverPara_lesm(novaLongitude, novaLatitude);
console.log("Coordenadas do veículo após movimentação:", meuveiculo.longitude, meuveiculo.latitude);

console.log("Criando um veículo elétrico...");
const longitudeEletrico = parseFloat(prompt("Digite a longitude: "));
const latitudeEletrico = parseFloat(prompt("Digite a latitude: "));
const bateriaEletrico = parseFloat(prompt("Digite a capacidade da bateria: "));
const meuveiculoEletrico = new veiculoEletrico(longitudeEletrico, latitudeEletrico, bateriaEletrico);
meuveiculoEletrico.carregar_lesm(20);
console.log("Veículo elétrico criado:", meuveiculoEletrico);
console.log("\nMovendo o veículo elétrico...");
const novaLongitudeEletrico = parseFloat(prompt("Digite a nova longitude: "));
const novaLatitudeEletrico = parseFloat(prompt("Digite a nova latitude: "));
meuveiculoEletrico.moverPara_lesm(novaLongitudeEletrico, novaLatitudeEletrico);
console.log("Coordenadas do veículo elétrico após movimentação:", meuveiculoEletrico.longitude, meuveiculoEletrico.latitude);
console.log("\nVerificando a carga da bateria do veículo elétrico...");
console.log("Bateria do veículo elétrico:", meuveiculoEletrico.bateria);
console.log("\nCarregando o veículo elétrico...");
const cargaParaCarregar = parseFloat(prompt("Digite a carga para carregar: "));
meuveiculoEletrico.carregar_lesm(cargaParaCarregar);
console.log("Bateria após carregar:", meuveiculoEletrico.bateria);

console.log("Criando um veículo elétrico voador...");
const longitudeVoador = parseFloat(prompt("Digite a longitude: "));
const latitudeVoador = parseFloat(prompt("Digite a latitude: "));
const altitudeVoador = parseFloat(prompt("Digite a altitude: "));
const bateriaVoador = parseFloat(prompt("Digite a capacidade da bateria: "));
const meuveiculoEletricoVoador = new veiculoEletricoVoador(longitudeVoador, latitudeVoador, bateriaVoador, altitudeVoador);
console.log("Veículo elétrico voador criado:", meuveiculoEletricoVoador);
console.log("\nMovendo o veículo elétrico voador...");
const novaLongitudeVoador = parseFloat(prompt("Digite a nova longitude: "));
const novaLatitudeVoador = parseFloat(prompt("Digite a nova latitude: "));
const novaAltitudeVoador = parseFloat(prompt("Digite a nova altitude: "));
meuveiculoEletricoVoador.moverPara_lesm(novaLongitudeVoador, novaLatitudeVoador);
console.log("\nAlterando altura de vôo...")
meuveiculoEletricoVoador.moverAltitude(novaAltitudeVoador)  
console.log("Coordenadas do veículo elétrico voador após movimentação:", meuveiculoEletricoVoador.longitude, meuveiculoEletricoVoador.latitude, meuveiculoEletricoVoador.altitude);
console.log("\nVerificando a carga da bateria do veículo elétrico voador...");
console.log("Bateria do veículo elétrico voador:", meuveiculoEletricoVoador.bateria);
console.log("\nCarregando o veículo elétrico Voador...");
const cargaParaCarregarVoador = parseFloat(prompt("Digite a carga para carregar: "));
meuveiculoEletricoVoador.carregar_lesm(cargaParaCarregarVoador);
console.log("Bateria após carregar:", meuveiculoEletricoVoador.bateria);