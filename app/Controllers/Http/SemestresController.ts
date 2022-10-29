// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";
import SemestreValidator from "App/Validators/SemestreValidator";

export default class SemestresController {
    
    index(){
        
        return Semestre.query()
     }
 
     async store({request}){

        const dados = await request.validate(SemestreValidator)
        /** only(["nome", "data_inicio", "data_fim"]) */
        
            return Semestre.create(dados)

     }

    async show({request}){

        const id = request.param('id')
        const show = await Semestre.findOrFail(id)
        return show

    }

    async update({request}){

        const id = request.param('id')
        const dados = await request.validate(SemestreValidator)
        /** only(["nome", "data_inicio", "data_fim"]) */
        const updat = await Semestre.findOrFail(id)
        updat.merge(dados).save()
        return updat

    }

    async destroy({request}){

        const id = request.param('id')
        const delet = await Semestre.findOrFail(id)
        delet.delete()
        return delet
        
    }
     
}
