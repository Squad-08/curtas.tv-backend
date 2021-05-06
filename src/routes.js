import { Router } from 'express'

const swaggerFile = require('./doc/swagger-output.json')
const swaggerUi = require('swagger-ui-express')

import MoviesController from './controllers/MoviesController'

const routes = Router()

const moviesController = new MoviesController()

routes.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes.get('/movies/destaques', async (request, response) => {
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

routes.get('/movies/:genre', async (request, response) => {
    // #swagger.tags = ['movie']
    // #swagger.description = 'Endpoint para obter os curtas por gênero.'
    // #swagger.parameters['genre'] = { description: 'Gênero dos curtas desejado.' }
    // #swagger.parameters['limitOf'] = { description: 'Limite para quantidade de curtas retornado.', type: 'integer'}

    /** #swagger.responses[200] = { 
         schema: { $ref: "#/definitions/MoviesByGenre" },
        description: 'Lista de curtas do gênero informado.' 
     } 
    */

    /** #swagger.responses[400] = {
           schema: { $ref: '#/definitions/Error400' },
           description: 'Bad request.'
       }
    */
    return await moviesController.findByGenre(request, response)
})

routes.get('/movie/:id', async (request, response) => {
    // #swagger.tags = ['movie']
    // #swagger.description = 'Endpoint para busca de curta por id, incrementando a popularidade do curta.'
    // #swagger.parameters['id'] = { description: 'Id do curta, do tipo uuid v4.', type: 'string' }

    /** #swagger.responses[200] = {
            schema: { $ref: '#/definitions/Movie' },
            description: 'Curta encontrado com o id informado.'
        }
     */

    /** #swagger.responses[400] = {
           schema: { $ref: '#/definitions/Error400' },
           description: 'Bad request.'
       }
    */

    /** #swagger.responses[500] = {
           schema: { $ref: '#/definitions/Error500' },
           description: 'Erro interno.'
       }
     */
    return await moviesController.findById(request, response)
})

export { routes }
