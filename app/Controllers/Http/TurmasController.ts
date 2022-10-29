// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma";
import TurmaValidator from "App/Validators/TurmaValidator";

export default class TurmasController {
    
    async index(){
        return Turma.query()
                    .preload('professores')
                    .preload('semeste')
                    .preload('sala')
                    .preload('disciplina')
                    .preload('alunos')
     }
 
    async store({request}){

        const dados = await request.validate(TurmaValidator)
        /** only(["nome", "professor_id", "semestre_id",
         *  "disciplina_id", "sala_id", "turno"]) */
       
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
        /** only(["nome", "professor_id",
         *  "semestre_id", "disciplina_id", "sala_id", "turno"]) */
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
