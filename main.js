function Veiculo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.exibirDetalhes = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    };
}

function CarroCorrida(marca, modelo, equipe, piloto) {
    Veiculo.call(this, marca, modelo);
    this.equipe = equipe;
    this.piloto = piloto;
    this.correr = function() {
        console.log(`${this.piloto} está correndo com o ${this.modelo} pela equipe ${this.equipe}!`);
    };
}

function CarroPasseio(marca, modelo, passageiros) {
    Veiculo.call(this, marca, modelo);
    this.passageiros = passageiros;
    this.embarcarPassageiro = function(nome) {
        this.passageiros.push(nome);
        console.log(`${nome} embarcou no ${this.modelo}!`);
    };
}

const carroCorrida1 = new CarroCorrida("Ferrari", "SF21", "Scuderia Ferrari", "Charles Leclerc");
const carroCorrida2 = new CarroCorrida("Mercedes-Benz", "W12", "Mercedes-AMG Petronas", "Lewis Hamilton");
const carroPasseio1 = new CarroPasseio("Toyota", "Corolla", ["Alice", "Adhan"]);

console.log("Detalhes e corrida para o carro de corrida 1:");
carroCorrida1.exibirDetalhes();
carroCorrida1.correr();

console.log("Detalhes e corrida para o carro de corrida 2:");
carroCorrida2.exibirDetalhes();
carroCorrida2.correr();

console.log("Detalhes e embarque para o carro de passeio 1:");
carroPasseio1.exibirDetalhes();
carroPasseio1.embarcarPassageiro("Carlos");