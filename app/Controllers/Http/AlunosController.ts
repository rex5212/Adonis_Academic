// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno"
import AlunoValidator from "App/Validators/AlunoValidator"

export default class AlunosController {

    async index(){
        return await Aluno.query().preload('turmas').preload("chamadas") // tenta mostra mais informação
     }
 
     async store({request}){

        /*const dados = request.only(["nome", "cpf", "matricula", "email", "cep",
         "logadouro", "complemento", "numero", "bairro"])*/
        
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
        /*only(["nome", "cpf", "matricula", "email", "cep", "logadouro", "complemento", "numero", "bairro"])*/
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
