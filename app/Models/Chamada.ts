import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Aula from './Aula'
import Aluno from './Aluno'

export default class Chamada extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public aulaId: number
  
  @column()
  public alunoId: number

  @column()
  public presenca: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Aula)
  public aula: BelongsTo <typeof Aula>

  @belongsTo(()=> Aluno)
  public aluno: BelongsTo <typeof Aluno>

}
