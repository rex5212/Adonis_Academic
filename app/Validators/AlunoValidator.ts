import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
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
      rules.unique({
        column: 'nome',
        table: 'alunos'
      }),
      rules.maxLength(100),
      rules.minLength(3),
      rules.alpha()
    ]),

    cpf: schema.string.optional([
      rules.unique({
        table: 'alunos',
        column: 'cpf'
      }),
      rules.maxLength(14),
      rules.minLength(11),
      //rules.regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/), arrumar
      rules.alphaNum({
        allow: ['dash', 'underscore'],
      }),
    ]),

    matricula: schema.string.optional([
      rules.unique({
        column: 'matricula',
        table: 'alunos'
      }),
      rules.maxLength(20),
      rules.minLength(1),
      rules.alphaNum()
    ]),

    email: schema.string.optional([
      rules.maxLength(100),
      rules.email()
    ]),

    telefone: schema.string.optional([
      rules.maxLength(15),
      rules.minLength(9),
      rules.mobile({
         locale: ['pt-BR'] 
        })
      //rules.mobile({ strict: true })
    ]),

    cep: schema.number.optional([
      rules.range(0, 9999999999)
    ]),

    logadouro: schema.string.optional([
      rules.maxLength(100)
    ]),

    complemento: schema.string.optional([
      rules.maxLength(100)
    ]),

    numero: schema.string.optional([
      rules.unique({
        column: 'numero',
        table: 'alunos'
      }),
      rules.maxLength(120),
      rules.mobile({
        locale: ['pt-BR'] 
       })
    ]),

    bairro: schema.string.optional([
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
  public messages: CustomMessages = {
    alphaNum: 'O campo so aceita numeros',
    alpha: 'O campo não aceita Letras',
    'matricula.unique': 'Essa Matricula ja foi criada',
    'numero.unique': 'Esse numero ja fou utilizado',
    'nome.unique': 'Esse nome ja foi cadastrado',
    'nome.maxLength': 'A quantidade de carateres em nome passou de 100',
    'cpf.maxLength': 'O cpf possui 11 caracteres',
    'cpf.minLength': 'O cpf possui 11 caracteres',
    'matricula.maxLength': 'A quantidade de carateres em matricula passou de 100',
    'email.maxLength': 'A quantidade de carateres em email passou de 100',
    'telefone.maxLength': 'A quantidade de carateres em telefone passou de 100',
    'logadouro.maxLength': 'A quantidade de carateres em logadouro passou de 100',
    'complemento.maxLength': 'A quantidade de carateres em complemento passou de 100',
    'numero.maxLength': 'A quantidade de numeros passou de 100',
    'bairro.maxLength': 'A quantidade de carateres em bairro passou de 100',
  }
}
