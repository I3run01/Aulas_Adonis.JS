import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/admin/', 'PainelController.admin')

    Route.group(()=> {
        Route.get('/', 'PainelsController.index')
        Route.get('/usuarios/', 'PainelsController.usuarios')
    }).prefix('/painels/')
    
}).prefix('/api') //agora todas as rotas tem o prefixo api



