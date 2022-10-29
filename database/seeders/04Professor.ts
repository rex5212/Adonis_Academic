import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {nome: "Danilo", cpf: 19863257345, matricula: "247524", salario: "R$8000", email: "danili@email.com", telefone: "61-89245658",
       cep: 8965441, logadouro: "qnp09", complemento: "38A", numero: "61-9856472", bairro: "mineiro"},
      {nome: "Fabio", cpf: 19863512345, matricula: "57546", salario: "R$8000", email: "fabio@email.com", telefone: "61-98567423",
       cep: 6587412, logadouro: "qnp65", complemento: "45C", numero: "61-9563145", bairro: "salvado"},
    ])
  }
}
