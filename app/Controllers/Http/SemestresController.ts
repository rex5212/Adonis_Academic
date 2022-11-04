// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre";
import SemestreValidator from "App/Validators/SemestreValidator";

export default class SemestresController {
    
    async index({request}){
        const {nome} = request.all()
        const semestre = Semestre.query()
                                 .select(["id", "nome", "data_inicio", "data_fim"])
                                 .preload("turmas")
        if (nome) {
            semestre.where('nome', nome)
        }
        return semestre
     }
 
    async store({request}){
        const dados = await request.validate(SemestreValidator)
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
