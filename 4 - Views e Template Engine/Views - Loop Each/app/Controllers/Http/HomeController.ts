// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {


    async index({view}) {

        let dados = {
            
            usuarios:[
            {
                nome: 'Alessandro Kobs',
                tecnologias: ['html', 'css', 'javascript'],
            },
            {
                nome: 'José da Silva',
                tecnologias: ['javascript', 'php', 'python'],
            },
            {
                nome: 'Maria da Silva',
                tecnologias: ['mysql', 'mongodb'],
            }
            ]
        }

        return view.render('homepage', dados)
    }

    async sobre() {
        return 'Sobre nós'
    }
}
