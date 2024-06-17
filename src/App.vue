<script>
export default {
  data() {
    return {
      numero1: 0,
      numero2: 0,
      operacao: '+',
      resultado: 0
    }
  },
  watch: {
    numero1: function() {
      this.calcular();
    },
    numero2: function() {
      this.calcular();
    },
    operacao: function() {
      this.calcular();
    }
  },
  methods: {
    calcular: function() {
      switch (this.operacao) {
        case '+':
          this.resultado = this.numero1 + this.numero2;
          break;
        case '-':
          this.resultado = this.numero1 - this.numero2;
          break;
        case '/':
          if (this.numero2 === 0) {
            alert('Erro: Divisão por zero!');
            return;
          }
          this.resultado = this.numero1 / this.numero2;
          break;
        case '*':
          this.resultado = this.numero1 * this.numero2;
          break;
      }
    }
  }
}
</script>

<template>
<div class="container mt-3">
    <h1>Calculadora Vue.js</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="numero1">Número 1:</label>
          <input type="number" class="form-control" id="numero1" v-model="numero1">
        </div>
        <div class="form-group">
          <label for="numero2">Número 2:</label>
          <input type="number" class="form-control" id="numero2" v-model="numero2">
        </div>
        <div class="form-group">
          <label for="operacao">Operação:</label>
          <select class="form-control" id="operacao" v-model="operacao">
            <option value="+">Adição</option>
            <option value="-">Subtração</option>
            <option value="/">Divisão</option>
            <option value="*">Multiplicação</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <p>O resultado do seu cálculo é <span id="resultado">{{ resultado }}</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
