// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";
import ChamadaValidator from "App/Validators/ChamadaValidator";

export default class ChamadasController {

    async index({request}){
        const {aulaId} = request.all()
        const chamada = Chamada.query() 
                               .preload('aula')
                               .preload('aluno')
                               .select(["id", "aulaId", "alunoId", "presenca"])
        if (aulaId) {
            chamada.where("aulaId", aulaId)
        }
        return chamada
     }
 
    async store({request}){
        const dados = await request.validate(ChamadaValidator)
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
