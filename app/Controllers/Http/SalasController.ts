// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala";
import SalaValidator from "App/Validators/SalaValidator";

export default class SalasController {
    
    async index(){
        return await Sala.query()
                         .select(["id", "nome", "capacidade", "tipo"])
                         .preload("turmas")
     }
 
    async store({request}){
        const dados = await request.validate(SalaValidator)
        return Sala.create(dados)

     }

    async show({request}){
        const id = request.param('id')
        const show = await Sala.findOrFail(id)
        return show
    }

    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(SalaValidator)
        const updat = await Sala.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }

    async destroy({request}){
        const id = request.param('id')
        const delet = await Sala.findOrFail(id)
        delet.delete()
        return delet
    }
     
}
