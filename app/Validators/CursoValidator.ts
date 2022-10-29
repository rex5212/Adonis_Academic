import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string.optional([
                rules.unique({
                 table: 'cursos',
                 column: 'nome',
                 caseInsensitive: true,
                })
            ]),

            duracao: schema.number.optional([
              rules.range(0 , 12)
            ]),

            modalidade: schema.string.optional([
                rules.maxLength(10),
                rules.minLength(1)
            ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'nome.required': 'O campo nome não pode se nula',
    'nome.unique': 'Esse curso ja esta listado',
    'modalidade.required': 'O campo modalidade não pode se nula',
    'modalidade.maxLength': 'O campo modalidade não pode Utrapasa de 10 carecte',
  }
}
