import Route from '@ioc:Adonis/Core/Route'

//OBS -> Não deixar o mesmo nome na rota e no controller

Route.group(() => {

    Route.get('/admin/', 'PainelsController.Admin')

    Route.group(()=> {
        Route.get('/', 'PainelsController.index')

        Route.get('/response/', 'PainelsController.indexv')

        Route.get('/redirect/', 'PainelsController.redirectController')

        Route.get('/usuario/:id?/', 'PainelsController.usuarioByID')
            .where('id', Route.matchers.number())//Vai aceitar só numeros
            //Se tiver o ponto de interrogação (?), o parâmetro passa a ser opcional

        Route.get('/usuario/:slug', 'PainelsController.usuarioBySlug')
            .where('slug', Route.matchers.slug())

        Route.get('/docs/*', 'PainelsController.docs')

    }).prefix('/painels')

}).prefix('/api') //agora todas as rotas tem o prefixo api



