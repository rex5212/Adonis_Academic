// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from "App/Models/TurmaAluno";
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator";

export default class TurmaAlunosController {
    
    async index({request}){
        const {turmaId, alunoId} = request.all()
        const turmaaluno = TurmaAluno.query()
                                     .select(["id", "turmaId", "alunoId"])
                                     .preload("aluno")
                                     .preload("turma")
        if (turmaId) {
            turmaaluno.where('turmaId', turmaId)
        } else if (alunoId) {
            turmaaluno.where('alunoId', alunoId)
        }
        return turmaaluno
     }
 
     async store({request}){
        const dados = await request.validate(TurmaAlunoValidator)
        return TurmaAluno.create(dados)
     }

    async show({request}){
        const id = request.param('id')
        const show = await TurmaAluno.findOrFail(id)
        return show
    }

    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(TurmaAlunoValidator)
        const updat = await TurmaAluno.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }

    async destroy({request}){
        const id = request.param('id')
        const delet = await TurmaAluno.findOrFail(id)
        delet.delete()
        return delet
    }
     
}
