// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor";
import ProfessorValidator from "App/Validators/ProfessorValidator";

export default class ProfessorsController {
    
    index(){
        return Professor.query()
     }
 
     async store({request}){

        const dados = await request.validate(ProfessorValidator)
        /** only(["nome", "cpf", "matricula", "salario", "email",
         *  "telefone", "cep", "logadouro", "complemento", "numero", "bairro"]) */
    
         return Professor.create(dados)

     }

    async show({request}){

        const id = request.param('id')
        const show = await Professor.findOrFail(id)
        return show

    }

    async update({request}){

        const id = request.param('id')
        const dados = await request.validate(ProfessorValidator)
        /** only(["nome", "cpf", "matricula", "salario", "email",
         *  "telefone", "cep", "logadouro", "complemento", "numero", "bairro"]) */
        const updat = await Professor.findOrFail(id)
        updat.merge(dados).save()
        return updat

    }

    async destroy({request}){

        const id = request.param('id')
        const delet = await Professor.findOrFail(id)
        delet.delete()
        return delet
        
    }
     
}
