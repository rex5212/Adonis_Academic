// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"
import AlunoValidator from "App/Validators/AlunoValidator"

export default class AlunosController {

    async index({request}){
        const {bairro, nome} = request.all()
        const aluno = Aluno.query()
                           .preload('turmas')
                           .preload("chamadas")
                           .select(["id", "nome", "cpf", "matricula", "email", "cep", 
                           "logadouro", "complemento", "numero", "bairro"])
        if(bairro){
            aluno.where('bairro', bairro)
            }
        else if(nome){
            aluno.where('nome', nome)
            }
        return aluno
     }
 
     async store({request}){
        const dados = await request.validate(AlunoValidator)
        return Aluno.create(dados)
     }

    async show({request}){
        const id = request.param('id')
        const show = await Aluno.findOrFail(id)
        return show
    }

    async update({request}){
        const id = request.param('id')
        const dados = await request.validate(AlunoValidator)
        const update = await Aluno.findOrFail(id)
        update.merge(dados).save()
        return update
    }

    async destroy({request}){
        const id = request.param('id')
        const delet = await Aluno.findOrFail(id)
        delet.delete()
        return delet
    }

}
