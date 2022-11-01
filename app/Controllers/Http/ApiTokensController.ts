// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiTokensController {

    async store({request, auth, response}){
       
        const email = request.input('email')
        const password = request.input('password')
      
        try {
          const token = await auth.use('api').attempt(email, password, {
            expiresIn: '1 mins'
          })
          return token
        } catch {
          return response.unauthorized('Invalid credentials')
        }
    }

}
