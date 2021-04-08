'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendamentoSchema extends Schema {
  up () {
    this.create('agendamentos', (table) => {
      table.increments()
      table.integer('telefone')
      table.date('data').notNullable()
      table.string('hora').notNullable()
      table.string('especialidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('agendamentos')
  }
}

module.exports = AgendamentoSchema
