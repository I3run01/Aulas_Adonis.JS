// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {


    async index({view}) {

        let dados = {
            usuario: {
                nome: 'Alessandro Kobs',
                tecnologias: ['html', 'css', 'javascript'],
                tecnologias_excluidas: ['mysql']
            }
        }

        return view.render('homepage', dados)
    }

    async sobre() {
        return 'Sobre nós'
    }
}
