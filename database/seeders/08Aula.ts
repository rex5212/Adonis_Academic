import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([
     {data: new Date(Date.UTC(2021, 11, 1)), conteudo: "matematica", turmaId: 1},
     {data: new Date(Date.UTC(2021, 11, 1)), conteudo: "Informatica", turmaId: 1},
     {data: new Date(Date.UTC(2021, 11, 1)), conteudo: "seguranca", turmaId: 1},
    ])
  }
}
