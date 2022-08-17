import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/admin/', 'PainelController.admin')

    Route.group(()=> {
        Route.get('/', 'PainelsController.index')

        Route.get('./indexv','PainelsController.indexv' )

        Route.get('/usuario/:id?/', 'PainelsController.usuarioByID')
            .where('id', Route.matchers.number())//Vai aceitar só numeros
            //Se tiver o ponto de interrogação (?), o parâmetro passa a ser opcional

        Route.get('/usuario/:slug', 'PainelsController.usuarioBySlug')
            .where('slug', Route.matchers.slug())

        Route.get('/docs/*', 'PainelsController.docs')

    }).prefix('/painels/')
    
}).prefix('/api') //agora todas as rotas tem o prefixo api



