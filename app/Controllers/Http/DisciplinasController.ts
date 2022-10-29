// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class DisciplinasController {

    async index({request}){
    
        const {cursoId, nome} = request.all()

        const disciplina = Disciplina.query()
                                     .select(['id', 'nome', 'cursoId'])
                                     .preload('curso')

        if(cursoId){
            disciplina.where('cursoId', cursoId)
        }
        else if(nome){
            disciplina.where('nome', nome)
        }
        
        return disciplina

    }
 
    async store({request}){

        const dados = await request.validate(DisciplinaValidator)
        /** only(["nome", "cursos_id"]) */
        
        return Disciplina.create(dados)

     }

    async show({request}){

        const id = request.param('id')
        const show = await Disciplina.findOrFail(id)
        return show

    }

    async update({request}){

        const id = request.param('id')
        const dados = await request.validete(DisciplinaValidator)
        /** only(["nome", "cursos_id"]) */
        const updat = await Disciplina.findOrFail(id)
        updat.merge(dados).save()
        return updat

    }

    async destroy({request}){

        const id = request.param('id')
        const delet = await Disciplina.findOrFail(id)
        delet.delete()
        return delet
        
    }

}