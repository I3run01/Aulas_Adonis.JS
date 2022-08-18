// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {


    async index({view}) {

        let dados = {
            usuario: {
                nome: 'Alessandro Kobs',
                idade:  60,
                apelido: 'Kobs',
            }
        }

        return view.render('homepage', dados)
    }

    async sobre() {
        return 'Sobre nós'
    }
}
