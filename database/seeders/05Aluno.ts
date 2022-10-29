import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: "Renato", cpf: "1266765312", matricula: "21114286787", email: "renato@email.com", telefone: "61-98275869",
       cep: 7521542, logadouro: "qnp15", complemento: "35B", numero: "61-98275865", bairro: "passarinho"},
      {nome: "Orion", cpf: "10266765312", matricula: "5447874547", email: "orion@emaul.com", telefone: "61-985474547",
       cep: 7285896, logadouro: "qnp65", complemento: "39A", numero: "61-98754514", bairro: "belo"},
    ])
  }
}
