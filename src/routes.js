import { Router } from 'express'

const swaggerFile = require('./doc/swagger-output.json')
const swaggerUi = require('swagger-ui-express')

import MoviesController from './controllers/MoviesController'

const routes = Router()

const moviesController = new MoviesController()

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes.get('/destaques', async (request, response) => {
    // #swagger.tags = ['movie']
    // #swagger.description = 'Endpoint para obter os curtas em destaque.'
    // #swagger.parameters['limitOf'] = { description: 'Limite para quantidade de curtas retornado.', type: 'integer'}

    /** #swagger.responses[200] = { 
         schema: { $ref: "#/definitions/PopularMovies" },
        description: 'Lista de curtas em destaque encontrados.' 
     } 
    */

    /** #swagger.responses[5xx] = {
        schema: { $ref: "#/definitions/Error500" },
        description: 'Erro interno.' 
     }
     */
    return await moviesController.findAllMaxPopularity(request, response)
})

routes.get('/:genre', async (request, response) => {
    // #swagger.tags = ['movie']
    // #swagger.description = 'Endpoint para obter os curtas por gênero.'
    // #swagger.parameters['genre'] = { description: 'Gênero dos curtas desejado.' }
    // #swagger.parameters['limitOf'] = { description: 'Limite para quantidade de curtas retornado.', type: 'integer'}

    /** #swagger.responses[200] = { 
         schema: { $ref: "#/definitions/MoviesByGenre" },
        description: 'Lista de curtas do gênero informado.' 
     } 
    */
    return await moviesController.findByGenre(request, response)
})

export { routes }
