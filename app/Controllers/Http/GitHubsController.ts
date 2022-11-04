// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Git from "App/Models/Git"


export default class GitHubsController {

    async Gitredirect({ally}) {
        return ally.use('github').redirect()
    }

    async GitCallback({ally, auth}) {

        const github = ally.use('github')
      
        const githubUser = await github.user()

        const git = await Git.firstOrCreate({
          email: githubUser.email,
        }, {
          name: githubUser.name,
          accessToken: githubUser.token.token,
          isVerified: githubUser.emailVerificationState === 'verified'
        })

        await auth.use('api').login(git)

        /*const user = await ally
        .use('github')
        .userFromToken(accessToken)*/
    }

}
