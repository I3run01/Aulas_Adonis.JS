import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {


    async index(ctx: HttpContextContract) {

        return ctx.view.render('painel/homepage')
    }

    async sobre() {
        return 'Sobre nós'
    }


}
