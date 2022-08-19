// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {


    async index({view}) {

        let dados = {
            variaval: 'Minha variável',
            getUser: async() => {return 'User'},
            script: "<script> alert('teste')</script>"
        }

        return view.render('homepage', dados)
    }

    async sobre() {
        return 'Sobre nós'
    }
}
