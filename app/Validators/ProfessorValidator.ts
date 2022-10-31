import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfessorValidator {
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

    nome: schema.string.nullableAndOptional([
      rules.maxLength(100)
    ]),

    cpf: schema.string.nullableAndOptional([
      rules.maxLength(14),
      rules.minLength(11),
      rules.unique({
        table: 'professors',
        column: 'cpf'
      })
    ]),

    matricula: schema.string.nullableAndOptional([
      rules.maxLength(20),
      rules.minLength(1),
    ]),

    salario: schema.string.nullableAndOptional([
      rules.maxLength(100),
      rules.minLength(3),
      rules.alphaNum()
    ]),

    email: schema.string.nullableAndOptional([
      rules.maxLength(100)
    ]),

    telefone: schema.string.nullableAndOptional([
      rules.maxLength(15)
    ]),

    cep: schema.number.nullableAndOptional(),

    logadouro: schema.string.nullableAndOptional([
      rules.maxLength(100)
    ]),

    complemento: schema.string.nullableAndOptional([
      rules.maxLength(100)
    ]),

    numero: schema.string.nullableAndOptional([
      rules.maxLength(20)
    ]),

    bairro: schema.string.nullableAndOptional([
      rules.maxLength(100)
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
  public messages: CustomMessages = {}
}
