// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from "App/Models/Aula"
import AulaValidator from "App/Validators/AulaValidator"

export default class AulasController {

    async index(){
        return Aula.query().preload('turma').preload("chamadas")
     }
 
    async store({request}){
        
         const dados = await request.validate(AulaValidator)
         /**only(["data", "conteudo", "turma_id"]) */
         return Aula.create(dados)
         
     }

    async show({request}){

        const id = request.param('id')
        const show = await Aula.findOrFail(id)
        return show

    }

    async update({request}){

        const id = request.param('id')
        const dados = await request.validate(AulaValidator)
        /** only(["data", "conteudo", "turma_id"]) */
        const updat = await Aula.findOrFail(id)
        updat.merge(dados).save()
        return updat

    }

    async destroy({request}){

        const id = request.param('id')
        const delet = await Aula.findOrFail(id)
        delet.delete()
        return delet
        
    }

}
