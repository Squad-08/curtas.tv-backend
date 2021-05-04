import { Router } from 'express'

import MoviesController from './controllers/MoviesController'

const routes = Router()

const moviesController = new MoviesController()

routes.get('/destaques', moviesController.findAllMaxPopularity)

export { routes }
