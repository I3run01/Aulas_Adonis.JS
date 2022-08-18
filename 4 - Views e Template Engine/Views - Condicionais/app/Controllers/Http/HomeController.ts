// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {


    async index({view}) {

        let dados = {
            
            usuarios:[
            {
                nome: 'Alessandro Kobs',
                tecnologias: ['html', 'css', 'javascript'],
                admin: true
            },
            {
                nome: 'José da Silva',
                tecnologias: ['javascript', 'php', 'python'],
                admin: false
            },
            {
                nome: 'Maria da Silva',
                tecnologias: ['mysql', 'mongodb'],
                admin: true
            }
            ]
        }

        return view.render('homepage', dados)
    }

    async sobre() {
        return 'Sobre nós'
    }
}
