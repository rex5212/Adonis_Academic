import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: "direito", dataInicio: new Date(Date.UTC(2021, 11, 1)), dataFim: new Date(Date.UTC(2021, 11, 1))},
      {nome: "logica", dataInicio: new Date(Date.UTC(2021, 11, 1, 0, 0, 0)), dataFim: new Date(Date.UTC(2022, 8, 1))},
    ])
  }
}
