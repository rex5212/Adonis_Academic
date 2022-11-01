// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from "App/Models/Professor";
import ProfessorValidator from "App/Validators/ProfessorValidator";

export default class ProfessorsController {
    
    async index(/*{request, auth}*/){
//      const dados = request.only(["email"])
//      await auth.use('web').attempt(dados.email)
        return Professor.query()
     }
 
     async store({request}){

        const dados = await request.validate(ProfessorValidator)
        //const user = request.only(["email", ])
        /** only(["nome", "cpf", "matricula", "salario", "email",
         *  "telefone", "cep", "logadouro", "complemento", "numero", "bairro"]) */
        //const professor = Professor.create(dados)
        //const professoruser = User.create(dados)
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
