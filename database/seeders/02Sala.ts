import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome: "1A", capacidade: 30, tipo: "P"},
      {nome: "2A", capacidade: 30, tipo: "P"},
      {nome: "3A", capacidade: 30, tipo: "P"},
    ])
  }
}
