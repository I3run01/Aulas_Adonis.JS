// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {

    protected users = [
        {
            id: 1,
            slug: 'ale',
            name: 'Alessandro Kobs'
        },
        {
            id: 2,
            slug: 'fufu',
            name: 'Fulano da Silva'
        }
    ]
    
    //Pegando dados por uma QueryString
    async index({request}) {
        request.qs()
        return {
            response: 'Index do painel',
            header: request.header(), //headers enviados na requisição
            language: request.language(), //Pega o idioma preferico daquele navegador
            method: request.method(), //Rotorna o método da requisição (GET, POST, PUT, DELETE)
            ip: request.ip(), //Pega o ip do usuário
            ips: request.ips(), //Pega os possíveis ips que o usuário está usando parachagar até a página
            qs: request.qs(),
            url: request.url(), //Pega a parte final do endereço do meu site
            completeURL: request.completeURL(), //Pega toda a URL
            input: request.all(), //pega todos os inputs
            only: request.only(['idade', 'nome']), //pega os requests de idade e nome
            except: request.except(['idade'])
        }
    }

    async indexv({response}) {
       let json = {hello: 'world'}

        //status diz se deu certo ou não, depois envia o json
        response.status(201).send(json)
    }

    async redirectController({response}) {
        response.redirect().toPath('/api/painels/usuario/2')
    }

    async usuarioByID({params}) {
        if ( !params['id']) {
            return {users: this.users}
        } 

        let myRequestUserid = params['id']
        let myUser = this.users.find(user => user.id == myRequestUserid)
        
        if(myUser) {
            return myUser
        }else {
            return {error: 'Nenhum usuário encontrado'}
        }
        
    }

    async usuarioBySlug({params}) {
        let myRequestUserSlug = params['slug']
        let myUser = this.users.find(user => user.slug == myRequestUserSlug)
        
        if(myUser) {
            return myUser
        }else {
            return {error: 'Nenhum usuário encontrado'}
        }
    }

    async Admin() {
        return {response: 'Rota admin'}
    }

    async func() {
        return {response: 'test'}
    }

    async docs({params}) {
        return params['*'][2] //retorna o parametro de rota posição [2]
    }
}
