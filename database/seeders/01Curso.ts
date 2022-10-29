import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: "Analise e Desenvolvimento de Sistemas", duracao: 5, modalidade: "P"},
      {nome: "Medicina", duracao: 12, modalidade: "P"},
      {nome: "Gastonomia", duracao: 8, modalidade: "P"},
      {nome: "Direito", duracao: 10, modalidade: "P"},
    ])
  }
}
