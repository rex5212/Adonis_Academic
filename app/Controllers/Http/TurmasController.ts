// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";
import TurmaValidator from "App/Validators/TurmaValidator";

export default class TurmasController {
    
    async index({request}){
        const {professorId, semestreId, disciplinaId, salaId} = request.all()
        const turma = Turma.query()
                    .select(["id", "nome", "professorId", "semestreId",
                    "disciplinaId", "salaId", "turno"])
                    .preload('professores')
                    .preload('semeste')
                    .preload('sala')
                    .preload('disciplina')
                    .preload('alunos')
        if (professorId) {
            turma.where('professorId', professorId)
        } else if (semestreId) {
            turma.where('semestreId', semestreId)
        } else if (disciplinaId) {
            turma.where('disciplinaId', disciplinaId)
        } else if (salaId) {
            turma.where('salaId', salaId)
        }
        return turma
     }
 
    async store({request}){
        const dados = await request.validate(TurmaValidator)
        return Turma.create(dados)
     }

    async show({request}){
        const id = request.param('id')
        const show = await Turma.findOrFail(id)
        return show
    }

    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(TurmaValidator)
        const updat = await Turma.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }

    async destroy({request}){
        const id = request.param('id')
        const delet = await Turma.findOrFail(id)
        delet.delete()
        return delet
    }
     
}
