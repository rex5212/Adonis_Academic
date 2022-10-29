// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";
import ChamadaValidator from "App/Validators/ChamadaValidator";

export default class ChamadasController {

    index(){
        return Chamada.query().preload('aula').preload('aluno')
     }
 
    async store({request}){

        const dados = await request.validate(ChamadaValidator)
        /** only(["aula_id", "aluno_id", "presenca"]) */

        return Chamada.create(dados)

     }

    async show({request}){

        const id = request.param('id')
        const show = await Chamada.findOrFail(id)
        return show

    }

    async update({request}){

        const id = request.param('id')
        const dados = await request.validate(ChamadaValidator)
        /** only(["aula_id", "aluno_id", "presenca"]) */
        const updat = await Chamada.findOrFail(id)
        updat.merge(dados).save()
        return updat

    }

    async destroy({request}){

        const id = request.param('id')
        const delet = await Chamada.findOrFail(id)
        delet.delete()
        return delet
        
    }

}
