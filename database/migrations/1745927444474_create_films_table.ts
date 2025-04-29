import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'films'

  async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama_film')
      table.string('genre')
      table.integer('usia_minimal')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}