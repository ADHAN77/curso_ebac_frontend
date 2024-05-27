function Carro(equipe, modelo, piloto) {
    this.equipe = equipe;
    this.modelo = modelo;
    this.piloto = piloto;

    this.exibirDetalhes = function() {
        console.log(`Equipe: ${this.equipe}, Modelo: ${this.modelo}, Piloto: ${this.piloto}`);
    };

    this.correr = function() {
        console.log(`${this.piloto} está correndo com o ${this.modelo} pela equipe ${this.equipe}!`);
    };
}

const carro1 = new Carro("Scuderia Ferrari", "Ferrari SF21", "Charles Leclerc");
const carro2 = new Carro("Mercedes-AMG Petronas", "Mercedes W12", "Lewis Hamilton");
const carro3 = new Carro("Red Bull Racing", "Red Bull RB16B", "Max Verstappen");

console.log("Detalhes e corrida para o carro1:");
carro1.exibirDetalhes();
carro1.correr();

console.log("Detalhes e corrida para o carro2:");
carro2.exibirDetalhes();
carro2.correr();

console.log("Detalhes e corrida para o carro3:");
carro3.exibirDetalhes();
carro3.correr();