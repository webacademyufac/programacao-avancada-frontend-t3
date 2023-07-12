/**
 * Função que retorna a soma de dois números.
 *
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 */
function somar(a, b) {
    return a + b;
  }
  
  /**
   * Classe que representa uma pessoa.
   */
  class Pessoa {
    /**
     * Construtor da classe Pessoa.
     *
     * @param {string} nome - O nome da pessoa.
     * @param {number} idade - A idade da pessoa.
     */
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    /**
     * Retorna uma saudação com o nome da pessoa.
     *
     * @returns {string} Uma saudação com o nome da pessoa.
     */
    saudacao() {
      return `Olá, meu nome é ${this.nome}!`;
    }
  }