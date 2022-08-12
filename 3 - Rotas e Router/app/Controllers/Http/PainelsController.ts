// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelsController {

    async index() {
        return {response:'Index do Painel'}
    }

    async usuarios() {
        return {response: 'Usuários do painel'}
    }

    async Admin() {
        return {response: 'Rota admin'}
    }
}
