'use strict'

const Agendamento = use('App/Models/Agendamento');
// const User =use('App/Models/User');

class AgendamentoController {

async store ({request, response}) {
  //nome, email, telefone, data, hora, especialidade
const {telefone, data, hora, especialidade} = request.all();

const agendamento = await Agendamento.create({telefone, data, hora, especialidade});

return agendamento;
}
}

module.exports = AgendamentoController
