// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso"
import CursoValidator from "App/Validators/CursoValidator"


export default class CursosController {

    async index({request}){
        const {duracao, modalidade} = request.all()
        const curso = Curso.query()
                           .select(['id', 'nome', 'duracao', 'modalidade'])
                           .preload('disciplinas')
        if (duracao) {
            curso.where('duracao', duracao)            
        } else if (modalidade) {
            curso.where('modalidade', modalidade)
        }
        return curso
    }

    async store({request}){
        //const dados = request.only(['nome','duracao','modalidade'])
        const dados = await request.validate(CursoValidator)
        return await Curso.create(dados)
    }

    async show({request}){
        const id = request.param("id")
        const show = await Curso.findOrFail(id)
        return show
    }

    async update ({request}){
    const id = request.param("id")
    const dados = await request.validate(CursoValidator)
    const update = await Curso.findOrFail(id)
    update.merge(dados).save()
    return update
    }

    async destroy({request}){
    const id = request.param("id")
    const deletedRowsCount = await Curso.findOrFail(id)
    await deletedRowsCount.delete()
    return deletedRowsCount
    }

}
