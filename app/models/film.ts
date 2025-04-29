import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Film extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama_film: string

  @column()
  declare genre: string

  @column()
  declare usia_minimal: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}