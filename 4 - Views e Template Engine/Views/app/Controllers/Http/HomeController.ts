// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {

    //render
    async index({view}) {
        //usa o ponto para renderizar um arquivo dentro de uma pasta
        return view.render('painel/homepage')
    }

    async sobre() {
        return 'Sobre nós'
    }


}
