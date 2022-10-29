import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
      {nome: "Matematica", cursoId: 1},
      {nome: "Matematica", cursoId: 2},
      {nome: "Historia", cursoId: 3},
      {nome: "Geografia", cursoId: 3},
    ])
  }
}
